import { useForm } from "react-hook-form";

import animationsm from "./animation.svg";
import animationlg from "./animation2.svg";
import { BsEye, BsEyeSlash, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import UseToast from "../../hooks/useToast";
import { Helmet } from "react-helmet-async";
import ScrolltoTop from "../Shared/ScrolltoTop";
const Login = () => {
  // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const { loginwithpass, googleLogin, forgotPass } = useAuth();
  const Toast = UseToast();

  const [buttonLoading, setbuttonLoading] = useState(false);
  const [gbuttonLoading, setGbuttonLoadin] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    setbuttonLoading(true);
    loginwithpass(data.email, data.password)
      .then(() => {
        setbuttonLoading(false);

        Toast.fire({
          icon: "success",
          position: "top",
          background: "#F7A582",
          title: "Logged In",
        });
        // TODO: Navigate change work for private route
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Toast.fire({
          icon: "error",
          position: "top",
          title: `${error.message.split("Firebase:").join().split(" ").join()}`,
        });
        setbuttonLoading(false);
      });

    // console.log(data);
  };
  // DONE:GOOGLE LOGIN::>
  const handleGoogleLogin = () => {
    setGbuttonLoadin(true);
    googleLogin()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        axios
          .post(`https://doc-house-server-lac.vercel.app/users`, {
            userName: user.displayName,
            userMail: user.email,
          })
          .then(function (response) {
            if (response.data) {
              setGbuttonLoadin(false);

              Toast.fire({
                icon: "success",
                position: "top",
                title: "Logged In",
              });
            }
            navigate(from, { replace: true });
            // console.log(response);
          });
      })
      .catch(() => {
        // console.log(error.message);
        setGbuttonLoadin(false);
      });
  };
  // default scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [showPass, setShowpass] = useState(false);

  const HandleResetPass = () => {
    if (document.getElementById("email").value === "") {
      return Toast.fire({
        icon: "error",
        position: "top",
        title: "enter your email please",
      });
    }
    forgotPass(document.getElementById("email").value)
      .then(() => {
        Toast.fire({
          icon: "success",
          position: "top",
          title: "Password reset link emailed",
        });
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          position: "top",
          title: err.message,
        });
      });
  };
  return (
    <div>
      <Helmet>
        <title>Login | Doc-House</title>
      </Helmet>
      {/* scroll to top buttno */}
      <ScrolltoTop></ScrolltoTop>
      <div className="flex w-full justify-center  lg:min-h-screen items-center">
        <div className="bg-black w-full   p-0 gap-0 lg:grid lg:grid-cols-2">
          <div className="min-h-screen hidden bg-[#07332F]  xl:rounded-md w-full lg:flex items-center">
            <div className="w-full lg:flex justify-center  mb-10 hidden ">
              <img className="lg:hidden" src={animationsm} alt="" />
              <img
                className="w-9/12 mx-auto  lg:block hidden"
                src={animationlg}
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-shrink-0 w-full items-center  bg-base-100 justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="lg:w-[420px] mx-[10px] p-[30px] lg:mx-auto border-none"
            >
              <h1 className="text-center font-KaushanScript font-bold text-[#07332F]  text-3xl p-[40px]">
                Sign In to <span className=" text-[#F7A582]">Doc House</span>
              </h1>

              <div className="form-control">
                <label className="label px-2">
                  <span className="text-xl text-[#07332F] font-VarelaRound font-bold">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder="Enter your email address"
                  className="input rounded-lg bg-[#F3F3F3] h-[65px]"
                  required
                />
              </div>
              <div className="form-control my-4">
                <label className="label px-2">
                  <span className="text-xl  text-[#07332F] font-VarelaRound font-bold">
                    Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={`${showPass === true ? "text" : "password"}`}
                    {...register("password")}
                    placeholder="Password"
                    className="input w-full rounded-lg bg-[#F3F3F3] h-[65px]"
                    required
                  />
                  <button
                    onClick={() => setShowpass(!showPass)}
                    type="button"
                    className="absolute   px-4 py-5 rounded-lg lg:right-[8px] right-1 top-[3px] lg:top-[2px] "
                  >
                    {showPass === false ? (
                      <BsEyeSlash className="text-xl text-[#07332F] font-bold" />
                    ) : (
                      <BsEye className="text-xl text-[#07332F] font-bold" />
                    )}
                  </button>
                </div>
                <label className="label px-2 flex justify-end">
                  <div
                    onClick={HandleResetPass}
                    className="text-sm text-[#F7A582] focus:link"
                  >
                    Forgot Password
                  </div>
                </label>
              </div>
              <div className="form-control mt-6">
                {buttonLoading === true ? (
                  <>
                    <button className="btn btn-primary bg-[#F7A582] border-none text-white font-VarelaRound hover:bg-[#07332F] tracking-wider rounded-xl h-[66px]">
                      <span className="loading loading-spinner"></span>
                      loading
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-primary bg-[#F7A582] border-none text-white font-VarelaRound hover:bg-[#07332F] tracking-wider rounded-xl h-[66px]">
                      Sign In
                    </button>
                  </>
                )}
              </div>
              <div className="mt-14 mb-2">
                <div className="divider mb-10 text-2xl font-KaushanScript text-[#07332F]">
                  Or Sign In with
                </div>
                <div className="form-control mt-6">
                  {gbuttonLoading === true ? (
                    <>
                      <div className="btn btn-primary bg-[#F7A582] border-none text-white font-VarelaRound hover:bg-[#07332F] tracking-wider rounded-xl h-[66px]">
                        <span className="loading loading-spinner"></span>
                        loading
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        onClick={handleGoogleLogin}
                        className="btn bg-transparent btn-primary focus:text-[#07332F] focus:border-[#07332F] text-[#ce8c70] border-[#ce8c70] text-xl flex items-center font-VarelaRound transform focus:rounded-3xl tracking-wider rounded-lg duration-500 h-[66px]"
                      >
                        <BsGoogle /> <span className="mt-1">Google</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="form-control mt-6 text-center lg:text-[18px] font-VarelaRound  text-[#6C6B6B]">
                <h1>
                  Please register at first. Go to{" "}
                  <Link to="/Register" className="text-[#F7A582]">
                    SIGN UP
                  </Link>
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
