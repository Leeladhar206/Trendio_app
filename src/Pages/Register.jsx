// import React, { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { URL } from "./Login"
// import axios from "axios"

// const initialData = {
//   f_name: "",
//   l_name: "",
//   email: "",
//   password: "",
//   token: "",
//   admin: false,
// }

// const Register = () => {
//   const [userData, setUserData] = useState(initialData)
//   const navigate = useNavigate()
//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setUserData((prev) => {
//       return {
//         ...prev,
//         [name]: value,
//         token:
//           prev.f_name.slice(3) +
//           Math.floor(Math.random() * 99999) +
//           prev.l_name.slice(3),
//       }
//     })
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // console.log(userData)
//     axios({
//       method: "post",
//       url: `${URL}/users`,
//       data: userData,
//     })
//       .then((r) => navigate("/login"))
//       .catch((error) => console.login(error))
//   }
//   return (
//     <div style={{ padding: "100px" }}>
//       <h1>Register</h1>
//       <div>
//         <input
//           name="f_name"
//           type="text"
//           placeholder="firstname"
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <input
//           name="l_name"
//           type="text"
//           placeholder="lastname"
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <input
//           name="email"
//           type="email"
//           placeholder="email"
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <input
//           name="password"
//           type="password"
//           placeholder="password"
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <button onClick={handleSubmit}>Register</button>
//       </div>
//       <div>
//         <Link to="/login">Login</Link>
//       </div>
//     </div>
//   )
// }

// export default Register
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
} from "@chakra-ui/react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${URL}/users`,
      data: userData,
    })
      .then((r) => navigate("/login"))
      .catch((error) => console.console.log(error));
  };

  return (
    <>
      <Box
        p={8}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        w="400px"
        h="500px"
        margin="0 auto"
        mt="90px"
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
              <Input
                required
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Password"
              />
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
