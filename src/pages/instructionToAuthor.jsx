import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

const Instructions = () => {
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
          <motion.h1
            variants={itemVariants}
            className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6"
          >
            INSTRUCTIONS TO AUTHORS
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="flex w-full justify-end mb-4"
          >
            <button className="mt-4 sm:mt-0 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Copy right release form
            </button>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="space-y-8 text-gray-700 leading-relaxed text-sm"
          >
            <motion.p variants={itemVariants}>
              Manuscripts and communications are accepted on the understanding
              that these have not been published previously. Manuscripts must be
              in English. Manuscripts may be typed on 1.5 line spacing on A4
              size with 2.54 cm margins. Manuscripts must be accompanied by a
              covering letter stating that the material has not been published
              elsewhere and that the work is not being considered for
              publication in any other journal.
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 mb-2"
            >
              Manuscript types
            </motion.h2>
            <motion.p variants={itemVariants}>
              The journal publishes three main types of manuscripts: original
              research articles, review articles, and short communications. The
              maximum word count for each manuscript type is as follows:
              Original research articles (5000 words), review articles (6000
              words), and short communications (2000 words).
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 mb-2"
            >
              Submission
            </motion.h2>
            <motion.p variants={itemVariants}>
              Manuscripts should be submitted to the editor-in-chief via the
              online submission system. All manuscripts will be peer-reviewed by
              at least two independent referees. The final decision on the
              acceptance of a manuscript for publication is at the discretion of
              the editorial board.
            </motion.p>
            <motion.p variants={itemVariants}>
              Manuscripts should be prepared in accordance with the journal's
              guidelines. The guidelines for preparing manuscripts are given
              below:
            </motion.p>
            <motion.h3
              variants={itemVariants}
              className="text-lg sm:text-xl font-bold text-gray-800 mt-4 mb-2"
            >
              General Guidelines
            </motion.h3>
            <motion.ul
              variants={containerVariants}
              className="list-disc list-inside space-y-2 pl-4"
            >
              <motion.li variants={itemVariants}>
                <strong className="font-semibold">Title Page:</strong> The title
                page should include the title of the manuscript, the names and
                affiliations of all authors, and the corresponding author's
                contact information.
              </motion.li>
              <motion.li variants={itemVariants}>
                <strong className="font-semibold">Abstract:</strong> The
                abstract should be a concise summary of the manuscript (maximum
                250 words) and should be able to stand alone.
              </motion.li>
              <motion.li variants={itemVariants}>
                <strong className="font-semibold">Keywords:</strong> A list of
                3-5 keywords should be provided immediately after the abstract.
              </motion.li>
              <motion.li variants={itemVariants}>
                <strong className="font-semibold">Introduction:</strong> The
                introduction should provide a brief background on the topic and
                state the purpose of the study.
              </motion.li>
              <motion.li variants={itemVariants}>
                <strong className="font-semibold">
                  Materials and Methods:
                </strong>{" "}
                This section should describe the experimental procedures in
                sufficient detail to allow other researchers to replicate the
                work.
              </motion.li>
              <motion.li variants={itemVariants}>
                <strong className="font-semibold">
                  Results and Discussion:
                </strong>{" "}
                The results should be presented clearly and concisely, followed
                by a discussion of their significance.
              </motion.li>
              <motion.li variants={itemVariants}>
                <strong className="font-semibold">Conclusion:</strong> A brief
                conclusion should summarize the main findings of the study.
              </motion.li>
              <motion.li variants={itemVariants}>
                <strong className="font-semibold">References:</strong> All
                references cited in the text should be listed at the end of the
                manuscript in the format specified by the journal.
              </motion.li>
            </motion.ul>
            <motion.h3
              variants={itemVariants}
              className="text-lg sm:text-xl font-bold text-gray-800 mt-4 mb-2"
            >
              Reference Formatting
            </motion.h3>
            <motion.p variants={itemVariants}>
              The journal follows the APA (American Psychological Association)
              citation style. Examples of common reference types are provided
              below.
            </motion.p>
            <motion.ul
              variants={containerVariants}
              className="list-disc list-inside space-y-2 pl-4"
            >
              <motion.li variants={itemVariants}>
                <strong className="font-semibold">Journal article:</strong>{" "}
                Author, A. A. (Year). Title of article.{" "}
                <em className="italic">Title of Periodical, volume</em>(issue),
                pages.
              </motion.li>
              <motion.li variants={itemVariants}>
                <strong className="font-semibold">Book:</strong> Author, A. A.
                (Year). <em className="italic">Title of work</em>. Publisher.
              </motion.li>
              <motion.li variants={itemVariants}>
                <strong className="font-semibold">Website:</strong> Author, A.
                A. (Year, Month Day).{" "}
                <em className="italic">Title of document</em>. Retrieved from
                URL
              </motion.li>
            </motion.ul>
            <motion.h3
              variants={itemVariants}
              className="text-lg sm:text-xl font-bold text-gray-800 mt-4 mb-2"
            >
              Figures and Tables
            </motion.h3>
            <motion.p variants={itemVariants}>
              Figures and tables should be numbered sequentially and cited in
              the text. Each figure and table should have a descriptive caption.
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 mb-2"
            >
              Article Processing Charges
            </motion.h2>
            <motion.p variants={itemVariants}>
              There are no charges for submitting or processing manuscripts.
              However, there is a fee for accepted manuscripts to cover
              publication costs.
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 mb-2"
            >
              Correspondence
            </motion.h2>
            <motion.p variants={itemVariants}>
              All correspondence should be addressed to the Editor-in-Chief.
            </motion.p>
            <motion.p variants={itemVariants} className="mt-2 text-gray-600">
              Journal of Research, P.O. Box 123, Street 1, ABC Town, XYZ City,
              Pakistan
              <br />
              Email:{" "}
              <a
                href="mailto:editor@email.com"
                className="text-blue-600 hover:underline"
              >
                editor@email.com
              </a>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Instructions;
