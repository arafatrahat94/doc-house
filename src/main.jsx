import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/router.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Pages/Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="  min-w-[370px]  mx-auto">
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
