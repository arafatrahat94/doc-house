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
import DashboardLayout from "../Layouts/DashboardLayout";
import Appointments from "../Pages/Dashboard/Appointments";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AdminPages/AllUsers";
import AddAdoctor from "../Pages/Dashboard/AdminPages/AddAdoctor";
import ManageDoctor from "../Pages/Dashboard/AdminPages/ManageDoctor";
import DashBoard from "../Pages/Dashboard/AdminPages/DashBoard";

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
        path: "/Appoinment/:id",
        element: <Appointment></Appointment>,
        loader: ({ params }) =>
          fetch(`https://doc-house-server-lac.vercel.app/Doctors/${params.id}`),
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
  {
    path: "Dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "Appointments",
        element: (
          <PrivateRoute>
            <Appointments></Appointments>
          </PrivateRoute>
        ),
      },
      {
        path: "AllUsers",
        element: (
          <PrivateRoute>
            <AllUsers></AllUsers>
          </PrivateRoute>
        ),
      },
      {
        path: "AddAdoctor",
        element: (
          <PrivateRoute>
            <AddAdoctor></AddAdoctor>
          </PrivateRoute>
        ),
      },
      {
        path: "ManageDoctor",
        element: (
          <PrivateRoute>
            <ManageDoctor></ManageDoctor>
          </PrivateRoute>
        ),
      },
      {
        path: "DashBoards",
        element: (
          <PrivateRoute>
            <DashBoard></DashBoard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
