import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

const articleData = {
  volume: 35,
  issue: 4,
  year: 2025,
  month: "August",
  impactFactor: "0.60",
  jcr: "2024",
  title:
    "DETECTING ADULTERANTS IN TEA USING MID-INFRARED SPECTROSCOPY: A COMPARATIVE STUDY OF DEEP LEARNING AND MACHINE LEARNING",
  authors: [
    { name: "W. Liu", superscript: "1,2" },
    { name: "Y. Lin", superscript: "1,3" },
    { name: "Y. Cai", superscript: "1" },
    { name: "Honghao Cai", superscript: "1, *" },
    { name: "and Hui Ni", superscript: "4" },
  ],
  affiliations: [
    {
      id: 1,
      text: "Department of Physics, School of Science, Jimei University, Xiamen, Fujian Province, China",
    },
    {
      id: 2,
      text: "School of Materials Science and Engineering, Guilin University of Technology, Guangxi Province, China",
    },
    {
      id: 3,
      text: "School of Electronic Science and Engineering, Xiamen University,Xiamen, Fujian Province, China",
    },
    {
      id: 4,
      text: "Xiamen Ocean Vocational College, Xiamen, Fujian Province, China",
    },
  ],
  correspondingAuthorEmail: "hhcai@jmu.edu.cn",
  orcidId: "0000-0002-1870-8061",
  abstract:
    "The detection of adulterants in tea using infrared spectroscopy has gained prominence. However, there has yet to be a systematic comparison of the performance of traditional machine learning methods versus deep learning in the context of modelling infrared data for tea quality. This study compares machine learning and deep learning for modeling spectral data. Machine learning methods like Random Forest, K-Nearest Neighbors (KNN), Support Vector Classification, and Gaussian Naive Bayes used the Successive Projections Algorithm (SPA) for feature extraction, while deep learning models automatically extracted features. SPA-KNN showed superior performance with 0.950 accuracy, 0.953 macro-precision, 0.950 macro-recall, and 0.950 macro-F1 score on the test set (n=80), processing in 1.33 seconds. Deep learning models such as ResNet achieved a lower accuracy of 0.688 and required a longer processing time of 335.60 seconds. This may be partly due to the limited generalization ability caused by the small sample size. Additionally, the complex structure of ResNet, such as its depth, may contribute to the longer processing time. This study offers insights for selecting appropriate methods in tea quality assessment. Machine learning methods, especially with spectral preprocessing and SPA-based feature extraction, remain effective, while deep learning may not excel in limited data scenarios due to its higher computational demands.",
  keywords: [
    "Adulteration",
    "Food quality",
    "1D CNN",
    "Resnet",
    "LSTM",
    "Classification algorithm",
    "Feature selection",
  ],
  pdfUrl: "/path/to/full-text.pdf",
  fullTextUrl: "/path/to/full-text.html",
};

const ArticleDetail = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
          <div className="">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e8m2Lz064uW5bU5x1g8U0B2QdM4L7k.png"
              alt="Watermark"
              className="absolute inset-0 m-auto w-1/2 h-1/2 object-contain opacity-5 z-0"
            />
            <div className="relative z-10">
              <motion.div
                className="text-2xl font-bold text-gray-800 mb-2 space-y-2"
                variants={itemVariants}
              >
                <h2 className="text-2xl font-bold text-gray-800 pt-2">
                  Volume {articleData.volume}, No. ({articleData.issue}),{" "}
                  {articleData.year}, {articleData.month}
                </h2>
                <p className="text-gray-600">
                  (Impact Factor, {articleData.impactFactor}; JCR{" "}
                  {articleData.jcr})
                </p>
              </motion.div>

              <hr className="border-b-2 border-orange-500 mb-4" />

              <motion.div
                className="flex justify-end items-center space-x-4 mb-6 border-b-2 border-dotted border-gray-400 pb-4"
                variants={itemVariants}
              >
                <a
                  href={articleData.pdfUrl}
                  className="flex items-center text-red-700 hover:underline"
                >
                  <img
                    src="https://www.thejaps.org.pk/images/pdf.png"
                    alt="PDF Icon"
                    className="h-6 mr-2"
                  />
                  Download PDF
                </a>
                <a
                  href={articleData.fullTextUrl}
                  className="flex items-center text-orange-600 hover:underline"
                >
                  <img
                    src="https://www.thejaps.org.pk/images/text.png"
                    alt="Text Icon"
                    className="h-6 mr-2"
                  />
                  Full Text Page
                </a>
              </motion.div>

              <motion.h1
                className="text-lg font-bold text-blue-900 uppercase mb-4 leading-tight"
                variants={itemVariants}
              >
                {articleData.title}
              </motion.h1>

              <motion.div className="mb-4" variants={itemVariants}>
                {articleData.authors.map((author, index) => (
                  <span key={index} className="text-gray-800 font-semibold">
                    {author.name}
                    <sup>{author.superscript}</sup>
                    {index < articleData.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </motion.div>

              <motion.div
                className="space-y-1 text-sm text-gray-700 mb-4"
                variants={itemVariants}
              >
                {articleData.affiliations.map((aff) => (
                  <p key={aff.id}>
                    <sup>{aff.id}</sup>
                    {aff.text}
                  </p>
                ))}
              </motion.div>

              <motion.div
                className="text-sm text-gray-700 space-y-1 mb-8"
                variants={itemVariants}
              >
                <p>
                  <sup>*</sup>Corresponding author’s Email:{" "}
                  <a
                    href={`mailto:${articleData.correspondingAuthorEmail}`}
                    className="text-blue-600 hover:underline"
                  >
                    {articleData.correspondingAuthorEmail}
                  </a>
                </p>
                <p>ORCID ID: {articleData.orcidId}</p>
              </motion.div>

              <motion.div
                className="border-t border-b border-gray-300 py-6"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6">
                  ABSTRACT
                </h3>
                <p className="text-justify leading-relaxed text-sm">
                  {articleData.abstract}
                </p>
              </motion.div>

              <motion.div className="mt-6" variants={itemVariants}>
                <strong className="text-blue-900">Keywords:</strong>
                <span className="text-gray-700 ml-2">
                  {articleData.keywords.join(", ")}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;
