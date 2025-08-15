import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

const AbstractingIndexingAgencies = () => {
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

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
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
            variants={textVariants}
            className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6"
          >
            ABSTRACTING / INDEXING AGENCIES
          </motion.h2>

          <motion.p variants={textVariants} className="text-sm text-black">
            The Journal of Animal and Plant Sciences, (The JAPS) has been listed
            in Ulrich's Directory Since 2007 and being abstracted in{" "}
            <strong className="text-[#4682b4] font-normal">
              ISI Thomson Reuters Science Citations Index Expanded, Clarivate
              Analytics (WoS) Journal Citation Reports/ Science Edition, SCOPUS,
              Asian Digital Library (ADL),{" "}
            </strong>
            Agroforestry Abstracts (Online); Animal Breeding Abstracts;
            Biocontrol News and Information; Biofuels Abstracts; Botanical
            Pesticides Abstracts; C A P Abstracts; CABI, Crop Physiology
            Abstracts; Dairy Science Abstracts; Field Crop Abstracts; Forestry
            abstracts; Global Health; Grasslands and Forage Abstracts;
            Helminthological Abstracts; Horticultural Science Abstracts; Index
            Veterinarius; Maize Abstracts Online; Nutrition Abstracts and
            Reviews; Organic Research Database; Plant Breeding Abstracts;
            Poultry Abstracts; Protozoological Abstracts; Review of Aromatic and
            Medicinal Plants; Review of Medical and Veterinary Mycology; Review
            of Plant Pathology; Rice Abstracts; Rural Development Abstracts;
            Seed Abstracts; Soils and Fertilizers; Soybean Abstracts (Online);
            Sugar Industry Abstracts; Tropical Diseases Bulletin; Veterinary
            Bulletin; Veterinary Science Database; Weed Abstracts; Wheat, Barley
            and Triticale Abstracts; World Agricultural Economics and Rural
            Sociology Abstracts, PASTlC
          </motion.p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AbstractingIndexingAgencies;
