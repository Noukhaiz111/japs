import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

const OnlinePublications = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Layout>
      <div className="bg-gray-50 font-sans">
        <motion.div
          className="bg-[#fdfaf1] p-6 border border-gray-400 rounded-lg shadow-lg relative max-w-4xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6"
          >
            PUBLISHED ONLINE FIRST
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="p-2.5 rounded-md inline-block w-full text-center"
          >
            <p className="text-[#8b8000] text-3xl font-bold m-0">2025</p>
          </motion.div>

          <motion.a
            variants={itemVariants}
            href="/volumes"
            className="w-full text-center"
          >
            <p className="text-[#8b8000] text-lg mt-5 underline hover:text-amber-500 transition-colors duration-200">
              Volume 35, No. (4), 2025, August
            </p>
          </motion.a>
        </motion.div>
      </div>
    </Layout>
  );
};

export default OnlinePublications;
