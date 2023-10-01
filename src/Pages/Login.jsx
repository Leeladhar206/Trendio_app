import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  authRequest,
  authRequestFailure,
  authRequestSuccess,
} from "../Redux/auth/actions";
import { Link, useNavigate } from "react-router-dom";

// Import the URL directly from your environment configuration
// import { VITE_DBURL as URL } from "@env";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");

  // const navigate = useNavigate();

  // const dispatch = useDispatch();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   switch (name) {
  //     case "email":
  //       setEmail(value);
  //       break;
  //     case "password":
  //       setPassword(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(authRequest());

  //   axios({
  //     method: "post", 
  //     url: `${URL}/login`, 
  //     data: {
  //       email,
  //       password,
  //     },
  //   })
  //     .then((r) => {
  //       dispatch(authRequestSuccess(r.data.token));
  //       setToken(r.data.token);
  //       localStorage.setItem("token", r.data.token);
  //       console.log(token); 
  //       navigate("/");
  //     })
  //     .catch(() => dispatch(authRequestFailure()));
  // };

  return (
    <div>
      {/* <h1>Login</h1>
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
      </div> */}
    </div>
  );
};

export default Login;
