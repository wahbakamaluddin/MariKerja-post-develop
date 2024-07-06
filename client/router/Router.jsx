import React, { useContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "/src/pages/Login.jsx";
import Register from "/src/pages/Register.jsx";
import Profile from "../src/pages/Profile";
import Home from "../src/pages/Home";
import PostJob from "../src/pages/PostJob.jsx";
import Activity from "../src/pages/Activity";
import SideBar from "../src/components/SideBar.jsx";

const router = createBrowserRouter([
  {
    path: "auth",
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/",
    element: <SideBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/activity",
        element: <Activity />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "activity/postjob",
        element: <PostJob />,
      },
    ],
  },
]);

export default router;
