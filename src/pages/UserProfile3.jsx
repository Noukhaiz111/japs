import React, { useState } from 'react';
import Header from '../layout/Header';
import {
  FaUserEdit, FaBook, FaPlusCircle,
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DisciplineInterest = () => {
  // Discipline → Sub-discipline mapping
  const disciplineOptions = {
    Biotechnology: ["Animal Biotechnology", "Plant Biotechnology", "Medical Biotechnology"],
    "Computer Science": ["Artificial Intelligence", "Cyber Security", "Data Science"],
    Physics: ["Quantum Mechanics", "Astrophysics", "Thermodynamics"],
    Chemistry: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"],
  };

  const [currentSelection, setCurrentSelection] = useState({
    discipline: '',
    subDiscipline: '',
  });

  const [savedDisciplines, setSavedDisciplines] = useState([
    { id: 1, discipline: 'Biotechnology', subDiscipline: 'Animal Biotechnology' },
    { id: 2, discipline: 'Computer Science', subDiscipline: 'Artificial Intelligence' },
    { id: 3, discipline: 'Physics', subDiscipline: 'Quantum Mechanics' },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "discipline") {
      setCurrentSelection({ discipline: value, subDiscipline: "" });
    } else {
      setCurrentSelection(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    if (currentSelection.discipline && currentSelection.subDiscipline) {
      setSavedDisciplines([
        ...savedDisciplines,
        { id: Date.now(), ...currentSelection }
      ]);
      setCurrentSelection({ discipline: '', subDiscipline: '' });
    } else {
      alert('Please select both Discipline and Sub-Discipline.');
    }
  };

  return (
    <>
      <Header />
      <div className="font-sans bg-gray-100 p-8">
        {/* Breadcrumb */}
        <div className="text-gray-500 text-sm mb-4">Profile / Profile Wizard</div>

        {/* Title */}
        <h1 className="flex items-center text-2xl text-gray-700 mb-6">
          <FaUserEdit className="mr-3" /> Update Profile
        </h1>

        {/* Step Indicator */}
        <div className="flex gap-2 mb-8">
          <div className="px-4 py-2 rounded text-white bg-green-500">Step 1</div>
          <div className="px-4 py-2 rounded text-white bg-green-500">Step 2</div>
          <div className="px-4 py-2 rounded text-white bg-orange-500">Step 3</div>
        </div>

        {/* Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="flex items-center text-lg font-semibold text-gray-800 mb-6">
            <FaBook className="mr-3" /> Discipline of Interest
          </h2>

          {/* Form */}
          <div className="flex flex-col gap-6">
            {/* Discipline Dropdown */}
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="mb-2 text-gray-600 text-sm">Discipline</label>
              <div className="relative">
                <FaPlusCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  name="discipline"
                  value={currentSelection.discipline}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-10 py-2 focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">---Select---</option>
                  {Object.keys(disciplineOptions).map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sub-Discipline Dropdown */}
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="mb-2 text-gray-600 text-sm">Sub-Discipline</label>
              <div className="relative">
                <FaPlusCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  name="subDiscipline"
                  value={currentSelection.subDiscipline}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-10 py-2 focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100"
                  disabled={!currentSelection.discipline}
                >
                  <option value="">---Select---</option>
                  {currentSelection.discipline &&
                    disciplineOptions[currentSelection.discipline].map(sub => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                </select>
              </div>
            </div>

            {/* Save Button */}
            <button
              type="button"
              onClick={handleSave}
              className="self-start mt-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded transition"
            >
              Save
            </button>
          </div>

          {/* Saved Table */}
          <div className="mt-8">
            <div className="flex bg-purple-600 text-white font-semibold p-3 rounded-t">
              <div className="flex-1">Discipline</div>
              <div className="flex-1">Sub Discipline</div>
            </div>
            {savedDisciplines.map(item => (
              <div
                key={item.id}
                className="flex bg-gray-50 p-3 border-b border-gray-200"
              >
                <div className="flex-1">{item.discipline}</div>
                <div className="flex-1">{item.subDiscipline}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-4 border-t border-gray-200 text-gray-500 text-sm">
          <div>Powered by HISOFT © 2020 - 2025</div>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <span>Follow us</span>
            <div className="flex gap-3 text-lg">
              <FaFacebookF /> <FaInstagram /> <FaTwitter /> <FaYoutube />
            </div>
          <Link to={"/user-profile2"}>  <button className="px-5 py-2 rounded border bg-gray-100 hover:bg-gray-200">
              Previous
            </button></Link>
           <Link to={"/profile-finish"}> <button className="px-5 py-2 rounded bg-green-500 hover:bg-green-600 text-white">
              Finish
            </button>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DisciplineInterest;