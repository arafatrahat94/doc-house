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
        setAppointData(data);
      });
  }, [user]);

  return (
    <div>
      <ScrolltoTop></ScrolltoTop>
      <Helmet>
        <title>My Appointment | Doc House</title>
      </Helmet>
      <h1 className="bg-[#07332F] h-40 items-end pb-10 lg:pb-0 lg:h-20 text-xl text-white flex  lg:items-center p-3">
        My Appointments
      </h1>

      <div>
        <div className="overflow-x-auto mx-5 mt-6">
          <table className="table -z-20">
            {/* head */}
            <thead>
              <tr className="bg-[#07332F] text-white">
                <th className="">#</th>
                <th>Name</th>
                <th>Service</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {appointData.length > 0 &&
                appointData?.map((x, i) => (
                  <>
                    <tr>
                      <th>{i + 1}</th>
                      <td>{x.patientName.slice(0, 19)}</td>
                      <td>{x.service}</td>
                      <td>{x.time}</td>
                      <td>{x.date}</td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
