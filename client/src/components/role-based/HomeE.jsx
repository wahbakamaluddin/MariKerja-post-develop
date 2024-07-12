import { useState, useEffect } from "react";
import TopNavEmpty from "../TopNavEmpty";
import { Link } from "react-router-dom";
import axios from "axios";

export default function HomeE() {
  const [jobs, setJobs] = useState([]); // State to hold fetched jobs
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  // // Fetch jobs from backend
  // useEffect(() => {
  //   fetch("http://localhost:8000/jobs") // Adjust the URL as needed
  //     .then((response) => response.json())
  //     .then((data) => setJobs(data))
  //     .catch((error) => console.error("There was an error!", error));
  // }, []); // Empty dependency array to run only once on component mount

  // Fetch jobs from backend using axios
  useEffect(() => {
    axios
      .get("/jobs")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []); // Empty dependency array to run only once on component mount

  // Filter jobs based on search term
  const filteredJobs = jobs.filter(
    (job) =>
      (job.jobname?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (job.state?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (job.status?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (job.company?.toLowerCase() || "").includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-white">
      <div>
        <TopNavEmpty title="Home" />
        <div className="flex-1 p-8">
          <div className="mt-10">
            <h2 className="flex text-2xl font-bold text-left mb-4">
              List of all jobs
            </h2>
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search for jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4 px-4 py-2 border rounded"
            />
            {/* Display Jobs Here */}
            <table className="table-auto text-left w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Place</th>
                  <th className="px-4 py-2">Type</th>
                  {/* <th className="px-4 py-2">Company</th> */}
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">
                      <Link to={`/jobs/${job._id}`}>{job.jobname}</Link>
                    </td>
                    <td className="border px-4 py-2">{job.state}</td>
                    <td className="border px-4 py-2">{job.status}</td>
                    {/* <td className="border px-4 py-2">{job.company}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
