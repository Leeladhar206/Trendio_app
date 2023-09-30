import { useState } from "react"
import {
  Box,
  Button,
  FormControl,
  HStack,
  Heading,
  Icon,
  Input,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react"
import { FaUser } from "react-icons/fa"
import { Link as RoutLink, useNavigate } from "react-router-dom"
import "./Login.css"

// fw27_112 insertions below
import axios from "axios"
import { ChangeEvent, FormEvent } from "react"
import { useDispatch } from "react-redux"
import {
  authRequest,
  authRequestFailure,
  authRequestSuccess,
} from "../Redux/auth/actions"

export const URL: string = import.meta.env.VITE_DBURL as string

const Login = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [token, setToken] = useState<string>("")

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value)
    }

    if (e.target.name === "password") {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
        navigate("/")
      })
      .catch((error) => dispatch(authRequestFailure()))
  }
  return (
    <div className="login-container">
      {" "}
      {/* Use the CSS class for the container */}
      <div className="login-box">
        {" "}
        {/* Use the CSS class for the login box */}
        <Box fontSize="3xl" color="gray.500" textAlign="center" mb={4}>
          <Icon as={FaUser} />
        </Box>
        <Heading mt={4}>Log in</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} mt={4}>
            <FormControl>
              <Input
                onChange={handleChange}
                name="userName"
                border={"1px solid #3333"}
                placeholder="Enter User Name"
                type="text"
              />
            </FormControl>
            <FormControl>
              <Input
                onChange={handleChange}
                name="password"
                border={"1px solid #3333"}
                placeholder="Enter Password"
                type="password"
              />
            </FormControl>
          </VStack>
          <Box mt={4} textAlign={"center"}>
            <Button
              type="submit"
              w={"150px"}
              bg={"black"}
              color={"#fff"}
              _hover={{ bg: "yellow.500", color: "#000" }}
            >
              LOGIN
            </Button>
          </Box>
          <HStack mt={4} justifyContent={"flex-end"}>
            <Text>Don't have an account?</Text>
            <ChakraLink as={RoutLink} color="blue.500" to={"/Signup"}>
              Sign up
            </ChakraLink>
          </HStack>
        </form>
      </div>
    </div>
  )
}

export default Login
