import React from "react";
import Layout from "./Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="flex items-start">
        <div className="bg-[#fdfaf1] p-6 border border-gray-400 rounded-lg shadow-lg relative max-w-4xl w-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e8m2Lz064uW5bU5x1g8U0B2QdM4L7k.png" // Aapke watermark logo ka path
            alt="Watermark"
            className="absolute inset-0 m-auto w-2/3 h-2/3 object-contain opacity-10 z-0"
          />

          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6">
              Contact Us
            </h2>

            <div className="border border-gray-300 p-4">
              <p className="font-semibold text-yellow-700 mb-4">
                ALL CORRESPONDENCE MAY BE ADDRESSED TO THE FOLLOWING
              </p>

              <div className="text-gray-700 space-y-1">
                <p className="font-bold text-blue-800 text-lg">
                  Prof. Dr. Khalid Javed
                </p>
                <p>Chief Editor</p>
                <p className="mt-2">
                  146-Rizwan Block, Awan Town, Multan Road, Lahore-54780,
                  Pakistan
                </p>
                <p className="mt-2">
                  E-mail:
                  <a
                    href="mailto:editor@thejaps.org.pk"
                    className="text-red-700 hover:underline ml-1"
                  >
                    editor@thejaps.org.pk
                  </a>
                  ,
                  <a
                    href="mailto:javeddrkhalid@yahoo.com"
                    className="text-red-700 hover:underline ml-1"
                  >
                    javeddrkhalid@yahoo.com
                  </a>
                </p>
                <p className="mt-2">Mob. +92 300 6690094</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
