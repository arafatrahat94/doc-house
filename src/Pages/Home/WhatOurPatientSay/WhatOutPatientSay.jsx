import React, { useCallback, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import { PiQuotesDuotone } from "react-icons/pi";
import { useNavigation } from "react-router-dom";
const WhatOutPatientSay = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://doc-house-server-lac.vercel.app/Reviews`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const breakpoint = {
    1000: { slidesPerView: 2 },
    300: { slidesPerView: 1 },
  };
  const navigation = useNavigation();
  return (
    <div className="mb-[130px]  mx-auto">
      <h1 className=" lg:text-3xl text-2xl text-black font-VarelaRound font-bold text-center">
        What Our Patients Says
      </h1>
      <p className="text-center text-sm lg:text-base w-[350px] lg:w-[750px] mx-auto mt-5 mb-12">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      {navigation.state === "loading" ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        <div>
          <Swiper
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            breakpoints={breakpoint}
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            className="mySwiper w-11/12 mx-auto lg:h-[255px] xl:w-9/12"
          >
            {data.map((x, i) => (
              <>
                <SwiperSlide key={i}>
                  <div className="xl:w-[500px] lg:w-[458px] h-[300px] lg:h-[250px] w-[340px] shadow-lg border lg:p-0 rounded-2xl border-[#F7A582] mx-auto">
                    <div className="flex items-center justify-between me-10">
                      <div className="flex items-center">
                        <img
                          className="w-[80px] mx-7 mt-5 mb-3 ring ring-[#F7A582] rounded-full"
                          src={x.image_url}
                          alt=""
                        />
                        <div>
                          <h1 className="text-xl font-VarelaRound text-black font-bold">
                            {x.name}
                          </h1>
                          <h1 className=" text-[#6C6B6B] font-VarelaRound font-bold">
                            {x.profession}
                          </h1>
                        </div>
                      </div>
                      <h1 className="hidden lg:block text-6xl text-[#F7A582] rotate-180">
                        <PiQuotesDuotone />
                      </h1>
                    </div>
                    <p className="text-[#6C6B6B] font-VarelaRound text-center lg:text-left lg:w-[400px] mx-3 lg:mx-auto">
                      Lorem Ipsum has been the industry’s standard dummy text
                      ever since the 1500s, when an unknow printer tool a galley
                      of type and scrambled it to make type specimen book has
                      survived not only five centurines.
                    </p>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
          <div className="flex xl:justify-between justify-center xl:w-[80%] gap-x-[300px] lg:gap-x-[900px] mx-auto => { second } -top-[170px] items-center relative z-10 lg:-top-[150px]">
            {" "}
            <div className="cursor-pointer" ref={navigationPrevRef}>
              <SlArrowLeftCircle className="lg:text-5xl lg:bg-[#F7A582] bg-white text-4xl text-[#F7A582] rounded-full lg:text-white" />
            </div>
            <div className="cursor-pointer" ref={navigationNextRef}>
              <SlArrowRightCircle className="lg:text-5xl lg:bg-[#F7A582] text-4xl bg-white text-[#F7A582] rounded-full lg:text-white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatOutPatientSay;
