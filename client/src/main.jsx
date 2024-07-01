import React from "react";
import ReactDOM from "react-dom/client";
import Root from "/routes/Root.jsx";
import Home from "/routes/Home.jsx";
import Profile from "/routes/Profile.jsx";
import Activity from "/routes/Activity.jsx";
import Login from "/routes/Login.jsx";
import Register from "/routes/Register.jsx";
import "./index.css";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";

axios.defaults.baseURL = "http://localhost:9000";
axios.defaults.withCredentials = true;

import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

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
    element: <Root />,
    children: [
      {
        path: "/home",
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
