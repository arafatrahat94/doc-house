import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return <>Loading....</>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
