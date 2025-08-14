import React from 'react';
import Layout from './Layout';

const OpenAccessPolicy = () => {
  return (
    <Layout>
    <div className="flex justify-center items-start w-full">
      {/* Main content box with consistent styling */}
      <div className="bg-[#fdfaf1] p-6 border border-gray-400 rounded-lg shadow-lg relative max-w-4xl w-full">
        
        {/* Watermark Logo in the background */}
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e8m2Lz064uW5bU5x1g8U0B2QdM4L7k.png" // Aapke watermark logo ka path
          alt="Watermark"
          className="absolute inset-0 m-auto w-2/3 h-2/3 object-contain opacity-10 z-0"
        />

        {/* Content container to appear above the watermark */}
        <div className="relative z-10">
          {/* Heading with orange underline */}
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6">
            Open Access Policy
          </h2>
          
          {/* Paragraphs with content */}
          <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
            <p>
              Journal of Animal and Plant Sciences (JAPS) ISSN (Print): <strong className="text-blue-700">1018-7081</strong> and ISSN (Electronic): <strong className="text-blue-700">2309-8694</strong> is a peer reviewed open access journal. Peer review is the responsibility of the Editorial Board of JAPS
            </p>
            <p>
              All articles published open access will be immediately and permanently free for everyone to read, download, copy and distribute.
            </p>
            <p>
              Permitted reuse as prescribed under Creative Commons Attribution License (<a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">http://creativecommons.org/licenses/by/4.0/</a>), to researchers and scholars who use the content of the published papers. This license permits unrestricted use, distribution and reproduction in any medium, provided the original work is properly cited.
            </p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default OpenAccessPolicy;