import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Lottie from "lottie-react";
import animation from "../assets/animation/jHAs62BXXQ.json";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <>
        <div className="min-h-screen w-full flex justify-center items-center">
          <Lottie
            mode="bounce"
            controls
            autoplay
            className="w-72 mx-auto"
            animationData={animation}
          ></Lottie>
        </div>
      </>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
