import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Nav from "../../Pages/Shared/Nav";
import Footer from "../../Pages/Shared/Footer";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animation from "../../assets/animation/jHAs62BXXQ.json";
const MainLayout = () => {
  const location = useLocation();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (navigation.state !== "loading") {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [navigation]);
  const noHeaderFooter =
    location.pathname.includes("Login") ||
    location.pathname.includes("Register");
  return (
    <div>
      <div
        className={`${
          loading === true
            ? "scale-100 transform bg-white duration-500 opacity-100"
            : "scale-0 bg-white  transform duration-500 opacity-0"
        } z-50 absolute w-full min-h-screen flex justify-center items-center`}
      >
        <Lottie
          className={`${
            loading === true
              ? "scale-100 duration-300 transform"
              : "scale-0 duration-300 transform"
          } w-[300px] h-[300px]`}
          animationData={animation}
        />
      </div>
      {!loading && (
        <div>
          {noHeaderFooter || <Nav></Nav>}
          <Outlet />
          {noHeaderFooter || <Footer></Footer>}
        </div>
      )}
    </div>
  );
};

export default MainLayout;
