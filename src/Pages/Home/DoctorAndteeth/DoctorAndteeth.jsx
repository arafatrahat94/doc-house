import React, { useState } from "react";
import img1 from "../../../assets/banner/long.png";
import theet from "../../../assets/other/teeth.png";
const DoctorAndteeth = () => {
  const [text, setText] = useState(
    "Cavity protection is a fundamental aspect of oral hygiene aimed at preventing dental caries, commonly known as cavities. Dental cavities are areas of decay in the teeth, primarily caused by the interaction of bacteria, sugars, and acids that erode the tooth enamel over time. Maintaining effective cavity protection is essential for preserving overall oral health and preventing the need for extensive dental treatments."
  );
  const [textT, setTextT] = useState("Cavity Protection");
  return (
    <div>
      <div className="grid gap-x-2 my-7 lg:grid-cols-2 xl:w-9/12 w-11/12 mx-auto">
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
          <p className="lg:ms-2 mx-auto text-[##3B3A3A] text-xs text-center lg:text-left w-[293px]  lg:text-base lg:w-[480px] my-6">
            we pride ourselves on delivering exceptional dental services
            tailored to meet the unique needs of each patient. Our commitment to
            excellence, advanced technology, and a compassionate approach sets
            us apart as your trusted partner in achieving and maintaining
            optimal oral health.
          </p>
          <div className="lg:flex lg:justify-start justify-center gap-y-2 grid grid-cols-2 lg:flex-row gap-x-2">
            <button
              onClick={() => {
                setText(
                  "Cavity protection is a fundamental aspect of oral hygiene aimed at preventing dental caries, commonly known as cavities. Dental cavities are areas of decay in the teeth, primarily caused by the interaction of bacteria, sugars, and acids that erode the tooth enamel over time. Maintaining effective cavity protection is essential for preserving overall oral health and preventing the need for extensive dental treatments."
                );
                setTextT("Cavity Protection");
              }}
              className={`${
                textT === "Cavity Protection" ? "bg-[#F7A582] " : ""
              } btn text-[#3B3A3A]  rounded-lg h-[60px] normal-case font-VarelaRound font-bold btn-active `}
            >
              Cavity Protection
            </button>
            <button
              onClick={() => {
                setText(
                  "Cosmetic dentistry is a specialized field of dental care that focuses on improving the aesthetic appearance of teeth, gums, and the overall smile. While traditional dentistry primarily addresses oral health issues, cosmetic dentistry goes beyond that by enhancing the visual aspects of a person's smile. This branch of dentistry employs various techniques and procedures to create positive changes, resulting in a more confident and aesthetically pleasing smile."
                );
                setTextT("Cosmetic dentistry");
              }}
              className={`${
                textT === "Cosmetic dentistry" ? "bg-[#F7A582] " : ""
              } btn text-[#3B3A3A]  rounded-lg h-[60px] normal-case font-VarelaRound font-bold btn-active `}
            >
              Cosmetic Dentistry
            </button>
            <button
              onClick={() => {
                setText(
                  "Oral surgery is a specialized branch of dentistry that encompasses a range of surgical procedures involving the mouth, jaw, and facial structures. These procedures are often necessary to address complex dental issues, correct abnormalities, or improve overall oral health. Conducted by oral surgeons, these professionals are highly trained in surgical techniques, anesthesia administration, and patient care, ensuring precision and safety throughout the surgical process."
                );
                setTextT("Oral Surgery");
              }}
              className={`${
                textT === "Oral Surgery" ? "bg-[#F7A582] " : ""
              } btn text-[#3B3A3A]  rounded-lg h-[60px] normal-case font-VarelaRound font-bold btn-active `}
            >
              Oral Surgery
            </button>
          </div>
          <div className="mt-4 mx-2">
            <img src={theet} className="" alt="" />
            <h1 className="text-xl text-center text-black lg:text-left lg:text-2xl font-VarelaRound font-bold mt-4">
              {textT}
            </h1>
            <div className="w-[335px] mx-auto lg:w-full text-center lg:text-left text-gray-600 mt-2 lg:mt-2">
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAndteeth;
