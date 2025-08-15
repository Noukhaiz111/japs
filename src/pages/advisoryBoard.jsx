import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

const AdvisoryBoard = () => {
  const boardMembers = [
    {
      name: "PROF. DR. ABRAR HUSSAIN GILANI",
      affiliation:
        "70 A, BB Vital Homes, Pak Arab Housing Society, Ferozepur Road, Lahore",
    },
    {
      name: "PROF. DR. TALAT NASEER PASHA",
      affiliation: "EME Society, Multan Road, Lahore",
    },
    {
      name: "PROF. DR. DAVID J. MIDMORE,",
      affiliation:
        "Central Queensland University · Centre for Plant and Water Science, Australia",
    },
    {
      name: "PROF. DR. STEVEN C. LOERCH,",
      affiliation: "The Ohio State University, USA",
    },
    {
      name: "PROF. DR. HOWARD D. TYLER,",
      affiliation: "Iowa State University, Ames, USA",
    },
    {
      name: "PROF. DR. NASIM AHMAD,",
      affiliation: "Ex. VC, UVAS, Lahore, Pakistan",
    },
    {
      name: "CH. MUHAMMAD IBRAHIM",
      affiliation:
        "House No. 150 Bolan block Chanar Bagh, Rai Wind Road, Lahore",
    },
    {
      name: "DR. MASOOD AHMAD SHAKIR,",
      affiliation:
        "House No. D-9, Jhang Road, Gulfishan Colony, Faisalabad Pakistan",
    },
    {
      name: "PROF. DR. ZAHID ATA CHEEMA,",
      affiliation:
        "House No 157 University Town. Millat Road. Faisalabad Pakistan",
    },
    {
      name: "DR. ABUAL LAIS SALMAN SAEED,",
      affiliation:
        "Meat & Dairy Testing Laboratory, PCSIR Labs Complex, Lahore-Pakistan",
    },
    {
      name: "PROF. DR. MAKHDOOM ABDUL JABBAR,",
      affiliation: "Riphah Veterinary College, Lahore, Pakistan",
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
            ADVISORY BOARD
          </motion.h2>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none"></div>

          <motion.div variants={containerVariants}>
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                className="mb-4"
                variants={memberVariants}
              >
                <h3 className="text-[#4682b4] text-md m-0 font-bold">
                  {member.name}
                </h3>
                <p className="text-black text-sm m-0 pl-2.5">
                  {member.affiliation}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AdvisoryBoard;
