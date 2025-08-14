import React from 'react';
import Layout from './Layout';

const ManagingBoard = () => {
  const boardMembers = [
    {
      name: 'DR. MUHAMMAD AFTAB KHAN',
      affiliation: 'Bahria Town, Rawalpindi',
    },
    {
      name: 'PROF. DR. ANWAR-UL-HASSAN GILANI',
      affiliation: 'Fellow, Pakistan Academy of Sciences, Constitution Avenue, G-5, Islamabad',
    },
    {
      name: 'DR. MUHAMMAD FAROOQ',
      affiliation: 'Sultan Qaboos University, Muscat, Oman',
    },
    {
      name: 'PROF. DR. ABDUL WAKEEL',
      affiliation: 'Chairman PAS Forum (X-Officio Member)\nUniversity of Agriculture, Faisalabad',
    },
    {
      name: 'DR. ABDUL GHAFFAR',
      affiliation: 'House 434, street 67, G-11/2 Islamabad',
    },
  ];

  return (
    <Layout>
      <div className="font-sans bg-[#f8f4ed] p-5 border border-[#e0d9ce] relative">
        <h2 className="text-[#4682b4] text-2xl mb-2.5">
          MANAGING BOARD
        </h2>
        <div className="border-b-2 border-orange-500 w-full mx-auto mb-5"></div>

        {/* Watermark-like element from the original image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none">
          {/* Placeholder for the watermark */}
        </div>

        {boardMembers.map((member, index) => (
          <div key={index} className="mb-5">
            <h3 className="text-[#4682b4] text-md font-bold">
              {member.name}
            </h3>
            {member.affiliation.split('\n').map((line, lineIndex) => (
              <p key={lineIndex} className="text-black text-sm pl-2.5">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ManagingBoard;
