import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ScrolltoTop from "../Shared/ScrolltoTop";
import Cover from "../SharedComponent/Cover";
import { useForm } from "react-hook-form";
import appontmentImg from "../../assets/other/appointment.svg";
import Calendar from "./Calender";
import dayjs from "dayjs";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import animation from "../../assets/animation/HuzGRytvUn.json";
import Lottie from "lottie-react";
import animation2 from "../../assets/animation/i14fQ7QtWF.json";
const Modal = ({ dcData }) => {
  // doctor data

  const { image_url, location, name } = dcData;

  // hook form function
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  
 
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirm] = useState(false);
  // /userAppointment
  const onSubmit = (formdata) => {
    setLoading(true);
    const newdata = {
      ...formdata,
      doctorPic: image_url,
      doctorLocation: location,
      doctorName: name,
    };
    axiosSecure.post("/userAppointment", newdata).then((res) => {
      if (res.data.acknowledged === true) {
        setLoading(false);
        setConfirm(!confirmed);
      }

      console.log(res);
    });
    console.log(newdata);
  };
  const auth = useAuth();

  const [appointData, setAppointData] = useState([]);
  // default scroll to top
  useEffect(() => {
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    fetch("https://doc-house-server-lac.vercel.app/Appointment")
      .then((res) => res.json())
      .then((data) => {
        setAppointData(data);
      });
  }, []);

  const currentDate = dayjs();
  const [selectDate, setSelectDate] = useState(currentDate);
  const [singleArray, setSingleArray] = useState([]);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        {/* <div className=" absolute backdrop-blur bg-opacity-60 w-full">
    <Lottie animationData={animation}></Lottie>
  </div> */}
        <div className="modal-box px-4 py-2 bg-[#FFF]">
          <div>
            <form method="dialog" className="modal-backdrop">
              <div className="absolute right-1  btn btn-square  top-1  scale-90 bg-[#07332F]  ">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </form>
            {confirmed === true ? (
              <>
                <Lottie
                  mode="bounce"
                  controls
                  autoplay
                  loop="false"
                  className="w-72 mx-auto"
                  animationData={animation2}
                ></Lottie>
              </>
            ) : (
              <>
                <div>
                  <h1 className="text-left font-bold text-xl my-2 text-[#07332F]">
                    {singleArray.name}
                  </h1>

                  <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                    <div className="form-control my-4">
                      <input
                        type="text"
                        placeholder="doctor name"
                        defaultValue={name}
                        className="input  rounded-lg  font-bold text-[#07332F] w-full bg-[#E6E6E6]"
                      />
                    </div>
                    <div className="form-control my-4">
                      <input
                        type=""
                        placeholder="select date"
                        defaultValue={selectDate.toDate().toDateString()}
                        {...register("date")}
                        className="input rounded-lg  font-bold text-[#07332F] w-full bg-[#E6E6E6]"
                      />
                    </div>
                    <div className="form-control my-4">
                      <input
                        type="text"
                        placeholder="time"
                        defaultValue={y.time}
                        {...register("time")}
                        className="input  rounded-lg  font-bold text-[#07332F] w-full bg-[#E6E6E6]"
                      />
                    </div>
                    <div className="form-control my-4">
                      <input
                        type="text"
                        required
                        {...register("patientName")}
                        placeholder="patient full name"
                        defaultValue={auth.user.userName}
                        className="input rounded-lg input-bordered  text-[#07332F] w-full bg-[#FFF]"
                      />
                    </div>
                    <div className="form-control my-4">
                      <input
                        type="text"
                        {...register("phone")}
                        required
                        placeholder="phone number"
                        className="input rounded-lg input-bordered  text-[#07332F] w-full bg-[#FFF]"
                      />
                    </div>
                    <div className="form-control my-4">
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="email"
                        required
                        defaultValue={auth.user.userMail}
                        className="input rounded-lg input-bordered  text-[#07332F] w-full bg-[#FFF]"
                      />
                    </div>
                    <div>
                      <button className="rounded-lg bg-[#07332F] text-white btn w-full">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
        {loading === true ? (
          <>
            {" "}
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
        ) : (
          <></>
        )}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
