"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // React Router

const Layout = ({ children }) => {
  //const [activeMenuItem, setActiveMenuItem] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location= useLocation();

  const menuItems = [
      { name: "Home", path: "/" },
      { name: "About the Journal", path: "/about" },
      { name: "Instructions to Authors", path: "/instructions" },
      { name: "Published Online First", path: "/published" },
      { name: "Latest Issue", path: "/latest" },
      { name: "Journal Archives", path: "/archives" },
      { name: "Supplementary Series", path: "/supplementary-series" },
      { name: "Supplementary Archive", path: "/supplementary-archive" },
      { name: "Abstracting / Indexing Agencies", path: "/indexing" },
      { name: "Publication Ethics", path: "/ethics" },
      { name: "Editorial Board", path: "/editorial" },
      { name: "Advisory Board", path: "/advisory" },
      { name: "Managing Board", path: "/managing" },
      { name: "Open Access Policy", path: "/open-access" },
      { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="relative h-32 bg-gradient-to-r from-green-700 via-green-600 to-green-500 overflow-hidden shadow-lg">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute right-0 top-0 h-full w-80 bg-gradient-to-l from-transparent to-green-600/20 hidden md:block">
          <img
            src="./Images/side_aniimals1.jpg"
            alt="Farm animals"
            className="h-full w-full object-cover object-left opacity-80"
          />
        </div>
        <div className="relative z-10 flex items-center h-full px-6 md:px-8">
          <div className="flex items-center mr-6">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg text-white font-bold text-xl">
              dp
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-white text-3xl md:text-4xl font-bold italic">
              The Journal
            </h1>
            <h2 className="text-white text-base md:text-lg font-semibold tracking-wider">
              of ANIMAL and PLANT SCIENCES
            </h2>
          </div>
          <button
            className="md:hidden ml-4 text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Main container for sidebars and content */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside
          className={`fixed md:static z-20 top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-700 to-gray-800 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300`}
        >
          <div className="bg-green-700 text-white p-4 italic text-lg font-semibold">
            Welcome to
          </div>
          <nav className="py-2 overflow-y-auto h-[calc(100%-80px)]">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                // onClick se setActiveMenuItem हटा दें, sirf sidebar band karein
                onClick={() => setSidebarOpen(false)}
                className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                  // Condition ko `activeMenuItem` se badal kar `location.pathname` se check karein
                  location.pathname === item.path
                    ? "bg-orange-500 text-white border-l-4 border-orange-600"
                    : "text-gray-300 hover:bg-gray-600 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          <div className="flex justify-between items-center bg-[#f0ead6] p-4 md:p-6 border-b border-gray-300">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-green-800">
                Journal of Animal and Plant Sciences
              </h3>
              <p className="text-red-600 italic mt-1">
                Journal of Animal and Plant Sciences is a fully open access journal
              </p>
            </div>
            <Link to="/japs-login" className="hidden md:block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded shadow-lg transition-all duration-200 ml-4">
              Submit Paper
            </Link>
          </div>
          <div className="p-4 md:p-6 bg-white flex-1">
            {children}
          </div>
        </main>

        {/* === YAHAN NAYA RIGHT SIDEBAR ADD KIYA GAYA HAI === */}
        <div className="h-screen"> 
          <aside className="hidden md:block w-48 bg-[#F5F5DC] p-4 border-l-2 border-gray-200 h-4/5">
          <div className="border-2 border-yellow-700 bg-[#f0ead6] p-3 text-center h-full flex flex-col justify-around">
            <div>
               <Link to="/volumes">
              <img 
                src="./Images/japs1.jpg" // Apni cover image ka path yahan daalein
                alt="JAPS Cover" 
                className="w-32 mx-auto border-4 border-yellow-700 shadow-md"
              />
              <p className="mt-4 text-yellow-800 font-semibold text-sm hover:text-red-900">
                Volume 35, No. (4), 2025,<br /> August
              </p>
              </Link>
            </div>
            
            <hr className="border-t-2 border-dashed border-yellow-700 my-4" />
            
            <div>
              <p className="font-bold text-black text-lg">
                Impact Factor
                <br />
                <span className="text-2xl">0.6</span>
              </p>
              <p className="text-red-700 font-bold mt-2">JCR 2024</p>
            </div>
          </div>
        </aside>
        </div>
        {/* === RIGHT SIDEBAR YAHAN KHATAM HOTA HAI === */}
      </div>
    </div>
  );
};

export default Layout;