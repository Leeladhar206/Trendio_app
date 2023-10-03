import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  authRequest,
  authRequestFailure,
  authRequestSuccess,
} from "../Redux/auth/actions";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  VStack,
  Link as ChakraLink,
  FormControl,
  InputGroup,
  InputRightElement, // Import InputRightElement
  IconButton, // Import IconButton
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"; // Import icons for show/hide password

export const URL = import.meta.env.VITE_DBURL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authRequest());
    axios({
      method: "get",
      url: `${URL}/users`,
      params: {
        email,
        password,
      },
    })
      .then((r) => {
        
        dispatch(authRequestSuccess(r.data[0].token));
        setToken(r.data[0].token);
        localStorage.setItem("token", r.data[0].token);
        console.log(r.data)
        navigate(-1);
      })
      .catch((error) => dispatch(authRequestFailure()));
  };

  return (
    <Box
      p={8}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      w={{ base: "70%", md: "350px" }}
      margin="0 auto"
      mt="30px"
      mb="20px"
      height={"380px"}
    >
      <Heading textAlign="center" size="lg">
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={6} mt={8} align="left">
          <FormControl>
            <Input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              required
            />
          </FormControl>
          <FormControl>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={handleChange}
                name="password"
                required
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  h="1.75rem"
                  size="sm"
                  onClick={handlePasswordVisibility}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </VStack>
        <Box mt={4} textAlign="center">
          <Button
            type="submit"
            w="150px"
            bg="black"
            color="#fff"
            _hover={{ bg: "yellow.500", color: "#000" }}
          >
            Login
          </Button>
        </Box>
        <Text mt={4} textAlign="center">
          <ChakraLink as={RouterLink} to="/register" color="blue.500">
            Register
          </ChakraLink>
        </Text>
      </form>
    </Box>
  );
};

export default Login;