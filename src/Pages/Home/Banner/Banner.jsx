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
      <div className="w-full h-[755px] xl:h-[690px]  md:h-[560px] relative bg-[#07332F]">
        <div className="">
          <img
            className="hidden lg:block w-[300px] absolute right-[150px] top-[100px]"
            src={shape1}
            alt=""
          />
          <img
            className="w-[100px] top-[600px] absolute lg:right-[400px] xl:right-[590px] xl:top-[490px] right-64 z-10 md:top-[330px]"
            src={dot}
            alt=""
          />
          <img
            className="w-[60px] xl:top-[619px] absolute right-[510px] top-[370px]"
            src={cap}
            alt=""
          />
          <img
            className="lg:w-[100px] w-[45px] rotate-[35deg] absolute lg:right-[510px] xl:right-[700px] right-8 top-[150px]"
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
          <div className="grid md:grid-cols-2 ">
            <div className="lg:ps-24 mt-16 lg:pt-14 text-white">
              <div
                className="lg:text-5xl
              lg:text-left xl:text-7xl text-center mx-auto w-[277px] tracking-wide lg:tracking-normal  lg:w-full text-3xl font-KaushanScript font-bold"
              >
                <h1>Your Best Medical</h1>
                <h1 className="mt-3 lg:mt-0">Help Center</h1>
              </div>
              <p className="text-center xl:mt-10 lg:text-left lg:mt-2 xl:w-[90%] mt-6 font-VarelaRound">
                Choosing the best medical help center is crucial for well-being.
                Some institutions stand out for their excellence, setting a high
                standard for compassionate care in the healthcare landscape.
              </p>
              <div className="flex lg:justify-start justify-center">
                <button className="btn bg-[#F7A582] rounded-lg  py-3 normal-case font-SourceSans  px-8 text-white lg:px-6 h-14 xl:mt-10 xl:px-10 xl:h-16 xl:text-xl  border-none  btn-primary mt-6 lg:mt-4">
                  All Services
                </button>
              </div>
            </div>
            <div className="mt relative top-72 lg:top-20 xl:top-28">
              <img
                className="xl:w-[250px] lg:w-[190px] w-[149px]   left-10 bottom-[80px] xl:bottom-[230px] lg:bottom-[160px] absolute "
                src={user3}
                alt=""
              />
              <img
                className="xl:w-[250px] lg:w-[190px] w-[149px] z-[2] absolute xl:bottom-[270px] xl:right-32 bottom-24 right-10 lg:right-20 lg:bottom-[187px]"
                src={user1}
                alt=""
              />
              <img
                className="xl:w-[250px] lg:w-[190px] w-[149px] lg:right-[150px] xl:right-[230px] bottom-6 lg:bottom-[100px] right-20 z-[1] absolute ms-auto me-10"
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
