import React from "react";
import Layout from "./Layout"

// Assume Tailwind CSS is configured and available globally

const Instructions = () => {
  return (
    <Layout>
    <div className="bg-gray-50 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-10 border border-gray-200">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
            Instructions to Authors
          </h1>
          <button className="mt-4 sm:mt-0 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Copy right release form
          </button>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-8 text-gray-700 leading-relaxed text-sm">
          {/* First Paragraph */}
          <p>
            Manuscripts and communications are accepted on the understanding
            that these have not been published previously. Manuscripts must be
            in English. Manuscripts may be typed on 1.5 line spacing on A4 size
            with 2.54 cm margins. Manuscripts must be accompanied by a covering
            letter stating that the material has not been published elsewhere
            and that the work is not being considered for publication in any
            other journal.
          </p>

          {/* Manuscript Types Section */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 mb-2">
            Manuscript types
          </h2>
          <p>
            The journal publishes three main types of manuscripts: original
            research articles, review articles, and short communications. The
            maximum word count for each manuscript type is as follows: Original
            research articles (5000 words), review articles (6000 words), and
            short communications (2000 words).
          </p>

          {/* Submission Section */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 mb-2">
            Submission
          </h2>
          <p>
            Manuscripts should be submitted to the editor-in-chief via the
            online submission system. All manuscripts will be peer-reviewed by
            at least two independent referees. The final decision on the
            acceptance of a manuscript for publication is at the discretion of
            the editorial board.
          </p>
          <p>
            Manuscripts should be prepared in accordance with the journal's
            guidelines. The guidelines for preparing manuscripts are given
            below:
          </p>

          {/* Guidelines Section */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-4 mb-2">
            General Guidelines
          </h3>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              <strong className="font-semibold">Title Page:</strong> The title
              page should include the title of the manuscript, the names and
              affiliations of all authors, and the corresponding author's
              contact information.
            </li>
            <li>
              <strong className="font-semibold">Abstract:</strong> The abstract
              should be a concise summary of the manuscript (maximum 250 words)
              and should be able to stand alone.
            </li>
            <li>
              <strong className="font-semibold">Keywords:</strong> A list of 3-5
              keywords should be provided immediately after the abstract.
            </li>
            <li>
              <strong className="font-semibold">Introduction:</strong> The
              introduction should provide a brief background on the topic and
              state the purpose of the study.
            </li>
            <li>
              <strong className="font-semibold">Materials and Methods:</strong>{" "}
              This section should describe the experimental procedures in
              sufficient detail to allow other researchers to replicate the
              work.
            </li>
            <li>
              <strong className="font-semibold">Results and Discussion:</strong>{" "}
              The results should be presented clearly and concisely, followed by
              a discussion of their significance.
            </li>
            <li>
              <strong className="font-semibold">Conclusion:</strong> A brief
              conclusion should summarize the main findings of the study.
            </li>
            <li>
              <strong className="font-semibold">References:</strong> All
              references cited in the text should be listed at the end of the
              manuscript in the format specified by the journal.
            </li>
          </ul>

          {/* Reference Formatting Section */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-4 mb-2">
            Reference Formatting
          </h3>
          <p>
            The journal follows the APA (American Psychological Association)
            citation style. Examples of common reference types are provided
            below.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              <strong className="font-semibold">Journal article:</strong>{" "}
              Author, A. A. (Year). Title of article.{" "}
              <em className="italic">Title of Periodical, volume</em>(issue),
              pages.
            </li>
            <li>
              <strong className="font-semibold">Book:</strong> Author, A. A.
              (Year). <em className="italic">Title of work</em>. Publisher.
            </li>
            <li>
              <strong className="font-semibold">Website:</strong> Author, A. A.
              (Year, Month Day). <em className="italic">Title of document</em>.
              Retrieved from URL
            </li>
          </ul>

          {/* Figures and Tables Section */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-4 mb-2">
            Figures and Tables
          </h3>
          <p>
            Figures and tables should be numbered sequentially and cited in the
            text. Each figure and table should have a descriptive caption.
          </p>

          {/* Article Processing Charges Section */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 mb-2">
            Article Processing Charges
          </h2>
          <p>
            There are no charges for submitting or processing manuscripts.
            However, there is a fee for accepted manuscripts to cover
            publication costs.
          </p>

          {/* Correspondence Section */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 mb-2">
            Correspondence
          </h2>
          <p>All correspondence should be addressed to the Editor-in-Chief.</p>
          <p className="mt-2 text-gray-600">
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
          </p>
        </div>
      </div>
    </div>
  </Layout>
  );
};

export default Instructions;