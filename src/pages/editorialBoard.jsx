import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

const editorialData = {
  chiefEditor: {
    name: "Prof. Dr. Khalid Javed",
    title: "Chief Editor",
  },
  subjectEditors: [
    {
      title: "Crop Production",
      name: "Prof. Dr. Mubashir Hussain",
      affiliation: "Tabauddin Zakariya University, Multan, Pakistan",
    },
    {
      title: "Plant Protection/Entomology",
      name: "Prof. Dr. Shoaib Fareed",
      affiliation: "Tabauddin Zakariya University, Multan, Pakistan",
    },
    {
      title: "Environmental Sciences & Climate Change",
      name: "Dr. Saeed Ahmad Asad",
      affiliation:
        "Center for Climate Research and Development (CCRD), COMSAT University Islamabad",
    },
    {
      title: "Agronomy",
      name: "Dr. Mukhtar Ahmad",
      affiliation: "PMAS University of Arid Agriculture, Rawalpindi Pakistan",
    },
    {
      title: "Soil Science",
      name: "Dr. Muhammad Sanaullah",
      affiliation:
        "Institute of Soil and Environmental Sciences, University of Agriculture Faisalabad",
    },
    {
      title: "Plant Breeding & Biotechnology",
      name: "Dr. Khurram Bashir",
      affiliation:
        "Syed Babar Ali School of Science and Technology, LUMS, Lahore",
    },
    {
      title: "Animal Sciences",
      name: "Prof. Dr. Tanveer Ahmad",
      affiliation: "PMAS University of Arid Agriculture, Rawalpindi",
    },
    {
      title: "Veterinary Sciences",
      name: "Prof. Dr. Muhammad Ijaz",
      affiliation: "University of Veterinary and Animal Sciences, Lahore",
    },
    {
      title: "Food Sciences",
      name: "Prof. Dr. Shahnawaz Waseem Ali",
      affiliation: "FAS, The Punjab University Lahore, Pakistan",
    },
  ],
  editorialBoardMembers: [
    {
      name: "Dr. A. S. Chaudhry,",
      affiliation:
        "School of Agri., Food & Rural Development, University of Newcastle Upon Tyne, UK",
    },
    {
      name: "Dr. Pamela C. Rasmussen,",
      affiliation:
        "Michigan State University West Circle Drive, East lancing MI 48824-1045",
    },
    {
      name: "Prof. Dr. Mirza Karpas Balg,",
      affiliation: "Saad Cloud University, Riyadh KSA",
    },
    {
      name: "Prof. Dr. Fairol Zaman Huyop",
      affiliation: "Universiti Teknologi Malaysia",
    },
    {
      name: "Dr. Harpinder Singh Randhawa",
      affiliation: "Lethbridge Research & Development Center, Canada",
    },
    {
      name: "Prof. Dr. M. Ihsan Soysal,",
      affiliation: "Namik Kamal University Tikerdag, Turkey",
    },
    {
      name: "Dr. Hafiz Zahid Mahmood",
      affiliation: "COMSATS University Islamabad, Lahore Campus-Lahore",
    },
    {
      name: "Prof. Dr. Weijun Guan,",
      affiliation:
        "Institute of Animal Sciences, Chinese Academy of Agricultural Sciences, Beijing 100192, China",
    },
    {
      name: "Prof. Dr. Phil Harris,",
      affiliation:
        "Deptt. of Plant Sciences, School of Science & The Environment, Coventry University, UK",
    },
    {
      name: "Dr. Ali Olfati",
      affiliation:
        "Department of Animal Science, Faculty of Agriculture, Tabriz, IRAN",
    },
    {
      name: "Prof. Dr. Zeliha Islamoglu",
      affiliation:
        "Faculty of Medicine Balikesir University Halidemir University Campus 512, Turkey\nShoh Akhmet Yassawi International Kazakh-Turkish University, Faculty of Sciences, Department of Biology, Central Campus, Turkes tan, Kazakhstan",
    },
    {
      name: "Prof. Dr. Tessema (Tess) Aslatkie,",
      affiliation:
        "Agriculture House, of Agriculture, Dalhousie University, Truro, NS, B2N 5E3, Canada",
    },
    {
      name: "Prof. Dr. Shafqatla Naz,",
      affiliation: "Lahore College for Women University, Lahore Pakistan",
    },
    {
      name: "Prof. Dr. Yang Li,",
      affiliation: "Shihezi University Xinjiang, China",
    },
    {
      name: "Prof. Dr. Tugay Ayasan,",
      affiliation:
        "Osmaniye Korkut Ata University, Kadirli Academy of Applied Sciences, Osmaniye, Turkey",
    },
    {
      name: "Prof. Dr. Sun Ming Zhong,",
      affiliation: "Dalian Medical University Dalian, China",
    },
    {
      name: "Dr. Ghulam Sarwar",
      affiliation: "PMAS Uni. Arid Agri., Rawalpindi, Pakistan",
    },
    {
      name: "Prof. Dr. Ataur Rab,",
      affiliation: "The University of Agriculture Peshawar KPK, Pakistan",
    },
    {
      name: "Dr. Effa, Emmanuel Bassey",
      affiliation:
        "Department of Crop Science, University of Calabar, P.M.B. 1115 Calabar, Nigeria",
    },
    {
      name: "Prof. Dr. Muhammad Sohail Sajid",
      affiliation: "University of Agri., Faisalabad",
    },
    {
      name: "Prof. Dr. Mushtaq Ahmad",
      affiliation: "Quaid-I-Azam University, Islamabad, Pakistan",
    },
    {
      name: "Dr. Sardar Alam Cheema",
      affiliation:
        "Department of Agronomy, University of Agriculture Faisalabad, Pakistan",
    },
    {
      name: "Prof. Dr. Umer Farooq",
      affiliation:
        "Deptt. of Physiology, Islamia University Bahawalpur, Pakistan",
    },
    {
      name: "Prof. Dr. Zia-ul-hassan Shah",
      affiliation: "Sindh Agri University, Tando Jam, Sindh-Pakistan",
    },
    {
      name: "Tariq Aziz,",
      affiliation: "H. # 382-B Street 23 Rawal Town, Islamabad.",
    },
  ],
};

const EditorialBoard = () => {
  const renderMembers = (members) => {
    const pairs = [];
    for (let i = 0; i < members.length; i += 2) {
      pairs.push(members.slice(i, i + 2));
    }

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {pairs.map((pair, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row justify-between mb-2"
            variants={itemVariants}
          >
            {pair.map((member, subIndex) => (
              <motion.div
                key={subIndex}
                className="p-2 border border-gray-300 w-full md:w-[48%] mb-2 md:mb-0"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {member.title && (
                  <p className="text-blue-800 font-bold text-sm mb-1">
                    {member.title}
                  </p>
                )}
                <p className="font-bold text-xs">{member.name}</p>
                {member.affiliation.split("\n").map((line, lineIndex) => (
                  <p key={lineIndex} className="text-xs">
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
            {pair.length < 2 && (
              <div className="hidden md:block p-2 w-[48%]"></div>
            )}
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <Layout>
      <div className="bg-[#fdfaf1] p-6 border border-gray-400 rounded-lg shadow-lg relative max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className=" text-center p-4 mb-4">
            <h1 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 pb-2 mb-6">
              EDITORIAL BOARD
            </h1>
            <p className="text-base mt-1">{editorialData.chiefEditor.title}</p>
            <p className="text-xl font-bold mt-1">
              {editorialData.chiefEditor.name}
            </p>
          </div>

          <div className="mb-4">
            <h2 className="bg-blue-800 text-white text-center font-bold p-2 text-base mb-2">
              SUBJECT EDITORS
            </h2>
            {renderMembers(editorialData.subjectEditors)}
          </div>

          <div>
            <h2 className="bg-blue-800 text-white text-center font-bold p-2 text-base mb-2">
              EDITORIAL BOARD MEMBERS
            </h2>
            {renderMembers(editorialData.editorialBoardMembers)}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default EditorialBoard;
