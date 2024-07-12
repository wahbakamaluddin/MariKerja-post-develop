import React from "react";

const TopNavEmpty = ({ title, href }) => {
  return (
    <div className="fixed w-full bg-gray-200 text-black sticky-top">
      <div className="flex justify-start gap-2 items-center px-8 py-4">
        <div>
          <h1 className="text-2xl font-bold text-left">{title}</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TopNavEmpty;
