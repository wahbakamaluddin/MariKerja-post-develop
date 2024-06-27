import "./App.css";
import { Routes, Route } from "react-router-dom";
//component
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";
//pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Registercopy from "./pages/Registercopy";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProfileJS from "./pages/ProfileJS";
import ActivityJS from "./pages/ActivityJS";
import ActivityE from "./pages/ActivityE";
import PostJob from "./pages/PostJob";
import EditProfile from "./pages/EditProfile";
//unfinished
// import Dashboard from "./pages/Dashboard";
// import Dashboard from "./pages/Dashboard";

import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";



axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      {/* <Navbar /> */}
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registercopy" element={<Registercopy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profilee" element={<ProfileE />} />
        <Route path="/profilejs" element={<ProfileJS />} />
        <Route path="/activityjs" element={<ActivityJS />} />
        <Route path="/activitye" element={<ActivityE />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </UserContextProvider>

  );
}

export default App;
