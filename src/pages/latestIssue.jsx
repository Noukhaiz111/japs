import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
const LatestIssue = () => {
  return (
    <Layout>
      <div className="bg-[#fdfaf1] p-6 border border-gray-400 rounded-lg shadow-lg relative max-w-4xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6">
          LATEST ISSUE
        </h2>
        <div className="p-2.5 rounded-md inline-block w-full text-center">
          <p className="text-[#8b8000] text-3xl font-bold m-0">2025</p>
        </div>

        <div className="flex content-center group cursor-pointer justify-center">
          <Link to="/volumes">
            <img
              src="./Images/japs1.jpg"
              alt="The JAPS Journal Cover"
              className="rounded-lg shadow-lg border-4 border-[#b8860b] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </Link>
        </div>

        <a href="/volumes" className="w-full text-center">
          <p className="text-[#8b8000] text-lg mt-5 underline hover:text-amber-500 transition-colors duration-200">
            Volume 35, No. (4), 2025, August
          </p>
        </a>

        <div className="mt-7 opacity-10 text-[150px] font-bold text-[#8b8000] pointer-events-none select-none">
          JAPS
        </div>
      </div>
    </Layout>
  );
};

export default LatestIssue;
