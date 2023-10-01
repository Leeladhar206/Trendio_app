import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { URL } from "./Login"
import axios from "axios"

const initialData = {
  f_name: "",
  l_name: "",
  email: "",
  password: "",
  token: "",
  admin: false,
}

const Register = () => {
  const [userData, setUserData] = useState(initialData)
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
        token:
          prev.f_name.slice(3) +
          Math.floor(Math.random() * 99999) +
          prev.l_name.slice(3),
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(userData)
    axios({
      method: "post",
      url: `${URL}/users`,
      data: userData,
    })
      .then((r) => navigate("/login"))
      .catch((error) => console.login(error))
  }
  return (
    <div style={{ padding: "100px" }}>
      <h1>Register</h1>
      <div>
        <input
          name="f_name"
          type="text"
          placeholder="firstname"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="l_name"
          type="text"
          placeholder="lastname"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Register</button>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Register
