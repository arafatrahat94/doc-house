import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import ScrolltoTop from "../Shared/ScrolltoTop";
const Appointments = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const { user } = useAuth();
  const [appointData, setAppointData] = useState([]);
  useEffect(() => {
    fetch(
      `https://doc-house-server-lac.vercel.app/userAppointment?email=${user?.userMail}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("DOC-ACCESS")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("hi");
        setAppointData(data.reverse());
      });
  }, [user]);

  return (
    <div className="min-h-screen">
      <ScrolltoTop></ScrolltoTop>
      <Helmet>
        <title>My Appointment | Doc House</title>
      </Helmet>
      <h1 className="bg-[#07332F] h-40 items-end pb-10 lg:pb-0 lg:h-20 text-xl text-white flex  lg:items-center p-3">
        My Appointments
      </h1>

      <div className="w-[374px] md:w-full overflow-scroll">
        <div className="hidden overflow-x-auto w-[95%] mx-auto mt-6 xl:block">
          <table className="table -z-20">
            {/* head */}
            <thead>
              <tr className="bg-[#07332F] text-white">
                <th className="text-center">#</th>
                <th className="text-center">Name</th>
                <th className="text-center">Service</th>
                <th className="text-center">Time</th>
                <th className="text-center">Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {appointData.length > 0 &&
                appointData?.map((x, i) => (
                  <>
                    <tr>
                      <th className="text-center">{i + 1}</th>
                      <td className="text-center">
                        {x.patientName.slice(0, 19)}
                      </td>
                      <td className="text-center">{x.service}</td>
                      <td className="text-center">{x.time}</td>
                      <td className="text-center">{x.date}</td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-scroll w-[95%] mx-auto mt-6 xl:hidden">
          <table className="table -z-20">
            {/* head */}
            <div className="flex  bg-[#07332F] text-white">
              <th className="w-[49px] border-e flex items-center justify-center">
                #
              </th>
              <div className="w-[159px] border-e flex items-center justify-center">
                Name
              </div>
              <div className="w-[159px] border-e flex items-center justify-center">
                Service
              </div>
              <div className="w-[159px] border-e flex items-center justify-center">
                Time
              </div>
              <div className="w-[199px] flex items-center justify-center">
                Date
              </div>
            </div>

            <div>
              {appointData.length > 0 &&
                appointData?.map((x, i) => (
                  <>
                    <div className="flex gap-y-2">
                      <div className="my-3 w-[49px] border-e flex items-center justify-center">
                        {i + 1}
                      </div>
                      <div className="w-[159px] border-e flex items-center justify-center">
                        {x.patientName.slice(0, 19)}
                      </div>
                      <div className="w-[159px] border-e flex items-center justify-center">
                        {x.service}
                      </div>
                      <div className="w-[159px] border-e flex items-center justify-center">
                        {x.time.split(":00").join("")}
                      </div>
                      <div className="w-[199px] flex items-center justify-center">
                        {x.date}
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
