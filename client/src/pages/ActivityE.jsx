import { useState, useEffect } from "react";
import TopNav from '../components/TopNav';

export default function ActivityE() {
  const [showSidebar, setShowSidebar] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      // Check screen width and toggle showSidebar accordingly
      if (window.innerWidth <= 718) { // Adjust the breakpoint as needed
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array to run only once on component mount


  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className={showSidebar ? "relative w-64 flex-shrink-0 border-r-2 border-black-950" : "hidden"}>
        <div className="h-full relative w-64 flex-shrink-0 border-r-2 border-black-950">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-center">MariKerja</h1>
            <ul className="mt-4">
              <li className="py-2 flex items-center">
                <a href="/home" className="block container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>Home
                </a>
              </li>
              <li className="py-2 flex items-center">
                <a href="/profilee" className="block container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>Profile
                </a>
              </li>
              <li className="py-2 flex items-center">
                <a href="#" className="block container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>Activity
                </a>
              </li>
              <li className="py-2 flex items-center">
                <a href="login" className="block container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>


      {/* Content */}
      <div className="flex-1">
        {/* Sticky Navigation Bar */}
        <TopNav title="Activity" />
        {/* User Information */}
        <div className="flex-1 p-8">
          <div className=" mt-10">
            {/* Search and Filter */}
            <h2 className="flex text-2xl font-bold text-left mb-4">
              Posted Job
            </h2>

            {/* Table */}
            <table className="table-auto text-left w-full">
              <thead>
                <tr>
                  <th className="px-6 py-2">No</th>
                  <th className="px-6 py-2">Title</th>
                  <th className="px-6 py-2">Place</th>
                  <th className="px-6 py-2">Type</th>
                  <th className="px-6 py-2">Applicant(s)</th>
                  <th className="px-6 py-2"> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-6 py-2">1</td>
                  <td className="border px-6 py-2">Job 1</td>
                  <td className="border px-6 py-2">Nilai, Negeri Sembilan</td>
                  <td className="border px-6 py-2">Part time </td>
                  <td className="border px-6 py-2">2</td>
                  <td className="border px-6 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => { /* your action here */ }}>X
                    </button>
                    </td>
                </tr>
                <tr>
                  <td className="border px-6 py-2">2</td>
                  <td className="border px-6 py-2">Job 2</td>
                  <td className="border px-6 py-2">Nilai, Negeri Sembilan</td>
                  <td className="border px-6 py-2">Full time </td>
                  <td className="border px-6 py-2">3</td>
                  <td className="border px-6 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => { /* your action here */ }}>X
                    </button>
                    </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
