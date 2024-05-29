import { useState, useEffect } from "react";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Check screen width and toggle showSidebar accordingly
      if (window.innerWidth <= 640) { // Adjust the breakpoint as needed
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
      <div className={showSidebar ? "inset-y-0 left-0 bg-white text-black w-64 flex-shrink-0 border-r-2 border-black-950" : "hidden"}>
        <div className="p-4">
          <h1 className="text-2xl font-bold">MariKerja</h1>
          <ul className="mt-4">
            <li className="py-2 flex items-center">
              <a href="#" className="block container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>Home
              </a>
            </li>
            <li className="py-2 flex items-center">
              <a href="#" className="block container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400">
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
              <a href="#" className="block container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400">
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

      {/* Content */}
      <div className="flex-1">
        {/* Sticky Navigation Bar */}
        <div className="w-full bg-white text-black sticky-top">
          <div className="flex justify-start gap-2 items-center px-8 py-4">
            {/* Back Icon */}
            <div>
              <a href="#" className="text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </a>
            </div>
            {/* List of all job */}
            <div>
              <h1 className="text-2xl font-bold text-left">List of all job</h1>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex-1 p-8">
          {/* Search and Filter */}
          <div className="flex mb-4">
            <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-lg mr-4" />
            <select className="px-4 py-2 border rounded-lg">
              <option value="place">Place</option>
              <option value="name">Name</option>
            </select>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-4">Search</button>
          </div>
          {/* Table */}
          <table className="table-auto text-left w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Place</th>
                <th className="px-4 py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Job 1</td>
                <td className="border px-4 py-2">Nilai, Negeri Sembilan</td>
                <td className="border px-4 py-2">Part-Time</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Job 2</td>
                <td className="border px-4 py-2">Nilai, Negeri Sembilan</td>
                <td className="border px-4 py-2">Full-Time</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
