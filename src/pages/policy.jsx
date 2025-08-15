import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

const OpenAccessPolicy = () => {
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
              OPEN ACCESS POLICY
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="space-y-4 text-gray-700 leading-relaxed text-justify"
            >
              <motion.p variants={textVariants}>
                Journal of Animal and Plant Sciences (JAPS) ISSN (Print):{" "}
                <strong className="text-blue-700">1018-7081</strong> and ISSN
                (Electronic):{" "}
                <strong className="text-blue-700">2309-8694</strong> is a peer
                reviewed open access journal. Peer review is the responsibility
                of the Editorial Board of JAPS
              </motion.p>
              <motion.p variants={textVariants}>
                All articles published open access will be immediately and
                permanently free for everyone to read, download, copy and
                distribute.
              </motion.p>
              <motion.p variants={textVariants}>
                Permitted reuse as prescribed under Creative Commons Attribution
                License (
                <a
                  href="http://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  http://creativecommons.org/licenses/by/4.0/
                </a>
                ), to researchers and scholars who use the content of the
                published papers. This license permits unrestricted use,
                distribution and reproduction in any medium, provided the
                original work is properly cited.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default OpenAccessPolicy;
