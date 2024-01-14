import { Helmet } from "react-helmet-async";
import Cover from "../../SharedComponent/Cover";
import Banner from "../Banner/Banner";
import DoctorAndteeth from "../DoctorAndteeth/DoctorAndteeth";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { BsFillCaretUpFill, BsTelephoneOutbound } from "react-icons/bs";
import WhatOutPatientSay from "../WhatOurPatientSay/WhatOutPatientSay";
import OurExpertDoctors from "../OurExpertDoctors/OurExpertDoctors";
import ContactWithUs from "../ContactWithUs/ContactWithUs";
import { useEffect, useState } from "react";
import ScrolltoTop from "../../Shared/ScrolltoTop";
const Home = () => {
  // on scroll button show
  const [buttonShow, setButton] = useState(false);
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 300) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home | Doc-House</title>
      </Helmet>
      <div className="relative lg:-top-10 ">
        <Banner></Banner>
      </div>
      {/* <div
        className={`${
          buttonShow === true
            ? "fixed bottom-10 right-3 transform opacity-100 duration-500"
            : "opacity-0 fixed bottom-10 right-3 transform duration-500"
        } z-20 animate-bounce duration-300 delay-300`}
      >
        <button
          onClick={HandleScroll}
          className="btn p-2 lg:w-14 rounded-full cursor-pointer border-2 border-[#07332F]  "
        >
          <span className="text-[#07332F] ">
            <BsFillCaretUpFill />
          </span>
        </button>
      </div> */}
      <ScrolltoTop></ScrolltoTop>
      <DoctorAndteeth></DoctorAndteeth>
      <div className="my-[100px]">
        <div className="gap-x-2 lg:w-[950px] lg:mx-auto lg:flex  justify-center ">
          <div className=" flex items-center justify-center bg-[#07332F] my-2 rounded-xl p-4 lg:w-[300px] gap-x-2 h-[150px] lg:h-[180px]">
            <div className="ms-3">
              <AiOutlineClockCircle className="text-white text-5xl" />
            </div>
            <div className="flex flex-col ms-3 justify-center">
              <h1 className="text-white text-2xl">Opening Hours</h1>
              <h3 className="text-white mt-3">
                Open 9.00 am to 5.00pm Everyday
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#F7A582] my-2 rounded-xl p-4 lg:w-[300px] gap-x-2 h-[150px] lg:h-[180px]">
            <div className="ms-3">
              <SlLocationPin className="text-white text-5xl" />
            </div>
            <div className="flex flex-col ms-3 justify-center">
              <h1 className="text-white text-2xl">Our Locations</h1>
              <h3 className="text-white mt-3">
                Dhanmondi 17, Dhaka -1200, Bangladesh
              </h3>
            </div>
          </div>
          <div className="flex items-center  bg-[#07332F] my-2 rounded-xl p-4 lg:w-[300px]  gap-x-2 h-[150px] lg:h-[180px]">
            <div className="ms-3">
              <BsTelephoneOutbound className="text-white text-5xl" />
            </div>
            <div className="flex flex-col ms-3 justify-center">
              <h1 className="text-white text-2xl">Contact Us</h1>
              <h3 className="text-white mt-3">
                +88 01750 00 00 00 <br /> +88 01750 00 00 00
              </h3>
            </div>
          </div>
        </div>
      </div>

      <WhatOutPatientSay></WhatOutPatientSay>
      <OurExpertDoctors></OurExpertDoctors>
      <div className="">
        <ContactWithUs></ContactWithUs>
      </div>
    </div>
  );
};

export default Home;
