import React from "react";
import img from "../../assets/Group 1.svg";
const Footer = () => {
  return (
    <div className="lgpx-20 px-14 bg-[#F3F3F3]">
      <footer className="footer py-14  text-base-content">
        <aside className="flex flex-col justify-center w-full">
          <div className="flex w-full lg:w-4/5 justify-center items-center gap-3">
            <img src={img} alt="" />
            <h1 className="text-2xl font-VarelaRound text-[#F7A582] font-extrabold">
              Doc <span className="text-green-950">House</span>
            </h1>
          </div>
          <p className="lg:w-[250px] text-center w-full lg:text-left mt-3 text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. has been since the printer took.
          </p>
          <button className="btn mx-auto lg:mx-0 w-1/2 mt-3 border-[#F7A582] rounded-md bg-white text-[#F7A582] normal-case font-VarelaRound">
            Appointment
          </button>
        </aside>
        <nav className=" w-full flex flex-col justify-center items-center lg:items-start">
          <header className="text-2xl mb-3 font-VarelaRound font-extrabold text-black">
            Quick Links
          </header>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            About Us
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Service
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Doctors
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Departments
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Online Payment
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Contact Us
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            My Account
          </a>
        </nav>
        <nav className=" w-full flex flex-col justify-center items-center lg:items-start">
          <header className="text-2xl mb-3 font-VarelaRound font-extrabold text-black">
            Doc House Services
          </header>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Pediatric Clinic
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Diagnosis Clinic
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Cardiac Clinic
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Laboratory Analysis
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Gynecological Clinic
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Personal Counseling
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Dental Clinic
          </a>
        </nav>
        <nav className=" w-full flex flex-col justify-center items-center lg:items-start">
          <header className="text-2xl mb-3 font-VarelaRound font-extrabold text-black">
            Working Hours
          </header>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Monday - 10 am to 7 pm
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Tuesday - 10 am to 7 pm
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Wednesday - 10 am to 7 pm
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Thursday - 10 am to 7 pm
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Friday - 10 am to 7 pm
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Saturday - 10 am to 7 pm
          </a>
          <a className="link text-gray-700 font-bold font-VarelaRound link-hover">
            Sunday - 10 am to 7 pm
          </a>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 py-6 border-t-2 border-green-950 text-base-content">
        <aside>
          <p className="text-gray-600 font-VarelaRound">
            Copyright © 2022 - All right reserved by Doc House Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
