import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
  let auth = { token: localStorage.getItem("token") || null }

  return <div>{auth.token  ? children : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
