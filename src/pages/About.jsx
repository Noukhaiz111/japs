import React from 'react';
import Layout from "./Layout"

const About = () => {
  return (
    <Layout>
    <div className="flex justify-center items-start w-full">
      {/* Main content box with styling similar to the Contact page */}
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
            About Journal
          </h2>
          
          {/* Main paragraph content */}
          <p className="text-gray-700 leading-relaxed text-justify">
            The Journal of Animal and Plant Sciences (JAPS), a peer reviewed journal, has been published bi-monthly by the <a href="https://www.thejaps.org.pk/PAS/" className="text-red-700 font-semibold hover:underline">Pakistan Agricultural Scientists Forum (PAS FORUM)</a>, since 1991. It publishes original research and review articles on all aspects of animal (including fisheries/wildlife) and plant sciences, agricultural economics, rural sociology and other related subjects. Manuscripts are accepted for publication on the understanding that they have not been published and are not being considered for publication elsewhere. The Editor will assume that all named authors agree with the contents and form of the paper. The copyright of papers accepted for publication belongs to The JAPS. All contributions are subject to editorial revision and Editor's decision will be final.
          </p>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default About;