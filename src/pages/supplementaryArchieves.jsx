import Layout from "./Layout";
import React, { useState, useEffect } from "react";

const SupplementaryArchives = () => {
  const archiveData = {
    2015: [
      {
        id: "vol_25_suppl_1",
        text: "Volume 25 (3 Suppl. 1) 2015",
        subtext: "(Special Issue)",
      },
    ],
    2013: [{ id: "vol_23_suppl_1", text: "Volume 23, No. (1 Suppl.), 2013" }],
    2012: [
      { id: "vol_22_suppl_1", text: "Volume 22, No. (1 Suppl.), 2012" },
      { id: "vol_22_suppl_2", text: "Volume 22, No. (2 Suppl.), 2012" },
      { id: "vol_22_suppl_3", text: "Volume 22, No. (3 Suppl.), 2012" },
    ],
  };

  const [archives, setArchives] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
        setArchives(archiveData);
      } catch (error) {
        console.error("Failed to fetch archive data:", error);
      }
    };
    fetchData();
  }, []);

  const handleLinkClick = (volumeId) => {
    const url = `https://example.com/journal-archives/${volumeId}`;
    window.open(url, "_blank");
  };

  return (
    <Layout>
      <div className="bg-[#fdfaf1] p-6 border border-gray-400 rounded-lg shadow-lg relative max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6">
          JOURNAL (SUPPLEMENTARY) ARCHIVES
        </h1>

        <div className="p-6 sm:p-10 space-y-8">
          {Object.entries(archives).map(([year, volumes]) => (
            <div
              key={year}
              className="bg-[#e6dbbf] rounded-lg p-6 shadow-sm border border-gray-300"
            >
              <h2 className="text-2xl sm:text-2xl font-bold text-[#8b8000] mb-4 text-center">
                {year}
              </h2>
              <div className="flex flex-col sm:flex-row sm:justify-center items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8">
                {volumes.map((volume) => (
                  <button
                    key={volume.id}
                    onClick={() => handleLinkClick(volume.id)}
                    className="flex flex-col items-center text-center p-2 rounded-md hover:bg-[#d8c7a6] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <span className="text-base sm:text-lg font-medium text-[#4682b4]">
                      {volume.text}
                    </span>
                    {volume.subtext && (
                      <span className="text-sm font-normal text-[#4682b4]">
                        {volume.subtext}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SupplementaryArchives;
