import React from "react";
import Layout from "./Layout";

const AdvisoryBoard = () => {
  const boardMembers = [
    {
      name: "PROF. DR. ABRAR HUSSAIN GILANI",
      affiliation:
        "70 A, BB Vital Homes, Pak Arab Housing Society, Ferozepur Road, Lahore",
    },
    {
      name: "PROF. DR. TALAT NASEER PASHA",
      affiliation: "EME Society, Multan Road, Lahore",
    },
    {
      name: "PROF. DR. DAVID J. MIDMORE,",
      affiliation:
        "Central Queensland University · Centre for Plant and Water Science, Australia",
    },
    {
      name: "PROF. DR. STEVEN C. LOERCH,",
      affiliation: "The Ohio State University, USA",
    },
    {
      name: "PROF. DR. HOWARD D. TYLER,",
      affiliation: "Iowa State University, Ames, USA",
    },
    {
      name: "PROF. DR. NASIM AHMAD,",
      affiliation: "Ex. VC, UVAS, Lahore, Pakistan",
    },
    {
      name: "CH. MUHAMMAD IBRAHIM",
      affiliation:
        "House No. 150 Bolan block Chanar Bagh, Rai Wind Road, Lahore",
    },
    {
      name: "DR. MASOOD AHMAD SHAKIR,",
      affiliation:
        "House No. D-9, Jhang Road, Gulfishan Colony, Faisalabad Pakistan",
    },
    {
      name: "PROF. DR. ZAHID ATA CHEEMA,",
      affiliation:
        "House No 157 University Town. Millat Road. Faisalabad Pakistan",
    },
    {
      name: "DR. ABUAL LAIS SALMAN SAEED,",
      affiliation:
        "Meat & Dairy Testing Laboratory, PCSIR Labs Complex, Lahore-Pakistan",
    },
    {
      name: "PROF. DR. MAKHDOOM ABDUL JABBAR,",
      affiliation: "Riphah Veterinary College, Lahore, Pakistan",
    },
  ];

  return (
    <Layout>
      <div className="bg-[#fdfaf1] p-6 border border-gray-400 rounded-lg shadow-lg relative max-w-4xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6">
          ADVISORY BOARD
        </h2>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none"></div>

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
