import { useState, useEffect, useContext } from "react";
import TopNav from "../components/TopNav";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProfileE() {
  const { user } = useContext(UserContext); // Use useContext to access the current user
  const [userProfile, setUserProfile] = useState({}); // State to hold the user profile
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const userId = user?.id; // Get the user ID from the current user object
  console.log("profileE.jsx User ID:", userId);
  {
    /* Fetching user information */
  }
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
    <div className="flex bg-white">
      <div>
        <TopNav title="Edit Profile" />
        {/* User Information */}
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
              <input
                type="text"
                className="w-1/2 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder={`${userProfile.firstname} ${userProfile.lastname}`}
              />
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="Email"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Email Address
              </label>
              <input
                type="email"
                className="w-1/2 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder={`${userProfile.email}`}
              />
            </div>
            <div className="w-full flex gap-2 justify-start mb-4">
              <label
                htmlFor="Date of birth"
                className="w-1/4 justify-start block text-black font-medium mb-0"
              >
                Date of Birth
              </label>
              <div className="flex gap-4">
                <select
                  name="birthday_day"
                  id="day"
                  required
                  className="w-1/3 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
                >
                  {[...Array(31).keys()].map((day) => (
                    <option key={day + 1} value={day + 1}>
                      {day + 1}
                    </option>
                  ))}
                </select>
                <select
                  name="birthday_month"
                  id="month"
                  required
                  className="w-1/2 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <option key={month} value={month}>
                      {new Date(0, month).toLocaleString("en", {
                        month: "short",
                      })}
                    </option>
                  ))}
                </select>
                <select
                  name="birthday_year"
                  id="year"
                  required
                  className="w-1/2 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
                >
                  {Array.from(
                    { length: 100 },
                    (_, i) => new Date().getFullYear() - i
                  ).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full flex gap-2 justify-start mb-4">
              <label
                htmlFor="Gender"
                className="w-1/4 justify-start block text-black font-medium mb-0"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                required
                className="w-1/7 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            {/* Render company information if user.role is employer */}
            {user.role === "employer" && (
              <div>
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
                  <input
                    type="text"
                    className="w-2/3 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder={`${userProfile.profile.company.name}`}
                  />
                </div>
                <div className="w-full flex flex-col mb-4">
                  <label
                    htmlFor="ContactNumber"
                    className="w-full justify-start block text-black font-medium mb-0"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="w-2/3 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder={`${userProfile.profile.company.contactNumber}`}
                  />
                </div>
                <div className="w-full flex flex-col mb-4">
                  <label
                    htmlFor="website"
                    className="w-full justify-start block text-black font-medium mb-0"
                  >
                    Company Website
                  </label>
                  <input
                    type="text"
                    className="w-2/3 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder={`${userProfile.profile.company.website}`}
                  />
                </div>
                <div className="w-full flex flex-col mb-4">
                  <label
                    htmlFor="Address"
                    className="w-full justify-start block text-black font-medium mb-0"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-2/3 h-40 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder={`${userProfile.profile.company.address}`}
                  />
                </div>
                <div className="w-full flex flex-col mb-4">
                  <label
                    htmlFor="website"
                    className="w-full justify-start block text-black font-medium mb-0"
                  >
                    About Company
                  </label>
                  <input
                    type="text"
                    className="w-2/3 h-40 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder={`${userProfile.profile.company.about}`}
                  />
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <Link
                to="/profilee"
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Cancel changes
              </Link>
              <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
