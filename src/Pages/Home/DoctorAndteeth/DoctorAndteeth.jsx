import React from "react";
import img1 from "../../../assets/banner/long.png";
import theet from "../../../assets/other/teeth.png";
const DoctorAndteeth = () => {
  return (
    <div>
      <div className="grid gap-x-2 my-7 lg:grid-cols-2 w-11/12 mx-auto">
        <div>
          <img className="lg:w-[450px] w-[335px] mx-auto" src={img1} alt="" />
        </div>
        <div className="mt-6 lg:mt-0">
          <h1
            className="lg:text-4xl text-3xl text-center lg:text-left font-VarelaRound text-black font-bold m-2
          "
          >
            Our Services
          </h1>
          <p className="lg:ms-2 mx-auto text-[##3B3A3A] text-xs text-center lg:text-left w-[293px]  lg:text-base lg:w-[430px] my-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="lg:flex justify-center gap-y-2 grid grid-cols-2 lg:flex-row gap-x-2">
            <button className="btn bg-[#F7A582] text-[#3B3A3A]  rounded-lg h-[60px] normal-case font-VarelaRound font-bold btn-active ">
              Cavity Protection
            </button>
            <button className="btn normal-case text-[#3B3A3A]  rounded-lg h-[60px]  font-VarelaRound font-bold btn-active ">
              Cosmetic Dentistry
            </button>
            <button className="btn  text-[#3B3A3A]  rounded-lg h-[60px] normal-case font-VarelaRound font-bold btn-active  ">
              Oral Surgery
            </button>
          </div>
          <div className="mt-4 mx-2">
            <img src={theet} className="" alt="" />
            <h1 className="text-xl text-center text-black lg:text-left lg:text-2xl font-VarelaRound font-bold mt-4">
              Electro Gastrology Therapy
            </h1>
            <div className="w-[335px] mx-auto lg:w-full text-center lg:text-left text-gray-600 mt-2 lg:mt-0">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inve ntore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste
                natus error{" "}
              </p>
              <p>
                Sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start mt-2 lg:mt-0">
              <button className="mt-3 btn rounded-lg  outline outline-[#F7A582] text-[#F7A582]">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAndteeth;
