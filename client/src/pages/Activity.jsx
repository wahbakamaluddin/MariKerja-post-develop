import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import ActivityJS from "../components/user-based/ActivityJS";
import ActivityE from "../components/user-based/ActivityE";

export default function Activity() {
  const { role } = useContext(UserContext);
  return (
    <div>
      {role === "job-seeker" && <ActivityJS />}
      {role === "employer" && <ActivityE />}
    </div>
  );
}
