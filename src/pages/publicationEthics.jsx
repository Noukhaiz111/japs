import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

const PublicationEthics = () => {
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
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6"
          >
            PUBLICATION ETHICS
          </motion.h2>

          <motion.p variants={itemVariants} className="text-sm mb-4">
            The Journal of Animal and Plant Sciences (The JAPS) holds the ethics
            of publication as one of its core values and as such, adheres
            strictly to internationally accepted publication ethics. To ensure
            compliance, The JAPS employs the double-blinded peer-review process
            for all articles. The rationale for double-blinded peer review
            process is to validate the integrity and novelty of the research
            work. Peer review process adopted by the journal acts as filter and
            increases the quality of research submitted for publication. This
            process also helps the authors to remove any errors or a gap in
            manuscript mistakenly overlooked and assists in making the research
            more applicable in real time.
          </motion.p>

          <motion.p variants={itemVariants} className="text-sm mb-5">
            The Journal of Animal and Plant Sciences (The JAPS) adopts the{" "}
            <strong className="text-[#4682b4]">COPE guidelines</strong> on
            publication ethics.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm font-bold text-[#4682b4] mb-2.5"
          >
            Authors must confirm the following; that:
          </motion.p>
          <motion.ul
            variants={containerVariants}
            className="list-none pl-5 text-sm mb-5"
          >
            <motion.li variants={itemVariants} className="mb-1.5">
              <span className="text-[#4CAF50] mr-1">&#10003;</span>Submitted
              manuscripts are the original work of the author(s);
            </motion.li>
            <motion.li variants={itemVariants} className="mb-1.5">
              <span className="text-[#4CAF50] mr-1">&#10003;</span>Only
              unpublished manuscript/data should be submitted;
            </motion.li>
            <motion.li variants={itemVariants} className="mb-1.5">
              <span className="text-[#4CAF50] mr-1">&#10003;</span>It is
              unethical to submit a manuscript to more than one journal
              concurrently;
            </motion.li>
            <motion.li variants={itemVariants} className="mb-1.5">
              <span className="text-[#4CAF50] mr-1">&#10003;</span>A certificate
              to the effect that "the manuscript (give title) is based on
              original research and the data presented have neither been
              published in whole/in part nor under consideration for publication
              in any other journal/periodical. All the authors/co-authors are
              well conversant with the contents and agreed to the sequence of
              authorship" must accompany the manuscript
            </motion.li>
            <motion.li variants={itemVariants} className="mb-1.5">
              <span className="text-[#4CAF50] mr-1">&#10003;</span>Any conflict
              of interest must be clearly stated;
            </motion.li>
            <motion.li variants={itemVariants} className="mb-1.5">
              <span className="text-[#4CAF50] mr-1">&#10003;</span>The sources
              of data used in the development of the manuscript is acknowledged;
            </motion.li>
            <motion.li variants={itemVariants} className="mb-1.5">
              <span className="text-[#4CAF50] mr-1">&#10003;</span>All errors
              discovered in the manuscript after submission must be swiftly
              communicated to the Editor.
            </motion.li>
          </motion.ul>

          <motion.p variants={itemVariants} className="text-sm mb-5">
            Reviewers are expected to evaluate a manuscript for critical
            analysis, comparative analysis and most importantly for integrity
            and novelty of the research work.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm font-bold text-[#4682b4] mb-2.5"
          >
            Therefore, reviewers must confirm the following; that:
          </motion.p>
          <motion.ul
            variants={containerVariants}
            className="list-none pl-5 text-sm mb-5"
          >
            <motion.li variants={itemVariants} className="mb-1.5">
              <span className="text-[#4CAF50] mr-1">&#10003;</span>All
              manuscripts are reviewed in fairness based on the intellectual
              content of the article regardless of gender, race, ethnicity,
              religion, citizenry nor political values of author(s);
            </motion.li>
            <motion.li variants={itemVariants} className="mb-1.5">
              <span className="text-[#4CAF50] mr-1">&#10003;</span>Any observed
              conflict of interest during the review process must be
              communicated to the Editor;
            </motion.li>
            <motion.li variants={itemVariants} className="mb-1.5">
              <span className="text-[#4CAF50] mr-1">&#10003;</span>All
              information pertaining to the manuscript is kept confidential;
            </motion.li>
            <motion.li variants={itemVariants} className="mb-1.5">
              <span className="text-[#4CAF50] mr-1">&#10003;</span>Any
              information that may be the reason for the rejection of
              publication of a manuscript must be communicated to the Editor.
            </motion.li>
          </motion.ul>

          <motion.p
            variants={itemVariants}
            className="text-sm font-bold text-[#4682b4] mb-2.5"
          >
            Editors must confirm the following; that:
          </motion.p>
          <motion.ul
            variants={containerVariants}
            className="list-none pl-5 text-sm"
          >
            <motion.li variants={itemVariants} className="mb-1.5">
              <span className="text-[#4CAF50] mr-1">&#10003;</span>All
              manuscripts are evaluated in fairness based on the intellectual
              content of the paper regardless of gender, race, ethnicity,
              religion, citizenry nor political values of authors;
            </motion.li>
            <motion.li variants={itemVariants} className="mb-1.5">
              <span className="text-[#4CAF50] mr-1">&#10003;</span>Information
              pertaining to manuscripts are kept confidential;
            </motion.li>
            <motion.li variants={itemVariants} className="mb-1.5">
              <span className="text-[#4CAF50] mr-1">&#10003;</span>Any observed
              conflict of interest pertaining to manuscripts must be disclosed;
            </motion.li>
            <motion.li variants={itemVariants} className="mb-1.5">
              <span className="text-[#4CAF50] mr-1">&#10003;</span>Editorial
              Board takes responsibility for making publication decisions for
              submitted manuscripts based on the reviewer's evaluation of the
              manuscript, policies of the journal editorial board and legal
              restrain acting against plagiarism, libel and copyright
              infringement.
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </Layout>
  );
};

export default PublicationEthics;
