import React from 'react';
import Layout from './Layout'
// This is a self-contained component that does not require a separate Layout file.
const LatestIssue = () => {
  return (
    <Layout>
    <div className="font-sans bg-[#f8f4ed] p-5 text-center border border-[#e0d9ce] rounded-lg shadow-lg max-w-2xl mx-auto my-10">
      <h2 className="text-[#4682b4] text-2xl font-bold mb-2.5">
        Latest Issue
      </h2>
      <div className="border-b-2 border-amber-500 w-4/5 mx-auto mb-5"></div>
      <div className="p-2.5 rounded-md inline-block w-full text-center">
        <p className="text-[#8b8000] text-3xl font-bold m-0">
          2025
        </p>
      </div>

      {/* The image is a clickable link with a placeholder URL */}
      <a href="/volumes" className="inline-block mx-auto my-5 border-3 border-[#b8860b] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <img
          src="./Images/japs1.jpg"
          alt="The JAPS - The Journal of Animal and Plant Sciences cover"
          className="block max-w-full h-auto rounded-lg"
        />
      </a>
      
      {/* The text is a clickable link with hover effects. */}
      <a href="/volumes">
        <p className="text-[#8b8000] text-lg mt-5 underline hover:text-amber-500 transition-colors duration-200">
          Volume 35, No. (4), 2025, August
        </p>
      </a>

      {/* Watermark-like element */}
      <div className="mt-7 opacity-10 text-[150px] font-bold text-[#8b8000] pointer-events-none select-none">
        JAPS
      </div>
    </div>
    </Layout>
  );
};

export default LatestIssue;