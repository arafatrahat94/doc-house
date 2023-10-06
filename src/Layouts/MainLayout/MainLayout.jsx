import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../../Pages/Shared/Nav";
import Footer from "../../Pages/Shared/Footer";
import Error from "../../Utilities/Error";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("Login") ||
    location.pathname.includes("Register");
  return (
    <div>
      {noHeaderFooter || <Nav></Nav>}
      <Outlet />
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
