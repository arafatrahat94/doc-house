import { useEffect, useState } from "react";
import {
  AiOutlineLogin,
  AiOutlinePoweroff,
  AiOutlineUser,
} from "react-icons/ai";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import ActiveLink2 from "../Pages/Shared/ActiveLink2";
import useAuth from "../hooks/useAuth";
import logo from "../assets/react.png";
import Swal from "sweetalert2";
import "../Pages/Shared/Nav.css";
import UseToast from "../hooks/useToast";

const DashboardLayout = () => {
  // Scroll to add effect on Navbar::>
  const [navBar, setNavbar] = useState(false);
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  // TO DO: ADMIN CHECK FROM THE DATA BASE
  const isAdmin = true;
  useEffect(() => {
    changeBackground();
    // console.log(navBar);
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  const { user, LogOut } = useAuth();

  const [buttonLoading, setbuttonLoading] = useState(false);
  const Toast = UseToast();
  const handleLogOut = () => {
    setbuttonLoading(true);
    Swal.fire({
      title: "Sign Out Now?",
      icon: `warning`,
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: "#07332F",
      cancelButtonColor: "#F7A582",
      background: "white",
      backdrop: "blur",
      customClass: {
        icon: "no-border",
      },
      width: "300px",
      color: "#07332F",
      confirmButtonText: "Yes,Sign Out",
    }).then((result) => {
      if (result.isConfirmed) {
        LogOut()
          .then(() => {
            setbuttonLoading(false);
            Toast.fire({
              icon: "success",
              position: "top",

              title: "User Signed Out",
            });
          })
          .catch(() => {});
      } else {
        setbuttonLoading(false);
      }
    });
  };
  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <div
            className={`${
              navBar === true
                ? "lg:bg-[#07332F] lg:w-[600px] lg:border-black border rounded-3xl lg:hidden lg:transform lg:duration-700"
                : "lg:hidden lg:delay-200 lg:transform lg:duration-700 lg:w-[900px]"
            }  lg:my-3  text-white fixed top-3 border-none  mx-auto navbar`}
          >
            <div
              className={`${
                navBar === true
                  ? "lg:w-[250px] w-full   bg-opacity-100 lg:bg-opacity-0  lg:py-0 rounded-2xl justify-between transform duration-500 bg-[#07332F] flex   "
                  : "w-full lg:navbar-start bg-[#07332F]    py-2 lg:py-0 rounded-2xl transform duration-500 flex justify-between "
              }`}
            >
              <div className="dropdown  order-2 lg:hidden">
                <div className="drawer-content">
                  {/* Page content here */}
                  <label
                    htmlFor="my-drawer-2"
                    className="btn drawer-button bg-transparent border-none "
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </label>
                </div>
              </div>
              <div className="flex order-1">
                <a
                  className={`${
                    navBar === true
                      ? "btn btn-ghost duration-500 normal-case text-[18px] lg:text-xl"
                      : "btn btn-ghost duration-500 normal-case text-xl"
                  }`}
                >
                  <img
                    className={`${
                      navBar === true
                        ? "w-5 lg:w-10 duration-500"
                        : "w-10 duration-500"
                    }`}
                    src={logo}
                    alt=""
                  />{" "}
                  <span className="text-[#F7A582]">Doc</span>House
                </a>
              </div>
            </div>
            <div className="navbar-end hidden gap-x-4 w-full lg:flex">
              <ul className="menu menu-horizontal gap-x-8 me-2"></ul>
            </div>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className=" w-64 border lg:border-none border-[#07332F] bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="flex  p-3  bg-[#07332F] w-full items-center gap-x-2 text-white">
              <img className="w-10" src={logo} alt="" />
              <h1 className="text-xl text-[#F7A582] font-VarelaRound">
                Doc <span className="text-white">House</span>
              </h1>
            </div>
            <div className="flex pb-6 flex-col justify-between h-[91vh] ">
              <div className="flex font-VarelaRound font-bold ms-2 flex-col bg-gradient-to-r from-[#07332F]  to-gray-900 bg-clip-text text-transparent  ps-2 gap-y-4 mt-4">
                {isAdmin === true ? (
                  <>
                    {" "}
                    <Link
                      to="/DashBoard/DashBoards"
                      className="flex items-center gap-x-2"
                    >
                      <a>DashBoard</a>{" "}
                      <ActiveLink2 to="/DashBoard/DashBoards">
                        <BsFillCaretLeftFill className="text-[#07332F]" />
                      </ActiveLink2>
                    </Link>
                    {/* <Link
                      to="/Dashboard/AllUsers"
                      className="flex items-center gap-x-2"
                    >
                      <a>All Users</a>{" "}
                      <ActiveLink2 to="/Dashboard/AllUsers">
                        <BsFillCaretLeftFill className="text-[#07332F]" />
                      </ActiveLink2>
                    </Link> */}
                    {/* <Link
                      to="/Dashboard/AddAdoctor"
                      className="flex items-center gap-x-2"
                    >
                      <a>Add a Doctor</a>{" "}
                      <ActiveLink2 to="/Dashboard/AddAdoctor">
                        <BsFillCaretLeftFill className="text-[#07332F]" />
                      </ActiveLink2>
                    </Link> */}
                    {/* <Link
                      to="/Dashboard/ManageDoctor"
                      className="flex items-center gap-x-2"
                    >
                      <a>Manage Doctors</a>{" "}
                      <ActiveLink2 to="/Dashboard/ManageDoctor">
                        <BsFillCaretLeftFill className="text-[#07332F]" />
                      </ActiveLink2>
                    </Link> */}
                    <Link to="/" className="flex items-center gap-x-2">
                      <a>Home</a>{" "}
                      <ActiveLink2 to="/">
                        <BsFillCaretLeftFill className="text-[#07332F]" />
                      </ActiveLink2>
                    </Link>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link to="/" className="flex items-center gap-x-2">
                      <a>Home</a>{" "}
                      <ActiveLink2 to="/">
                        <BsFillCaretLeftFill className="text-[#07332F]" />
                      </ActiveLink2>
                    </Link>
                    <Link
                      to="/Dashboard/Appointments"
                      className="flex items-center gap-x-2"
                    >
                      <a>My Appoinments</a>{" "}
                      <ActiveLink2 to="/Dashboard/Appointments">
                        <BsFillCaretLeftFill className="text-[#07332F]" />
                      </ActiveLink2>
                    </Link>
                  </>
                )}
              </div>

              <div className="mb-3 custScreen:mb-5 flex flex-col justify-center items-center gap-y-2">
                {user ? (
                  <>
                    {" "}
                    <Link
                      to="/DashBoard/DashBoards"
                      className=" bg-gradient-to-r from-[#07332F]  to-gray-900 py-3 rounded-lg shadow-md text-white  flex items-center justify-center w-9/12"
                    >
                      <AiOutlineUser />
                      <h1 className="relative ms-2 bottom-[-2px]">
                        {user.userName?.slice(0, 19)}
                      </h1>
                    </Link>
                    <button
                      onClick={handleLogOut}
                      className=" bg-gradient-to-r from-[#07332F]  to-gray-900 py-3 rounded-2xl shadow-md text-white  flex items-center justify-center w-9/12"
                    >
                      {buttonLoading === true ? (
                        <>
                          <span className="loading w-4 loading-spinner"></span>
                        </>
                      ) : (
                        <AiOutlinePoweroff />
                      )}
                    </button>
                  </>
                ) : (
                  <Link to="/Login">
                    <button className=" bg-gradient-to-r from-[#07332F]  to-gray-900 w-9/12 py-3 rounded-3xl shadow-md text-white  flex items-center justify-center ">
                      <AiOutlineLogin />
                      <h1 className="relative ms-1 ">Login</h1>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
