import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Lottie from "lottie-react";
import animation from "../assets/animation/HuzGRytvUn.json";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <>
        <div className="modal-box absolute backdrop-blur items-center flex h-[516px]  bg-opacity-0 p-2 rounded-xl">
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
