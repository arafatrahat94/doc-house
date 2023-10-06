import React from "react";
import lanscapeImg from "../assets/utilities/Lanscapeerror.svg";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center flex-col justify-center">
      <img className="mx-auto lg:w-fit w-56" src={lanscapeImg} alt="" />
      <button
        className="bg-[#F7A582] mt-4 btn-wide btn rounded-md text-white"
        onClick={() => navigate(-1)}
      >
        Back To Home
      </button>
    </div>
  );
};

export default Error;
