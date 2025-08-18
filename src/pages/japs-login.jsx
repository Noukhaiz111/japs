"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff, RefreshCw, Volume2, X, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImages = [
  "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Jellyfish
  "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Grazing sheep
  "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Squirrel
  "https://images.pexels.com/photos/162140/duck-bird-water-lake-162140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Duck
];

const JapsLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCredentialsMessage, setShowCredentialsMessage] = useState(true);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds for a smoother transition
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fadeInOutVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const slideInUpVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.1,
      },
    },
  };

  const loginFormVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const linkHoverVariants = {
    hover: { scale: 1.05, boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen flex bg-white font-sans">
      <div className="hidden md:flex md:w-2/5 relative p-12 flex-col text-white overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-blue-900/70" />

        <div className="relative z-10 flex flex-col h-full">
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4 text-blue-900 font-bold text-xl shadow-md">
              dp
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-wider">
                JOURNAL OF
              </h1>
              <h1 className="text-xl font-semibold tracking-wider">
                ANIMAL AND PLANT SCIENCES
              </h1>
            </div>
          </motion.div>

          <motion.div
            className="flex-grow flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Publication procedure</h2>
            <p className="leading-relaxed opacity-90">
              Manuscripts are accepted for publication on the understanding that
              they have not been published and are not being considered for
              publication elsewhere. The Editor will assume that all named
              authors agree with the contents and form of the paper.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-2 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {backgroundImages.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentImageIndex
                    ? "bg-white scale-125"
                    : "bg-white/50"
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-full md:w-3/5 flex flex-col">
        <div className="flex justify-end items-center p-6 space-x-4">
          <motion.div
            variants={linkHoverVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="/about"
              className="text-xs font-semibold text-blue-600 border border-blue-600 rounded-full px-4 py-1.5 hover:bg-blue-50 transition-colors"
            >
              About The Journal
            </Link>
          </motion.div>
          <motion.div
            variants={linkHoverVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="/contact"
              className="text-xs font-semibold text-teal-600 border border-teal-600 rounded-full px-4 py-1.5 hover:bg-teal-50 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        <div className="flex-1 flex items-center justify-center p-6 md:p-12">
          <motion.div
            className="w-full max-w-sm"
            variants={loginFormVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Welcome!</h1>
            <p className="text-gray-500 mb-8">
              Sign in to your account and submit your manuscripts.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <motion.div variants={slideInUpVariants}>
                <label className="text-xs font-semibold text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </motion.div>

              <motion.div variants={slideInUpVariants}>
                <label className="text-xs font-semibold text-gray-600">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </motion.div>

              <motion.div
                variants={slideInUpVariants}
                className="flex items-center"
              >
                <input
                  type="checkbox"
                  id="keepLoggedIn"
                  checked={keepLoggedIn}
                  onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 accent-blue-600"
                />
                <label
                  htmlFor="keepLoggedIn"
                  className="ml-2 text-sm text-gray-700 font-medium"
                >
                  Keep me logged in
                </label>
              </motion.div>

              <motion.div variants={slideInUpVariants} className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="border border-gray-300 rounded p-1 flex-1">
                    <img
                      src="https://www.thejaps.org.pk/captcha/1723635871.9791.jpg"
                      alt="CAPTCHA"
                      className="w-full h-10 object-cover"
                    />
                  </div>
                  <motion.button
                    type="button"
                    className="p-2.5 border rounded text-gray-500 hover:bg-gray-100"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <RefreshCw size={16} />
                  </motion.button>
                  <motion.button
                    type="button"
                    className="p-2.5 border rounded text-gray-500 hover:bg-gray-100"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Volume2 size={16} />
                  </motion.button>
                </div>
                <input
                  type="text"
                  placeholder="CAPTCHA CODE"
                  className="w-full py-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </motion.div>

              <motion.div
                variants={slideInUpVariants}
                className="flex justify-end"
              >
                <Link to={"/user-profile"}><motion.button
                  className="bg-blue-600 text-white py-2 px-8 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Login
                </motion.button></Link>
              </motion.div>
            </form>

            <AnimatePresence>
              {showCredentialsMessage && (
                <motion.div
                  className="mt-6 flex items-center justify-between bg-blue-50 border-l-4 border-blue-400 rounded-r-md p-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center">
                    <Info className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-blue-800 text-sm">
                      Please enter your credentials
                    </span>
                  </div>
                  <motion.button
                    onClick={() => setShowCredentialsMessage(false)}
                    className="text-gray-400 hover:text-gray-600"
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={16} />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="text-center mt-6">
              <a
                href="forget-password"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-gray-400 text-xs">OR</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>
            <div className="text-center">
              <span className="text-gray-600 text-sm">
                Don't have an account yet?{" "}
              </span>
              <Link
                to="/signup"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JapsLoginPage;
