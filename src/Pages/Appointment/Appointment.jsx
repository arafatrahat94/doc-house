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
import UseToast from "../../hooks/useToast";
import Swal from "sweetalert2";
const Appointment = () => {
  // doctor data
  const dcData = useLoaderData();
  const { image_url, location, name } = dcData;
  const [singleArray, setSingleArray] = useState([]);
  // hook form function
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const Toast = UseToast();
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(null);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  // /userAppointment
  const onSubmit = (formdata) => {
    setLoading(true);
    const newdata = {
      ...formdata,
      service: singleArray.name,
      doctorPic: image_url,
      doctorLocation: location,
      doctorName: name,
    };
    axios
      .post("http://localhost:5000/userAppointment", newdata, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("DOC-ACCESS")}`,
        },
      })
      .then((res) => {
        if (res.data.acknowledged === true) {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Your Appoinment Is Booked",
            background: "#07332F",
            backdrop: "blur",

            showConfirmButton: false,
            width: "400px",
            color: "white",
          }).then(() => {
            setConfirmed(null);
          });
          setConfirmed(true);
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

  const handleService = (x) => {
    setSingleArray(x);
  };
  console.log(singleArray);
  return (
    <div className="min-h-screen">
      <ScrolltoTop></ScrolltoTop>
      <Helmet>
        <title>Appointment | Doc-House</title>
      </Helmet>
      <Cover path={"Appointment"} coverTitle={"Appointment"}></Cover>
      <div className="w-11/12 mx-auto lg:p-4 flex flex-col items-center justify-center lg:grid lg:grid-cols-2">
        <div className=" scale-90  p-2 shadow-md rounded-lg w-11/12">
          <Calendar
            setSelectDate={setSelectDate}
            selectDate={selectDate}
          ></Calendar>
        </div>
        <div className="rounded-lg  flex items-center">
          <img
            src={appontmentImg}
            className="lg:w-full w-[300px] mx-auto lg:h-[300px] rounded-md object-cover"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="text-center mt-[50px] lg:text-xl text-[#F7A582]">
          Available Services On {selectDate.toDate().toDateString()}
        </h1>
        <h1 className="lg:text-3xl text-2xl font-bold text-[#07332F] mt-3 text-center">
          Please select a service.
        </h1>
        <div className="grid my-10 w-11/12 mx-auto gap-3 lg:grid-cols-3">
          {appointData.map((x) => (
            <>
              <div
                onClick={() => handleService(x)}
                className={`${
                  x._id === singleArray._id
                    ? "border rounded-xl border-[#07332F] border-opacity-40 bg-[#f7a5821c] flex items-center gap-x-2"
                    : " flex items-center bg-[#f7a5821c] gap-x-2"
                }`}
              >
                <img className="w-[100px]" src={x.image_url} alt="" />
                <h1 className="text-xl font-bold text-[#07332F]">{x.name}</h1>
              </div>
            </>
          ))}
        </div>
        <h1 className="lg:text-3xl text-xl font-bold text-[#07332F] my-7 text-center">
          Available slots for Teeth {singleArray.name}
        </h1>
        <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 mx-auto w-11/12">
          {singleArray?.schedule?.map((y) => (
            <>
              <div className="text-center bg-[#07332f0e] p-2 rounded-lg my-4">
                <h1 className="text-xl font-bold text-center text-[#07332F]">
                  {singleArray.name}
                </h1>
                <h1 className="lg:text-2xl my-3">{y.time}</h1>
                <div onBlur={() => setConfirmed(null)}>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="bg-[#F7A582]  btn rounded-lg text-white  lg:px-6"
                  >
                    Book Appointment
                  </button>
                </div>
                <div>
                  {confirmed === null ? (
                    <>
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

                            <div>
                              <h1 className="text-left font-bold text-xl my-2 text-[#07332F]">
                                {singleArray.name}
                              </h1>

                              <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="mt-8"
                              >
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
                                    defaultValue={selectDate
                                      .toDate()
                                      .toDateString()}
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
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
