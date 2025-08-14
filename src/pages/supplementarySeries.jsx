import Layout from './Layout';
import React from 'react';
import { Link } from "react-router-dom";


// Assume Layout component is available and handles the main page structure.
// This example code includes a simple layout for demonstration purposes.


// Assume Tailwind CSS is configured and available globally

const SupplementarySeries = () => {
  const handleLinkClick = () => {
   
  };

  return (
    <Layout>
      <div className="bg-[#f8f4ed] min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl bg-[#f8f4ed] rounded-xl shadow-lg border border-[#e0d9ce]">

          {/* Header Section */}
          <div className="bg-[#f8f4ed] rounded-t-xl p-4 sm:p-6 border-b-2 border-orange-500">
            <h1 className="text-xl sm:text-2xl font-semibold text-[#4682b4]">
              Supplementary Series
            </h1>
          </div>

          {/* Main Content Area */}
          <div className="p-6 sm:p-10 flex flex-col items-center justify-center space-y-6">
            <h2 className="text-2xl sm:text-2xl font-bold text-[#8b8000]">2015</h2>

            {/* Clickable Image */}
            <div className="flex content-center group cursor-pointer justify-center">
              <Link to ="/volumes">
              <img
                src="./Images/japs1.jpg" // Placeholder image for demonstration
                alt="The JAPS Journal Cover"
                className="rounded-lg shadow-lg border-4 border-[#b8860b] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
               </Link>
               </div>
               <div>
                 <Link to ="/volumes">
              <p className="text-lg sm:text-xl font-semibold text-[#8b0000] hover:text-[#550000] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#8b8000] rounded-md p-1">
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
