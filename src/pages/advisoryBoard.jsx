import React from 'react';
import Layout from './Layout';

const AdvisoryBoard = () => {
  const boardMembers = [
    {
      name: 'PROF. DR. ABRAR HUSSAIN GILANI',
      affiliation: '70 A, BB Vital Homes, Pak Arab Housing Society, Ferozepur Road, Lahore',
    },
    {
      name: 'PROF. DR. TALAT NASEER PASHA',
      affiliation: 'EME Society, Multan Road, Lahore',
    },
    {
      name: 'PROF. DR. DAVID J. MIDMORE,',
      affiliation: 'Central Queensland University · Centre for Plant and Water Science, Australia',
    },
    {
      name: 'PROF. DR. STEVEN C. LOERCH,',
      affiliation: 'The Ohio State University, USA',
    },
    {
      name: 'PROF. DR. HOWARD D. TYLER,',
      affiliation: 'Iowa State University, Ames, USA',
    },
    {
      name: 'PROF. DR. NASIM AHMAD,',
      affiliation: 'Ex. VC, UVAS, Lahore, Pakistan',
    },
    {
      name: 'CH. MUHAMMAD IBRAHIM',
      affiliation: 'House No. 150 Bolan block Chanar Bagh, Rai Wind Road, Lahore',
    },
    {
      name: 'DR. MASOOD AHMAD SHAKIR,',
      affiliation: 'House No. D-9, Jhang Road, Gulfishan Colony, Faisalabad Pakistan',
    },
    {
      name: 'PROF. DR. ZAHID ATA CHEEMA,',
      affiliation: 'House No 157 University Town. Millat Road. Faisalabad Pakistan',
    },
    {
      name: 'DR. ABUAL LAIS SALMAN SAEED,',
      affiliation: 'Meat & Dairy Testing Laboratory, PCSIR Labs Complex, Lahore-Pakistan',
    },
    {
      name: 'PROF. DR. MAKHDOOM ABDUL JABBAR,',
      affiliation: 'Riphah Veterinary College, Lahore, Pakistan',
    },
  ];

  return (
    <Layout>
      <div className="font-sans bg-[#f8f4ed] p-5 border border-[#e0d9ce] relative">
        <h2 className="text-[#4682b4] text-2xl mb-2.5">
          ADVISORY BOARD
        </h2>
        <div className="border-b-2 border-orange-500 w-full mx-auto mb-5"></div>

        {/* Watermark-like element from the original image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none">
          {/* Placeholder for the watermark */}
        </div>

        {boardMembers.map((member, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-[#4682b4] text-md m-0 font-bold">
              {member.name}
            </h3>
            <p className="text-black text-sm m-0 pl-2.5">
              {member.affiliation}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default AdvisoryBoard;
