import TopNavEmpty from "../TopNavEmpty";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import useFetchUserProfile from "../../hooks/useFetchUserProfile";
import { Link } from "react-router-dom";

export default function ProfileE() {
  const { user } = useContext(UserContext); // Use useContext to access the current user
  const { userProfile, isLoading, error } = useFetchUserProfile(user?.id); // Use custom hook to fetch user profile

  if (isLoading) {
    console.log("Rendering loading state..."); // Debug: Check when loading state is rendered
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
  if (!userProfile) {
    return <div>User not found</div>;
  }

  return (
    <div className="flex h-full bg-white">
      <TopNavEmpty title="Profile" />
      <div>
        <div className="flex-1 p-8 text-left  ">
          <div className="mb-10 mt-10">
            <div className="w-full flex flex-col mb-4">
              <h2 className="text-2xl font-bold text-left mb-4">
                Personal Information
              </h2>
              <label
                htmlFor="Name"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Name
              </label>
              <p className="w-1/2 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {userProfile.firstname} {userProfile.lastname}
              </p>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="Email"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Email Address
              </label>
              <p className="w-full block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {userProfile.email}
              </p>
            </div>
            <div className="w-full flex gap-2 justify-start mb-4">
              <label
                htmlFor="Date of birth"
                className="w-1/4 justify-start block text-black font-medium mb-0"
              >
                Date of Birth
              </label>
              <p className="w-20 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {userProfile.dateOfBirth.day}
              </p>
              <p className="w-20 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {userProfile.dateOfBirth.month}
              </p>
              <p className="w-20 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {userProfile.dateOfBirth.year}
              </p>
            </div>
            <div className="w-full flex gap-2 justify-start mb-4">
              <label
                htmlFor="Gender"
                className="w-1/4 justify-start block text-black font-medium mb-0"
              >
                Gender
              </label>
              <p className="w-20 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {userProfile.gender}
              </p>
            </div>
          </div>

          {/* Resume */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-left mb-4">Resume</h2>
            <div className="w-2/3 flex items-center mb-6">
              <a
                href={userProfile.profile.resume.linkedin}
                style={{ color: "blue", textDecoration: "none" }} // Apply styles to the link
                target="_blank" // Open link in new tab
                rel="noopener noreferrer" // Security measure for opening links in new tab
                className="flex items-center" // Ensure SVG and text are aligned
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor" // Use currentColor to inherit color from parent <a>
                  className="bi bi-linkedin mr-2"
                  viewBox="0 0 16 16"
                  style={{ cursor: "pointer" }} // Make SVG clickable
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                {userProfile.profile.resume.linkedin}
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="ContactNumber"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Contact Number
              </label>
              <p className="w-2/3 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {userProfile.profile.resume.contactNumber}
              </p>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="Address"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Address
              </label>
              <p className="w-2/3 h-40 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {userProfile.profile.resume.address}
              </p>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="website"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                About Me
              </label>
              <p className="w-2/3 h-40 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {userProfile.profile.resume.about}
              </p>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="website"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Education
              </label>
              <p className="w-2/3 h-40 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {userProfile.profile.resume.education}
              </p>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="website"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Personal Skills
              </label>
              <p className="w-2/3 h-40 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {userProfile.profile.resume.skills}
              </p>
            </div>
            <Link to="/profile/edit">
              <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
                Edit Information
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
