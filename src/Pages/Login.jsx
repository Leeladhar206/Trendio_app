import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {
  authRequest,
  authRequestFailure,
  authRequestSuccess,
} from "../Redux/auth/actions"
import { Link, useNavigate } from "react-router-dom"

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
        navigate("/")
      })
      .catch((error) => dispatch(authRequestFailure()))
  }

  return (
    <div style={{ padding: "100px" }}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="email"
        onChange={handleChange}
        name="email"
      />
      <input
        type="password"
        placeholder="password"
        onChange={handleChange}
        name="password"
      />
      <button onClick={handleSubmit}>Login</button>

      <div>
        <Link to="/register">Register</Link>
      </div>
    </div>
  )
}

export default Login
