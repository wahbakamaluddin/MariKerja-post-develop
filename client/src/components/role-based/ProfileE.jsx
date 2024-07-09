import TopNavEmpty from "../TopNavEmpty";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProfileE() {
  const { user } = useContext(UserContext); // Use useContext to access the current user
  const [userProfile, setUserProfile] = useState({}); // State to hold the user profile
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const userId = user?.id; // Get the user ID from the current user object
  console.log("profileE.jsx User ID:", userId);

  useEffect(() => {
    console.log("useEffect triggered with userId:", userId); // Debug: Check when useEffect is triggered and with what userId
    if (userId) {
      console.log("Fetching data for userId:", userId); // Debug: Confirm fetching data
      setIsLoading(true); // Set loading to true before fetching data
      axios
        .get(`users/${userId}`)
        .then((response) => {
          console.log(
            "Data fetched successfully for userId:",
            userId,
            "Response data:",
            response.data
          ); // Debug: Check fetched data
          setUserProfile(response.data);
          setIsLoading(false); // Set loading to false after fetching data
        })
        .catch((error) => {
          console.error(
            "There was an error fetching data for userId:",
            userId,
            error
          ); // Debug: Check error details
          setIsLoading(false); // Ensure loading is set to false even if there's an error
        });
    } else {
      console.log("No userId provided, skipping data fetch."); // Debug: Check condition when no userId is provided
      setIsLoading(false); // If no userId, ensure loading is set to false
    }
  }, [userId]); // Depend on userId to re-fetch data when it changes

  if (isLoading) {
    console.log("Rendering loading state..."); // Debug: Check when loading state is rendered
    return <div>Loading...</div>;
  }
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="flex h-screen bg-white">
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
              <p className="w-1/2 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
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

          {/* Company Information */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-left mb-4">
              Company Information
            </h2>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="CompanyName"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Company Name
              </label>
              <p className="w-2/3 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {userProfile.profile.company.name}
              </p>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="ContactNumber"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Contact Number
              </label>
              <p className="w-2/3 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {userProfile.profile.company.contactNumber}
              </p>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="website"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Company Website
              </label>
              <p className="w-2/3 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {userProfile.profile.company.website}
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
                {userProfile.profile.company.address}
              </p>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="website"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                About Company
              </label>
              <p className="w-2/3 h-40 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {userProfile.profile.company.address}
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
