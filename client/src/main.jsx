import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { UserContextProvider, UserContext } from "/context/UserContext";
import "./index.css";
import Router from "/router/Router.jsx";
import axios from "axios";

const baseURL = `http://${window.location.hostname}:8000`;

axios.defaults.baseURL = baseURL;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <RouterProvider router={Router} />
    </UserContextProvider>
  </React.StrictMode>
);
