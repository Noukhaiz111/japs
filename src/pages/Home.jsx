import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

const ScopeOfJournal = () => {
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
      <div className="flex items-start w-full">
        <motion.div
          className="bg-[#fdfaf1] p-6 border border-gray-400 rounded-lg shadow-lg relative max-w-4xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e8m2Lz064uW5bU5x1g8U0B2QdM4L7k.png"
            alt="Watermark"
            className="absolute inset-0 m-auto w-2/3 h-2/3 object-contain opacity-10 z-0"
          />

          <div className="relative z-10">
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6"
            >
              SCOPE OF JOURNAL
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 leading-relaxed text-justify"
            >
              The Journal of Animal and Plant Sciences (JAPS) is a bi-monthly
              publication and is being published regularly since 1991 by the
              Pakistan Agricultural Scientists Forum (PAS FORUM). It publishes
              original research papers, review, extension/clinical articles on
              all aspects of animal (including fisheries/wildlife) and plant
              sciences, agricultural economics, rural sociology and other
              related subjects. The journal is read, abstracted and indexed by
              the abstracting/indexing agencies of international repute.
            </motion.p>

            <motion.div variants={itemVariants} className="text-center my-8">
              <p className="text-2xl font-bold text-blue-800">
                Impact Factor 0.60
              </p>
              <p className="text-xl font-bold text-purple-700">JCR 2024</p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 leading-relaxed text-justify"
            >
              <strong className="text-blue-800">Open access Policy:</strong> The
              management of the Journal of Animal and Plant Sciences ensures
              that the manuscripts published in it are freely accessible online/
              via internet immediately upon publication, without any
              cost/barrier of subscription/registration to the readers
              universally.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ScopeOfJournal;
