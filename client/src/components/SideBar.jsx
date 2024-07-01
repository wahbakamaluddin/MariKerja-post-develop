import { useState, useEffect } from "react";

export function Sidebar({ showSidebar }) {
  return (
    <div
      className={
        showSidebar
          ? "fixed top-0 left-0 h-full w-64 flex-shrink-0 border-r-2 border-black-950"
          : "hidden"
      }
    >
      <div className="h-full relative w-64 flex-shrink-0 border-r-2 border-black-950">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-center">MariKerja</h1>
          <ul className="mt-4">
            <li className="py-2 flex items-center">
              <a
                href="/home"
                className="container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </a>
            </li>
            <li className="py-2 flex items-center">
              <a
                href="/profile"
                className="container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Profile
              </a>
            </li>
            <li className="py-2 flex items-center">
              <a
                href="/activity"
                className="container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-activity"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                Activity
              </a>
            </li>
            <li className="py-2 flex items-center">
              <a
                href="login"
                className="container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-log-out"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
