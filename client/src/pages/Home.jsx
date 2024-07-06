import { React, useContext } from "react";
import { UserContext } from "../../context/userContext";
import HomeJs from "../components/user-based/HomeJS";
import HomeE from "../components/user-based/HomeE";

export default function Home() {
  const { role } = useContext(UserContext);
  return (
    <div>
      {role === "job-seeker" && <HomeJs />}
      {role === "employer" && <HomeE />}
    </div>
  );
}
