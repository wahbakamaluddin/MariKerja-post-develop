import React from "react";
import ReactDOM from "react-dom/client";
import Root from "/routes/root.jsx";
import Home from "/routes/home.jsx";
import Profile from "/routes/profile.jsx";
import Activity from "/routes/activity.jsx";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
