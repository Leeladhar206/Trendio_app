// import axios from "axios"
// import React, { useEffect, useState } from "react"
// import { useDispatch } from "react-redux"
// import {
//   authRequest,
//   authRequestFailure,
//   authRequestSuccess,
// } from "../Redux/auth/actions"
// import { Link, useNavigate } from "react-router-dom"

// export const URL = import.meta.env.VITE_DBURL

// const Login = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const [token, setToken] = useState("")

//   const navigate = useNavigate()

//   const dispatch = useDispatch()
//   const handleChange = (e) => {
//     if (e.target.name === "email") {
//       setEmail(e.target.value)
//     }

//     if (e.target.name === "password") {
//       setPassword(e.target.value)
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     dispatch(authRequest())
//     axios({
//       method: "get",
//       url: `${URL}/users`,
//       params: {
//         email,
//         password,
//       },
//     })
//       .then((r) => {
//         dispatch(authRequestSuccess(r.data[0].token))
//         setToken(r.data[0].token)
//         localStorage.setItem("token", r.data[0].token)
//         navigate("/")
//       })
//       .catch((error) => dispatch(authRequestFailure()))
//   }

//   return (
//     <div style={{ padding: "100px" }}>
//       <h1>Login</h1>
//       <input
//         type="email"
//         placeholder="email"
//         onChange={handleChange}
//         name="email"
//       />
//       <input
//         type="password"
//         placeholder="password"
//         onChange={handleChange}
//         name="password"
//       />
//       <button onClick={handleSubmit}>Login</button>

//       <div>
//         <Link to="/register">Register</Link>
//       </div>
//     </div>
//   )
// }

// export default Login
import axios from "axios"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {
  authRequest,
  authRequestFailure,
  authRequestSuccess,
} from "../Redux/auth/actions"
import { Link, useNavigate } from "react-router-dom"
import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  VStack,
  Link as ChakraLink,
  FormControl,
} from "@chakra-ui/react"

export const URL = import.meta.env.VITE_DBURL

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value)
    }
    if (e.target.name === "password") {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authRequest())
    axios({
      method: "get",
      url: `${URL}/users`,
      params: {
        email,
        password,
      },
    })
      .then((r) => {
        dispatch(authRequestSuccess(r.data[0].token))
        setToken(r.data[0].token)
        localStorage.setItem("token", r.data[0].token)
        navigate(-1)
      })
      .catch((error) => dispatch(authRequestFailure()))
  }

  return (
    <Box
      p={8}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      w="400px"
      h="500px"
      margin="0 auto"
      mt="90px"
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
            <Input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              required
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
            Login
          </Button>
        </Box>
        <Text mt={4} textAlign="center">
          <Link to="/register" as={ChakraLink} color="blue.500">
            Register
          </Link>
        </Text>
      </form>
    </Box>
  )
}

export default Login
