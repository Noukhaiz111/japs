import React from "react";
import Layout from "./Layout";

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
  return (
    <Layout>
      <div className="bg-white p-4 md:p-6 w-full">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Volume 35, No. (4), 2025, August
          </h2>
          <p className="text-gray-600">(Impact Factor, 0.60; JCR 2024)</p>
        </div>

        <div className="border border-gray-300">
          <div className="p-4 border-b border-gray-300">
            <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6block">
              CONTENTS
            </h3>
          </div>

          <div className="bg-blue-800 text-white flex items-center p-2 font-bold">
            <div className="flex-grow pl-10">Title (Research Paper)</div>
            <div className="w-28 text-center">Download PDF</div>
            <div className="w-28 text-center">Abstract</div>
          </div>

          <div className="p-4 border-b-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800">
              ORIGINAL RESEARCH ARTICLES
            </h4>
          </div>

          <div>
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex items-start p-4 border-b border-gray-300"
              >
                <div className="w-8 text-gray-600 font-semibold">
                  {article.id}
                </div>

                <div className="flex-grow pr-4">
                  <a
                    href={article.abstractUrl}
                    className="text-blue-700 font-semibold uppercase hover:underline"
                  >
                    {article.title}
                  </a>
                  <p className="text-gray-800 mt-2">{article.authors}</p>
                  <div className="mt-3 text-sm">
                    <a
                      href={article.abstractUrl}
                      className="text-green-600 font-semibold hover:underline"
                    >
                      Abstract
                    </a>
                    <span className="text-gray-400 mx-2">|</span>
                    <a
                      href={article.pdfUrl}
                      className="text-green-600 font-semibold hover:underline"
                    >
                      Full Text
                    </a>
                    <span className="text-gray-400 mx-2">|</span>
                    <a
                      href={article.pdfUrl}
                      className="text-green-600 font-semibold hover:underline"
                    >
                      PDF
                    </a>
                  </div>
                </div>

                <div className="w-28 text-center flex justify-center">
                  <a href={article.pdfUrl} title="Download PDF">
                    <img
                      src="https://www.thejaps.org.pk/images/pdf.png"
                      alt="PDF"
                      className="h-8"
                    />
                  </a>
                </div>

                <div className="w-28 text-center">
                  <a
                    href={article.abstractUrl}
                    className="text-green-600 font-semibold hover:underline"
                  >
                    Abstract
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LatestIssue;
