import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

const ManagingBoard = () => {
  const boardMembers = [
    {
      name: "DR. MUHAMMAD AFTAB KHAN",
      affiliation: "Bahria Town, Rawalpindi",
    },
    {
      name: "PROF. DR. ANWAR-UL-HASSAN GILANI",
      affiliation:
        "Fellow, Pakistan Academy of Sciences, Constitution Avenue, G-5, Islamabad",
    },
    {
      name: "DR. MUHAMMAD FAROOQ",
      affiliation: "Sultan Qaboos University, Muscat, Oman",
    },
    {
      name: "PROF. DR. ABDUL WAKEEL",
      affiliation:
        "Chairman PAS Forum (X-Officio Member)\nUniversity of Agriculture, Faisalabad",
    },
    {
      name: "DR. ABDUL GHAFFAR",
      affiliation: "House 434, street 67, G-11/2 Islamabad",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const memberVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
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
            variants={memberVariants}
            className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6"
          >
            MANAGING BOARD
          </motion.h2>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none"></div>

          <motion.div variants={containerVariants}>
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                className="mb-5"
                variants={memberVariants}
              >
                <h3 className="text-[#4682b4] text-md font-bold">
                  {member.name}
                </h3>
                {member.affiliation.split("\n").map((line, lineIndex) => (
                  <p key={lineIndex} className="text-black text-sm pl-2.5">
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ManagingBoard;
