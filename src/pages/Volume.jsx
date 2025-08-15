import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    title:
      "DETECTING ADULTERANTS IN TEA USING MID-INFRARED SPECTROSCOPY: A COMPARATIVE STUDY OF DEEP LEARNING AND MACHINE LEARNING",
    authors: "W. Liu, Y. Lin, Y. Cai, Honghao Cai and Hui Ni",
    pdfUrl: "/path/to/pdf-1.pdf",
    abstractUrl: "/abstract",
  },
  {
    id: 2,
    title:
      "Effects of Bone Marrow-derived Mesenchymal Stem Cells-loaded Self-assembling Peptide Scaffold on Synovial Volume and Cartilage Thickness on Rabbit Model of Rheumatoid Arthritis",
    authors: "R.N. Sha and J. Z. Li",
    pdfUrl: "/path/to/pdf-2.pdf",
    abstractUrl: "/abstract",
  },
  {
    id: 3,
    title:
      "BIBLIOMETRIC INSIGHTS OF THREE DECADES OF CAMEL RESEARCH IN EUROPE WITH AN EMPHASIS ON COLLABORATION, RESEARCH THEMES AND EMERGING TOPICS",
    authors: "M. Kandeel and M. Mahmoud",
    pdfUrl: "/path/to/pdf-3.pdf",
    abstractUrl: "/abstract",
  },
  {
    id: 4,
    title:
      "PREVALENCE AND ASSOCIATED RISK FACTORS OF Cysticercus tenuicollis IN THE SMALL RUMINANTS IN DIFFERENT DISTRICTS OF PUNJAB AND KPK PROVINCES OF PAKISTAN.",
    authors: "W. Qamar, R. Z. Abbas, M. Imran and M. S. Mahmood",
    pdfUrl: "/path/to/pdf-4.pdf",
    abstractUrl: "/abstract",
  },
  {
    id: 5,
    title:
      "GEOGRAPHICAL CLASSIFICATION OF VIETNAMESE DRAGON FRUIT (Hylocereus spp.) USING ICP-MS AND PCA",
    authors:
      "Q. M. Bui, H. M. D. Tran, N. M. Truong, V. A. Le, T. Q. Bui, H. K. Nguyen, V. T. Tran, Q. H. Vu and V. N. Le.",
    pdfUrl: "/path/to/pdf-5.pdf",
    abstractUrl: "/abstract",
  },
];

const LatestIssue = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <Layout>
      <div className="bg-gray-50 font-sans p-4 md:p-6 w-full">
        <motion.div
          className="border border-gray-300 rounded-lg shadow-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center p-4 md:p-6 bg-[#fdfaf1] rounded-t-lg">
            <motion.h2
              variants={itemVariants}
              className="text-xl font-semibold text-gray-700"
            >
              Volume 35, No. (4), 2025, August
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600">
              (Impact Factor, 0.60; JCR 2024)
            </motion.p>
          </div>

          <div className="bg-[#fdfaf1] p-4 md:p-6">
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6"
            >
              CONTENTS
            </motion.h3>
          </div>

          <motion.div
            variants={itemVariants}
            className="bg-blue-800 text-white flex items-center p-3 font-bold text-xs sm:text-sm"
          >
            <div className="flex-grow pl-2 sm:pl-10">
              Title (Research Paper)
            </div>
            <div className="w-20 sm:w-28 text-center">Download PDF</div>
            <div className="hidden sm:block w-28 text-center">Abstract</div>
          </motion.div>

          <div className="bg-[#fdfaf1] p-4 border-b-2 border-gray-300">
            <motion.h4
              variants={itemVariants}
              className="text-lg font-bold text-gray-800"
            >
              ORIGINAL RESEARCH ARTICLES
            </motion.h4>
          </div>

          <motion.div variants={containerVariants}>
            {articles.map((article) => (
              <motion.div
                key={article.id}
                className="flex items-start p-4 border-b border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <div className="w-6 sm:w-8 text-gray-600 font-semibold text-sm sm:text-base">
                  {article.id}
                </div>

                <div className="flex-grow pr-2 sm:pr-4">
                  <a
                    href={article.abstractUrl}
                    className="text-blue-700 font-semibold uppercase hover:underline text-sm sm:text-base"
                  >
                    {article.title}
                  </a>
                  <p className="text-gray-800 mt-1 sm:mt-2 text-xs sm:text-sm">
                    {article.authors}
                  </p>
                  <div className="mt-2 text-xs sm:text-sm flex flex-wrap sm:hidden">
                    <a
                      href={article.abstractUrl}
                      className="text-green-600 font-semibold hover:underline mr-2"
                    >
                      Abstract
                    </a>
                    <span className="text-gray-400">|</span>
                    <a
                      href={article.pdfUrl}
                      className="text-green-600 font-semibold hover:underline ml-2"
                    >
                      Full Text
                    </a>
                  </div>
                </div>

                <div className="w-20 sm:w-28 text-center flex justify-center items-center">
                  <a
                    href={article.pdfUrl}
                    title="Download PDF"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://www.thejaps.org.pk/images/pdf.png"
                      alt="PDF download icon"
                      className="h-6 sm:h-8 transition-transform duration-200 hover:scale-110"
                    />
                  </a>
                </div>

                <div className="w-28 text-center hidden sm:flex justify-center items-center">
                  <a
                    href={article.abstractUrl}
                    className="text-green-600 font-semibold hover:underline text-sm"
                  >
                    Abstract
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default LatestIssue;
