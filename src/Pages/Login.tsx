import React, { useContext, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  HStack,
  Heading,
  Icon,
  Input,
  Text,
  VStack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../Components/AuthContextProvider';
import { Link as RoutLink, useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (authContext?.login) {
      authContext.login(userName, password);
    }

    setUserName("");
    setPassword("");

    navigate("/");
  };

  if (authContext?.isAuth) {
    navigate("/");
  }

  return (
    <div className="login-container"> {/* Use the CSS class for the container */}
      <div className="login-box"> {/* Use the CSS class for the login box */}
        <Box fontSize="3xl" color="gray.500" textAlign="center" mb={4}>
          <Icon as={FaUser} />
        </Box>

        <Heading mt={4}>Log in</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} mt={4}>
            <FormControl>
              <Input onChange={(e) => setUserName(e.target.value)} name="userName" value={userName} border={"1px solid #3333"} placeholder='Enter User Name' type='text' />
            </FormControl>
            <FormControl>
              <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} border={"1px solid #3333"} placeholder='Enter Password' type='password' />
            </FormControl>
          </VStack>
          <Box mt={4} textAlign={'center'}>
            <Button type='submit' w={"150px"} bg={"black"} color={"#fff"} _hover={{ bg: "yellow.500", color: "#000" }}>LOGIN</Button>
          </Box>
          <HStack mt={4} justifyContent={"flex-end"}>
            <Text>Don't have an account?</Text>
            <ChakraLink as={RoutLink} color='blue.500' to={"/Signup"}>Sign up</ChakraLink>
          </HStack>
        </form>
      </div>
    </div>
  );
};

export default Login;
