import React, { useContext, useState } from 'react';
import { Box, Button, Flex, FormControl, HStack, Heading, Image, Input, Text, VStack, Link as ChakraLink } from '@chakra-ui/react';
import { AuthContext } from '../Components/AuthContextProvider';
import { Link as RoutLink, useNavigate } from 'react-router-dom';

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
    <>
      <Flex justify={"center"} align={"center"} h={"90vh"}>
        <Box p={8} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} w={'400px'} h={"400px"}>
        <Heading>Log in</Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={10} mt={10}>
              <FormControl>
                <Input onChange={(e) => setUserName(e.target.value)} name="userName" value={userName} border={"1px solid #3333"} placeholder='Enter User Name' type='text' />
              </FormControl>
              <FormControl>
                <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} border={"1px solid #3333"} placeholder='Enter Password' type='password' />
              </FormControl>
            </VStack>
            <Box mt={"40px"} textAlign={'center'}>
              <Button type='submit' w={"150px"} bg={"black"} color={"#fff"} _hover={{ bg: "yellow.500", color: "#000" }}>LOGIN</Button>
            </Box>
            <HStack mt={5} justifyContent={"flex-end"}>
              <Text></Text>
              <ChakraLink as={RoutLink} color='blue.500' to={"/Signup"}>Sign up</ChakraLink>
            </HStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
