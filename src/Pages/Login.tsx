import axios from "axios"
import React, { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import {
  authRequest,
  authRequestFailure,
  authRequestSuccess,
} from "../Redux/auth/actions"
import { Link, useNavigate } from "react-router-dom"

export const URL: string = import.meta.env.VITE_DBURL as string

const Login: React.FC = () => {
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
        console.log(token)
        navigate("/")
      })
      .catch(() => dispatch(authRequestFailure()))
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <button type="submit">Login</button>
      </form>

      <div>
        <Link to="/register">Register</Link>
      </div>
    </div>
  )
}

export default Login
