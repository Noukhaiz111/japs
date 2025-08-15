import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const headingVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
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
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e8m2Lz064uW5bU5x1g8U0B2QdM4L7k.png"
            alt="Watermark"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-md object-contain opacity-10 z-0"
          />

          <div className="relative z-10">
            <motion.h2
              className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6"
              variants={headingVariants}
            >
              ABOUT JOURNAL
            </motion.h2>

            <motion.p
              className="text-gray-700 leading-relaxed text-justify"
              variants={textVariants}
            >
              The **Journal of Animal and Plant Sciences (JAPS)**, a peer
              reviewed journal, has been published bi-monthly by the{" "}
              <a
                href="https://www.thejaps.org.pk/PAS/"
                className="text-red-700 font-semibold hover:underline"
              >
                Pakistan Agricultural Scientists Forum (PAS FORUM)
              </a>
              , since 1991. It publishes original research and review articles
              on all aspects of animal (including fisheries/wildlife) and plant
              sciences, agricultural economics, rural sociology and other
              related subjects. Manuscripts are accepted for publication on the
              understanding that they have not been published and are not being
              considered for publication elsewhere. The Editor will assume that
              all named authors agree with the contents and form of the paper.
              The copyright of papers accepted for publication belongs to The
              JAPS. All contributions are subject to editorial revision and
              Editor's decision will be final.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default About;
