import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const ContactWithUs = () => {
  return (
    <div>
      <div className="hero  text-white lg:p-10 lg:h-[408px] w-11/12 mx-auto rounded-lg my-[130px] bg-[#07332F]">
        <div className="lg:hero-content flex-col gap-x-5 lg:flex-row">
          <div className="text-center lg:text-left me-10">
            <h1 className="lg:text-4xl text-2xl mt-4 font-VarelaRound font-bold">
              Contact With Us
            </h1>
            <p className="lg:py-6 my-4 lg:m-0 w-[290px] mx-auto">
              Thank you for visiting Doc House, your trusted source for reliable
              health information. If you have any questions, concerns, or
              feedback, we encourage you to get in touch with us.
            </p>
            <div className="lg:ms-3  flex items-center gap-2 justify-center lg:justify-start">
              <BsTelephoneOutbound className="text-white text-3xl" /> +88 01750
              14 14 14
            </div>
            <div className="lg:ms-3  lg:mt-2 mt-4 flex items-center gap-2 justify-center lg:justify-start">
              <GoLocation className="text-white text-3xl" /> Dhanmondi, Dhaka,
              Bangladesh
            </div>
          </div>
          <div className="card p-4 flex-shrink-0 lg:w-1/2  shadow-2xl  ">
            <div className="">
              <div className="lg:my-4 lg:flex gap-x-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="input mt-2 lg:mt-0 bg-[#FFFFFF0D] w-full lg:w-1/2 rounded-md input-bordered"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="input mt-2 lg:mt-0 w-full lg:w-1/2 bg-[#FFFFFF0D]  rounded-md input-bordered"
                />
              </div>
              <div className="lg:my-4 flex-col lg:flex gap-y-2">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="input mt-2 lg:mt-0 bg-[#FFFFFF0D] w-full  rounded-md input-bordered"
                />
                <input
                  type="text"
                  placeholder="Details"
                  className="input mt-2 lg:mt-0 bg-[#FFFFFF0D] w-full  rounded-md input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#F7A582] text-white rounded-md border-none">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWithUs;
