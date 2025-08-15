import React from "react";
import Layout from "./Layout";

const ScopeOfJournal = () => {
  return (
    <Layout>
      <div className="flex items-start w-full">
        <div className="bg-[#fdfaf1] p-6 border border-gray-400 rounded-lg shadow-lg relative max-w-4xl w-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e8m2Lz064uW5bU5x1g8U0B2QdM4L7k.png" // Aapke watermark logo ka path
            alt="Watermark"
            className="absolute inset-0 m-auto w-2/3 h-2/3 object-contain opacity-10 z-0"
          />

          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6">
              SCOPE OF JOURNAL
            </h2>

            <p className="text-gray-700 leading-relaxed text-justify">
              The Journal of Animal and Plant Sciences (JAPS) is a bi-monthly
              publication and is being published regularly since 1991 by the
              Pakistan Agricultural Scientists Forum (PAS FORUM). It publishes
              original research papers, review, extension/clinical articles on
              all aspects of animal (including fisheries/wildlife) and plant
              sciences, agricultural economics, rural sociology and other
              related subjects. The journal is read, abstracted and indexed by
              the abstracting/indexing agencies of international repute.
            </p>

            <div className="text-center my-8">
              <p className="text-2xl font-bold text-blue-800">
                Impact Factor 0.60
              </p>
              <p className="text-xl font-bold text-purple-700">JCR 2024</p>
            </div>

            <p className="text-gray-700 leading-relaxed text-justify">
              <strong className="text-blue-800">Open access Policy:</strong> The
              management of the Journal of Animal and Plant Sciences ensures
              that the manuscripts published in it are freely accessible online/
              via internet immediately upon publication, without any
              cost/barrier of subscription/registration to the readers
              universally.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ScopeOfJournal;
