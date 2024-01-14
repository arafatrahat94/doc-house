import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import { GoCalendar, GoLocation } from "react-icons/go";
import { TbCurrencyTaka } from "react-icons/tb";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
const OurExpertDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch(`https://doc-house-server-lac.vercel.app/Doctors`)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const breakpoint = {
    1000: { slidesPerView: 1 },
    300: { slidesPerView: 1 },
  };
  const [ItemsPerPage, setItemsPerPage] = useState(6);
  const totalItemsPage = Math.ceil(doctors.length / ItemsPerPage);
  const pageNumber = [...Array(totalItemsPage).keys()];
  // console.log(pageNumber);
  const [currentPage, setCurrentPage] = useState(1);
  const decrase = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const increasenumber = () => {
    if (currentPage < totalItemsPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  // view profile
  const handleView = (id) => {
    console.log(id);
  };
  useEffect(() => {
    if (window.screen.width > 1024) {
      setItemsPerPage(8);
    }
  }, []);
  return (
    <div id="doctors">
      <div>
        <h1 className="text-3xl font-VarelaRound font-bold text-center">
          Our Expert Doctors
        </h1>
        <p className="text-center text-sm lg:text-base w-[340px] lg:w-[750px] mx-auto mt-5 mb-12">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div>
        <div>
          <Swiper
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            spaceBetween={30}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            breakpoints={breakpoint}
            modules={[Navigation]}
            className="mySwiper h-full w-11/12 mx-auto"
          >
            {pageNumber.map((index) => (
              <>
                <SwiperSlide className=" w-full custScreen:py-4 rounded-2xl">
                  {/* {window.scrollTo({ top: 2650, left: 0, behavior: "smooth" })} */}
                  <div className="grid lg:grid-cols-3 xl:grid-cols-4  gap-y-3">
                    {doctors
                      .slice(index * ItemsPerPage, (index + 1) * ItemsPerPage)
                      .map((x, i) => (
                        <>
                          <div key={i}>
                            <div className="card mx-auto w-[300px] h-[575px] custScreen:h-[575px] lg:h-[575px] bg-base-100 shadow-xl">
                              <div className="w-[300px] h-[200px] p-3">
                                <img
                                  src={x.image_url}
                                  alt=""
                                  className="object-cover h-[200px] w-full rounded-xl"
                                />
                              </div>
                              <div className="mt-6  mx-3">
                                <h2 className=" font-VarelaRound text-xl text-[#07332F] font-bold  text-left">
                                  {x.name}
                                </h2>
                                <p className="text-gray-500 font-SourceSans font-medium">
                                  <span> {x.type}</span> -{" "}
                                  {x.position.slice(0, 19)}
                                </p>
                                <div className="mt-2 mb-[36px] flex gap-2 text-gray-500">
                                  {" "}
                                  <Rating
                                    style={{ maxWidth: 100 }}
                                    value={x.rating}
                                    readOnly
                                  />
                                  ({x.rating})
                                </div>
                                <div>
                                  <div className="flex gap-x-4 my-2 items-center text-[#6C6B6B]">
                                    <GoLocation className="text-2xl" />
                                    {x.location}
                                  </div>
                                  <div className="flex gap-x-4 my-2 items-center text-[#6C6B6B]">
                                    <GoCalendar className="text-2xl" />
                                    Available On Mon, 22 December
                                  </div>
                                  <div className="flex gap-x-4 my-2 items-center text-[#6C6B6B]">
                                    <TbCurrencyTaka className="text-2xl" />
                                    {x.price_bdt}
                                  </div>
                                </div>
                                <div>
                                  <div className="card-actions ">
                                    <Link
                                      to={`/ViewProfile/${x._id}`}
                                      className="btn w-full border-[#F7A582] rounded-md bg-white rounded-t-xl text-[#F7A582] normal-case font-VarelaRound"
                                    >
                                      View Profile
                                    </Link>
                                  </div>
                                  <div className="card-actions mt-1">
                                    <Link
                                      to={`/Appoinment/${x._id}`}
                                      className="btn w-full border-[#F7A582] bg-[#07332F] rounded-b-xl rounded-md  text-[#F7A582] normal-case font-VarelaRound"
                                    >
                                      Book Appointment
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
          <div className="flex ms-8 mt-10  items-center  z-10 ">
            {" "}
            <div
              onClick={decrase}
              className="cursor-pointer"
              ref={navigationPrevRef}
            >
              <SlArrowLeftCircle className="lg:text-6xl text-4xl bg-[#F7A582] rounded-full text-white" />
            </div>
            <h1 className="cursor-default mx-3 font-VarelaRound lg:text-xl text-gray-500">
              {currentPage} / {totalItemsPage}
            </h1>
            <div
              className="cursor-pointer"
              onClick={increasenumber}
              ref={navigationNextRef}
            >
              <SlArrowRightCircle className="lg:text-6xl text-4xl bg-[#F7A582] rounded-full text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertDoctors;
