import React from "react";
import shape1 from "../../../assets/shapes/Ellipse 1 (1).png";
import dot from "../../../assets/shapes/dot.png";
import cap from "../../../assets/shapes/cap.png";
import user1 from "../../../assets/banner/Rectangle 20075.png";
import user2 from "../../../assets/banner/Rectangle 20076.png";
import user3 from "../../../assets/banner/Rectangle 20077.png";
const Banner = () => {
  return (
    <div className="font-SourceSans3 ">
      <div className="h-[685px]  lg:h-[560px] relative bg-[#07332F]">
        <div className="">
          <img
            className="hidden lg:block w-[300px] absolute right-[150px] top-[100px]"
            src={shape1}
            alt=""
          />
          <img
            className="w-[100px] top-[540px] absolute lg:right-[400px] right-64 z-10 lg:top-[330px]"
            src={dot}
            alt=""
          />
          <img
            className="w-[60px] absolute right-[510px] top-[370px]"
            src={cap}
            alt=""
          />
          <img
            className="lg:w-[100px] w-[45px] rotate-[35deg] absolute lg:right-[510px] right-8 top-[150px]"
            src={cap}
            alt=""
          />
          <img
            className="lg:w-[150px]  rotate-[180deg] absolute left-[0px] top-[-50px] lg:top-[-158px]"
            src={cap}
            alt=""
          />
        </div>
        <div className="pt-20 z-10">
          <div className="grid lg:grid-cols-2 ">
            <div className="lg:ps-24 mt-16 lg:pt-14 text-white">
              <div
                className="lg:text-5xl
              lg:text-left text-center mx-auto w-[277px] tracking-wide lg:tracking-normal  lg:w-full text-3xl font-KaushanScript font-bold"
              >
                <h1>Your Best Medical</h1>
                <h1 className="mt-3 lg:mt-0">Help Center</h1>
              </div>
              <p className="text-center lg:text-left lg:mt-2 mt-6 font-VarelaRound">
                Lorem Ipsum is simply dummy text they are printing typesetting
                has been the industry’s stardard.
              </p>
              <div className="flex lg:justify-start justify-center">
                <button className="btn bg-[#F7A582] rounded-lg  py-3 normal-case font-SourceSans  px-8 text-white lg:px-6 h-14  border-none  btn-primary mt-6 lg:mt-4">
                  All Services
                </button>
              </div>
            </div>
            <div className="mt ">
              <img
                className="lg:w-[190px] w-[149px] lg:left-[550px] left-10 bottom-[80px]  lg:bottom-[160px] absolute "
                src={user3}
                alt=""
              />
              <img
                className="lg:w-[190px] w-[149px] z-[2] absolute bottom-24 right-10 lg:right-20 lg:bottom-[187px]"
                src={user1}
                alt=""
              />
              <img
                className="lg:w-[190px] w-[149px] lg:right-[150px] bottom-6 lg:bottom-[100px] right-20 z-[1] absolute ms-auto me-10"
                src={user2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
