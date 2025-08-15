import React from "react";
import Layout from "./Layout";

const PublicationEthics = () => {
  return (
    <Layout>
      <div className="bg-[#fdfaf1] p-6 border border-gray-400 rounded-lg shadow-lg relative max-w-4xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6">
          PUBLICATION ETHICS
        </h2>

        <p className="text-sm mb-4">
          The Journal of Animal and Plant Sciences (The JAPS) holds the ethics
          of publication as one of its core values and as such, adheres strictly
          to internationally accepted publication ethics. To ensure compliance,
          The JAPS employs the double-blinded peer-review process for all
          articles. The rationale for double-blinded peer review process is to
          validate the integrity and novelty of the research work. Peer review
          process adopted by the journal acts as filter and increases the
          quality of research submitted for publication. This process also helps
          the authors to remove any errors or a gap in manuscript mistakenly
          overlooked and assists in making the research more applicable in real
          time.
        </p>

        <p className="text-sm mb-5">
          The Journal of Animal and Plant Sciences (The JAPS) adopts the{" "}
          <strong className="text-[#4682b4]">COPE guidelines</strong> on
          publication ethics.
        </p>

        <p className="text-sm font-bold text-[#4682b4] mb-2.5">
          Authors must confirm the following; that:
        </p>
        <ul className="list-none pl-5 text-sm mb-5">
          <li className="mb-1.5">
            <span className="text-[#4CAF50] mr-1">&#10003;</span>Submitted
            manuscripts are the original work of the author(s);
          </li>
          <li className="mb-1.5">
            <span className="text-[#4CAF50] mr-1">&#10003;</span>Only
            unpublished manuscript/data should be submitted;
          </li>
          <li className="mb-1.5">
            <span className="text-[#4CAF50] mr-1">&#10003;</span>It is unethical
            to submit a manuscript to more than one journal concurrently;
          </li>
          <li className="mb-1.5">
            <span className="text-[#4CAF50] mr-1">&#10003;</span>A certificate
            to the effect that "the manuscript (give title) is based on original
            research and the data presented have neither been published in
            whole/in part nor under consideration for publication in any other
            journal/periodical. All the authors/co-authors are well conversant
            with the contents and agreed to the sequence of authorship" must
            accompany the manuscript
          </li>
          <li className="mb-1.5">
            <span className="text-[#4CAF50] mr-1">&#10003;</span>Any conflict of
            interest must be clearly stated;
          </li>
          <li className="mb-1.5">
            <span className="text-[#4CAF50] mr-1">&#10003;</span>The sources of
            data used in the development of the manuscript is acknowledged;
          </li>
          <li className="mb-1.5">
            <span className="text-[#4CAF50] mr-1">&#10003;</span>All errors
            discovered in the manuscript after submission must be swiftly
            communicated to the Editor.
          </li>
        </ul>

        <p className="text-sm mb-5">
          Reviewers are expected to evaluate a manuscript for critical analysis,
          comparative analysis and most importantly for integrity and novelty of
          the research work.
        </p>

        <p className="text-sm font-bold text-[#4682b4] mb-2.5">
          Therefore, reviewers must confirm the following; that:
        </p>
        <ul className="list-none pl-5 text-sm mb-5">
          <li className="mb-1.5">
            <span className="text-[#4CAF50] mr-1">&#10003;</span>All manuscripts
            are reviewed in fairness based on the intellectual content of the
            article regardless of gender, race, ethnicity, religion, citizenry
            nor political values of author(s);
          </li>
          <li className="mb-1.5">
            <span className="text-[#4CAF50] mr-1">&#10003;</span>Any observed
            conflict of interest during the review process must be communicated
            to the Editor;
          </li>
          <li className="mb-1.5">
            <span className="text-[#4CAF50] mr-1">&#10003;</span>All information
            pertaining to the manuscript is kept confidential;
          </li>
          <li className="mb-1.5">
            <span className="text-[#4CAF50] mr-1">&#10003;</span>Any information
            that may be the reason for the rejection of publication of a
            manuscript must be communicated to the Editor.
          </li>
        </ul>

        <p className="text-sm font-bold text-[#4682b4] mb-2.5">
          Editors must confirm the following; that:
        </p>
        <ul className="list-none pl-5 text-sm">
          <li className="mb-1.5">
            <span className="text-[#4CAF50] mr-1">&#10003;</span>All manuscripts
            are evaluated in fairness based on the intellectual content of the
            paper regardless of gender, race, ethnicity, religion, citizenry nor
            political values of authors;
          </li>
          <li className="mb-1.5">
            <span className="text-[#4CAF50] mr-1">&#10003;</span>Information
            pertaining to manuscripts are kept confidential;
          </li>
          <li className="mb-1.5">
            <span className="text-[#4CAF50] mr-1">&#10003;</span>Any observed
            conflict of interest pertaining to manuscripts must be disclosed;
          </li>
          <li className="mb-1.5">
            <span className="text-[#4CAF50] mr-1">&#10003;</span>Editorial Board
            takes responsibility for making publication decisions for submitted
            manuscripts based on the reviewer's evaluation of the manuscript,
            policies of the journal editorial board and legal restrain acting
            against plagiarism, libel and copyright infringement.
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default PublicationEthics;
