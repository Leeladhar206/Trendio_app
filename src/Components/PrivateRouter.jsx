import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
  const auth = false;

  return <div>{auth ? children : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
