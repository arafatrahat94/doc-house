import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import "../../Shared/Nav.css";
import useAdmin from "../../../hooks/useAdmin";
import axios from "axios";

const AllUsers = () => {
  const isAdmin = useAdmin();
  console.log(isAdmin);
  const [alluser, setAlluser] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("https://doc-house-server-lac.vercel.app/usersAll", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("DOC-ACCESS")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAlluser(data);
      });
  }, []); // Empty dependency array to fetch data only once on mount

  const handleAdmin = (userId) => {
    console.log(userId);
    // Fetch data when the component mounts
    fetch(`https://doc-house-server-lac.vercel.app/users/admin/${userId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("DOC-ACCESS")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <Helmet>
        <title>All Users | Doc House</title>
      </Helmet>
      <h1 className="h-16 text-white flex items-center text-2xl ps-10 bg-[#07332F]">
        All Users
      </h1>
      <div className="overflow-x-auto w-11/12 mx-auto pt-7">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#07332F] text-white text-center">
              <th>#</th>
              <th>Name</th>
              <th>Admin/Normal</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {alluser.map((x, i) => (
              <tr key={x._id}>
                <th>{i + 1}</th>
                <td>{x.userMail}</td>
                <td className="flex justify-center">
                  <button
                    onClick={() => handleAdmin(x._id)}
                    className="btn rounded-lg bg-[#07332F] text-white"
                  >
                    Make Admin
                  </button>
                </td>
                <td className=" ">
                  <button className="btn rounded-lg w-full  bg-[#07332F] text-white">
                    Remove User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
