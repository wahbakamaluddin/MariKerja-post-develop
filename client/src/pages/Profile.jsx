import { React, useContext } from "react";
import { UserContext } from "../../context/userContext";
import ProfileJS from "../components/user-based/ProfileJS";
import ProfileE from "../components/user-based/ProfileE";

export default function Profile() {
  const { role } = useContext(UserContext);
  return (
    <div>
      {role === "job-seeker" && <ProfileJS />}
      {role === "employer" && <ProfileE />}
    </div>
  );
}
