import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
  };

  const contactBoxVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
      },
    },
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
          {/* Watermark Image - Adjusted for better placement and scaling */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e8m2Lz064uW5bU5x1g8U0B2QdM4L7k.png"
            alt="Watermark"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-md object-contain opacity-10 z-0"
          />

          <div className="relative z-10">
            <motion.h2
              variants={textVariants}
              className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6"
            >
              Contact Us
            </motion.h2>

            <motion.div
              className="border border-gray-300 p-4"
              variants={contactBoxVariants}
            >
              <p className="font-semibold text-yellow-700 mb-4">
                ALL CORRESPONDENCE MAY BE ADDRESSED TO THE FOLLOWING
              </p>

              <div className="text-gray-700 space-y-1">
                <p className="font-bold text-blue-800 text-lg">
                  Prof. Dr. Khalid Javed
                </p>
                <p>Chief Editor</p>
                <p className="mt-2">
                  146-Rizwan Block, Awan Town, Multan Road, Lahore-54780,
                  Pakistan
                </p>
                <p className="mt-2">
                  E-mail:
                  <a
                    href="mailto:editor@thejaps.org.pk"
                    className="text-red-700 hover:underline ml-1"
                  >
                    editor@thejaps.org.pk
                  </a>
                  ,
                  <a
                    href="mailto:javeddrkhalid@yahoo.com"
                    className="text-red-700 hover:underline ml-1"
                  >
                    javeddrkhalid@yahoo.com
                  </a>
                </p>
                <p className="mt-2">Mob. +92 300 6690094</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Contact;
