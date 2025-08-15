import Layout from "./Layout";
import React from "react";
import { Link } from "react-router-dom";

const SupplementarySeries = () => {
  return (
    <Layout>
      <div className="bg-[#fdfaf1] p-6 border border-gray-400 rounded-lg shadow-lg relative max-w-4xl w-full">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6">
            SUPPLEMENTARY SERIES
          </h1>

          <div className="p-6 sm:p-10 flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-2xl font-bold text-[#8b8000]">
              2015
            </h2>

            <div className="flex content-center group cursor-pointer justify-center">
              <Link to="/volumes">
                <img
                  src="./Images/japs1.jpg"
                  alt="The JAPS Journal Cover"
                  className="rounded-lg shadow-lg border-4 border-[#b8860b] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
              </Link>
            </div>
            <div>
              <Link to="/volumes">
                <p className="text-[#8b8000] text-lg mt-5 underline hover:text-amber-500 transition-colors duration-200">
                  Volume 25 (3 Suppl. 2) 2015
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SupplementarySeries;
