import React from 'react';
import { FaPlus, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import Header from '../layout/Header';

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <div className="flex justify-between items-start mb-10">
            <div className="text-left">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome!</h1>
              <p className="text-gray-600">
                You can now submit and view your manuscripts at IAPS.
                <a href="#" className="text-purple-600 hover:underline ml-1">Learn more.</a>
              </p>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center transition-colors">
              <FaPlus className="mr-2" />
              Submit A New Manuscript
            </button>
          </div>

          <main className="w-full bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Submission Dashboard</h2>
            <p className="text-gray-600 mb-4">Below is the list of submissions.</p>

            <div className="bg-teal-100 border border-teal-200 text-teal-700 px-4 py-3 rounded relative flex justify-between items-center">
              <div className="flex items-center">
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
                  className="w-5 h-5 mr-3"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12" y2="8"></line>
                </svg>
                <span className="font-medium">No submission found!</span>
              </div>
              <button className="text-teal-700 hover:text-teal-900 focus:outline-none">
                <span className="text-lg">×</span>
              </button>
            </div>
          </main>
        </div>

        <footer className="w-full max-w-4xl mt-10 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p className="mb-2 md:mb-0">Powered by HiSOFT © 2020 - 2025</p>
          <div className="flex items-center space-x-4">
            <span>Follow us</span>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Dashboard;