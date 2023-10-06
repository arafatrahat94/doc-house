import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ScrolltoTop from "../Shared/ScrolltoTop";
import Cover from "../SharedComponent/Cover";

import appontmentImg from "../../assets/other/appointment.svg";
import Calendar from "./Calender";
import dayjs from "dayjs";

const Appointment = () => {
  // default scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const currentDate = dayjs();
  const [selectDate, setSelectDate] = useState(currentDate);

  console.log();
  console.log(currentDate.toDate().toDateString());
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
        {selectDate.toDate().toDateString() !==
        currentDate.toDate().toDateString() ? (
          <>
            <h1 className="text-center mt-[50px] text-xl text-[#F7A582]">
              Available Services On {selectDate.toDate().toDateString()}
            </h1>
            <h1 className="text-3xl font-bold text-[#07332F] mt-3 text-center">
              Please select a service.
            </h1>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Appointment;
