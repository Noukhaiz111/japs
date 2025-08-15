import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

const JournalArchives = () => {
  const [archives, setArchives] = useState({});

  const archiveData = {
    2025: [
      { id: "25_1", text: "Volume 35, No. (1), 2025, February" },
      { id: "25_2", text: "Volume 35, No. (2), 2025, April" },
      { id: "25_3", text: "Volume 35, No. (3), 2025, June" },
      { id: "25_4", text: "Volume 35, No. (4), 2025, August" },
      { id: "25_5", text: "Volume 35, No. (5), 2025, October" },
    ],
    2024: [
      { id: "24_1", text: "Volume 34, No. (1), 2024, February" },
      { id: "24_2", text: "Volume 34, No. (2), 2024, April" },
      { id: "24_3", text: "Volume 34, No. (3), 2024, June" },
      { id: "24_4", text: "Volume 34, No. (4), 2024, August" },
      { id: "24_5", text: "Volume 34, No. (5), 2024, October" },
      { id: "24_6", text: "Volume 34, No. (6), 2024, December" },
    ],
    2023: [
      { id: "23_1", text: "Volume 33, No. (1), 2023, February" },
      { id: "23_2", text: "Volume 33, No. (2), 2023, April" },
      { id: "23_3", text: "Volume 33, No. (3), 2023, June" },
      { id: "23_4", text: "Volume 33, No. (4), 2023, August" },
      { id: "23_5", text: "Volume 33, No. (5), 2023, October" },
      { id: "23_6", text: "Volume 33, No. (6), 2023, December" },
    ],
    2022: [
      { id: "22_1", text: "Volume 32, No. (1), 2022, February" },
      { id: "22_2", text: "Volume 32, No. (2), 2022, April" },
      { id: "22_3", text: "Volume 32, No. (3), 2022, June" },
      { id: "22_4", text: "Volume 32, No. (4), 2022, August" },
      { id: "22_5", text: "Volume 32, No. (5), 2022, October" },
      { id: "22_6", text: "Volume 32, No. (6), 2022, December" },
    ],
    2021: [
      { id: "21_1", text: "Volume 31, No. (1), 2021, February" },
      { id: "21_2", text: "Volume 31, No. (2), 2021, April" },
      { id: "21_3", text: "Volume 31, No. (3), 2021, June" },
      { id: "21_4", text: "Volume 31, No. (4), 2021, August" },
      { id: "21_5", text: "Volume 31, No. (5), 2021, October" },
      { id: "21_6", text: "Volume 31, No. (6), 2021, December" },
    ],
    2020: [
      { id: "20_1", text: "Volume 30, No. (1), 2020, February" },
      { id: "20_2", text: "Volume 30, No. (2), 2020, April" },
      { id: "20_3", text: "Volume 30, No. (3), 2020, June" },
      { id: "20_4", text: "Volume 30, No. (4), 2020, August" },
      { id: "20_5", text: "Volume 30, No. (5), 2020, October" },
      { id: "20_6", text: "Volume 30, No. (6), 2020, December" },
    ],
    2019: [
      { id: "19_1", text: "Volume 29, No. (1), 2019, February" },
      { id: "19_2", text: "Volume 29, No. (2), 2019, April" },
      { id: "19_3", text: "Volume 29, No. (3), 2019, June" },
      { id: "19_4", text: "Volume 29, No. (4), 2019, August" },
      { id: "19_5", text: "Volume 29, No. (5), 2019, October" },
      { id: "19_6", text: "Volume 29, No. (6), 2019, December" },
    ],
    2018: [
      { id: "18_1", text: "Volume 28, No. (1), 2018, February" },
      { id: "18_2", text: "Volume 28, No. (2), 2018, April" },
      { id: "18_3", text: "Volume 28, No. (3), 2018, June" },
      { id: "18_4", text: "Volume 28, No. (4), 2018, August" },
      { id: "18_5", text: "Volume 28, No. (5), 2018, October" },
      { id: "18_6", text: "Volume 28, No. (6), 2018, December" },
    ],
    2017: [
      { id: "17_1", text: "Volume 27, No. (1), 2017, February" },
      { id: "17_2", text: "Volume 27, No. (2), 2017, April" },
      { id: "17_3", text: "Volume 27, No. (3), 2017, June" },
      { id: "17_4", text: "Volume 27, No. (4), 2017, August" },
      { id: "17_5", text: "Volume 27, No. (5), 2017, October" },
      { id: "17_6", text: "Volume 27, No. (6), 2017, December" },
    ],
    2016: [
      { id: "16_1", text: "Volume 26, No. (1), 2016, February" },
      { id: "16_2", text: "Volume 26, No. (2), 2016, April" },
      { id: "16_3", text: "Volume 26, No. (3), 2016, June" },
      { id: "16_4", text: "Volume 26, No. (4), 2016, August" },
      { id: "16_5", text: "Volume 26, No. (5), 2016, October" },
      { id: "16_6", text: "Volume 26, No. (6), 2016, December" },
    ],
    2015: [
      { id: "15_1", text: "Volume 25, No. (1), 2015, February" },
      { id: "15_2", text: "Volume 25, No. (2), 2015, April" },
      { id: "15_3", text: "Volume 25, No. (3), 2015, June" },
      { id: "15_4", text: "Volume 25, No. (4), 2015, August" },
      { id: "15_5", text: "Volume 25, No. (5), 2015, October" },
      { id: "15_6", text: "Volume 25, No. (6), 2015, December" },
    ],
    2014: [
      { id: "14_1", text: "Volume 24, No. (1), 2014, February" },
      { id: "14_2", text: "Volume 24, No. (2), 2014, April" },
      { id: "14_3", text: "Volume 24, No. (3), 2014, June" },
      { id: "14_4", text: "Volume 24, No. (4), 2014, August" },
      { id: "14_5", text: "Volume 24, No. (5), 2014, October" },
      { id: "14_6", text: "Volume 24, No. (6), 2014, December" },
    ],
    2013: [
      { id: "13_1", text: "Volume 23, No. (1), 2013, February" },
      { id: "13_2", text: "Volume 23, No. (2), 2013, April" },
      { id: "13_3", text: "Volume 23, No. (3), 2013, June" },
      { id: "13_4", text: "Volume 23, No. (4), 2013, August" },
      { id: "13_5", text: "Volume 23, No. (5), 2013, October" },
      { id: "13_6", text: "Volume 23, No. (6), 2013, December" },
    ],
    2012: [
      { id: "12_1", text: "Volume 22, No. (1), 2012, February" },
      { id: "12_2", text: "Volume 22, No. (2), 2012, April" },
      { id: "12_3", text: "Volume 22, No. (3), 2012, June" },
      { id: "12_4", text: "Volume 22, No. (4), 2012, August" },
      { id: "12_5", text: "Volume 22, No. (5), 2012, October" },
      { id: "12_6", text: "Volume 22, No. (6), 2012, December" },
    ],
    2011: [
      { id: "11_1", text: "Volume 21, No. (1), 2011, February" },
      { id: "11_2", text: "Volume 21, No. (2), 2011, April" },
      { id: "11_3", text: "Volume 21, No. (3), 2011, June" },
      { id: "11_4", text: "Volume 21, No. (4), 2011, August" },
      { id: "11_5", text: "Volume 21, No. (5), 2011, October" },
      { id: "11_6", text: "Volume 21, No. (6), 2011, December" },
    ],
    2010: [
      { id: "10_1", text: "Volume 20, No. (1), 2010, February" },
      { id: "10_2", text: "Volume 20, No. (2), 2010, April" },
      { id: "10_3", text: "Volume 20, No. (3), 2010, June" },
      { id: "10_4", text: "Volume 20, No. (4), 2010, August" },
      { id: "10_5", text: "Volume 20, No. (5), 2010, October" },
      { id: "10_6", text: "Volume 20, No. (6), 2010, December" },
    ],
    2009: [
      { id: "09_1", text: "Volume 19, No. (1), 2009, February" },
      { id: "09_2", text: "Volume 19, No. (2), 2009, April" },
      { id: "09_3", text: "Volume 19, No. (3), 2009, June" },
      { id: "09_4", text: "Volume 19, No. (4), 2009, August" },
      { id: "09_5", text: "Volume 19, No. (5), 2009, October" },
      { id: "09_6", text: "Volume 19, No. (6), 2009, December" },
    ],
    2008: [
      { id: "08_1", text: "Volume 18, No. (1), 2008, February" },
      { id: "08_2", text: "Volume 18, No. (2), 2008, April" },
      { id: "08_3", text: "Volume 18, No. (3), 2008, June" },
      { id: "08_4", text: "Volume 18, No. (4), 2008, August" },
    ],
  };

  useEffect(() => {
    setArchives(archiveData);
  }, []);

  const handleLinkClick = (volumeId) => {
    const url = `https://example.com/journal-archives/${volumeId}`;
    window.open(url, "_blank");
  };

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

  const yearVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const volumeVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
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
            variants={yearVariants}
            className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6"
          >
            JOURNAL ARCHIVES
          </motion.h2>

          {Object.entries(archives).map(([year, volumes]) => (
            <motion.div
              key={year}
              className="mb-5 relative"
              variants={yearVariants}
            >
              <motion.div
                className="bg-[#e6dbbf] p-2 text-xl text-[#8b8000] font-bold text-center mb-2"
                variants={yearVariants}
              >
                {year}
              </motion.div>
              <motion.div
                className="flex flex-wrap justify-start gap-4"
                variants={containerVariants}
              >
                {volumes.map((volume) => (
                  <motion.a
                    key={volume.id}
                    href="/volumes"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(volume.id);
                    }}
                    className="text-sm text-[#4682b4] no-underline whitespace-nowrap cursor-pointer p-1 hover:underline hover:text-[#38668c]"
                    variants={volumeVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {volume.text}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default JournalArchives;
