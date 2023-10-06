import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import Blog from "../Pages/Blog/blog";
import Feedback from "../Pages/FeedBack/Feedback";
import Login from "../Pages/LoginAndRegister/Login";
import Register from "../Pages/LoginAndRegister/Register";
import Error from "../Utilities/Error";
import SIngleExpertDoctor from "../Pages/Home/OurExpertDoctors/SIngleExpertDoctor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Appoinment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/FeedBack",
        element: <Feedback></Feedback>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/ViewProfile/:id",
        element: <SIngleExpertDoctor></SIngleExpertDoctor>,
        loader: ({ params }) =>
          fetch(`https://doc-house-server-lac.vercel.app/Doctors/${params.id}`),
      },
    ],
  },
]);

export default router;
