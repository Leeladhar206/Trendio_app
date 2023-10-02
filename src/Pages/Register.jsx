import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "./Login";
import axios from "axios";
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
  Link as ChakraLink,
  FormControl,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"; // Import icons for show/hide password

const initialData = {
  f_name: "",
  l_name: "",
  email: "",
  password: "",
  token: "",
  admin: false,
};

const Register = () => {
  const [userData, setUserData] = useState(initialData);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
        token:
          prev.f_name.slice(3) +
          Math.floor(Math.random() * 99999) +
          prev.l_name.slice(3),
      };
    });
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${URL}/users`,
      data: userData,
    })
      .then((r) => navigate("/login"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Box
        p={8}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        w={{ base: "70%", md: "380px" }}
        margin="0 auto"
        mt="30px"
        mb="20px"
        height={"500px"}
      >
        <Heading textAlign="center" size="lg">
          Sign up
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={6} mt={8} align="left">
            <FormControl>
              <Input
                required
                onChange={handleChange}
                name="f_name"
                type="text"
                placeholder="First Name"
              />
            </FormControl>
            <FormControl>
              <Input
                required
                onChange={handleChange}
                name="l_name"
                type="text"
                placeholder="Last Name"
              />
            </FormControl>
            <FormControl>
              <Input
                required
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Email"
              />
            </FormControl>
            <FormControl>
              <InputGroup>
                <Input
                  required
                  onChange={handleChange}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
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
          <Box mt="40px" textAlign="center">
            <Button
              type="submit"
              w="150px"
              bg="black"
              color="#fff"
              _hover={{ bg: "yellow.500", color: "#000" }}
            >
              SUBMIT
            </Button>
          </Box>
          <HStack mt={5} justifyContent="flex-end">
            <Text></Text>
            <ChakraLink as={Link} to="/login" color="blue.500">
              Log in
            </ChakraLink>
          </HStack>
        </form>
      </Box>
    </>
  );
};

export default Register;