
import React, { useState } from 'react';
import { 
  User, 
  AlertTriangle, 
  FileText, 
  Building2, 
  Users, 
  Globe, 
  Stethoscope, 
  Search 
} from 'lucide-react';
import PersonalInfo from './components/PersonalInfo';
import ChiefComplaint from './components/ChiefComplaint';
import HistoryOfPresentIllness from './components/HistoryOfPresentIllness';
import PastMedicalHistory from './components/PastMedicalHistory';
import FamilyHistory from './components/FamilyHistory';
import SocialHistory from './components/SocialHistory';
import ReviewOfSystems from './components/ReviewOfSystems';
import ExaminationFindings from './components/ExaminationFindings';

const App = () => {
  const [patientData, setPatientData] = useState({
    personalInfo: {},
    chiefComplaint: '',
    historyOfPresentIllness: '',
    pastMedicalHistory: {},
    familyHistory: '',
    socialHistory: {},
  });

  const [selectedSection, setSelectedSection] = useState("");

  const handleInputChange = (section, field, value) => {
    setPatientData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const renderSection = () => {
    switch (selectedSection) {
      case "personalInfo":
        return <PersonalInfo personalInfo={patientData.personalInfo} handleInputChange={handleInputChange} />;
      case "chiefComplaint":
        return <ChiefComplaint chiefComplaint={patientData.chiefComplaint} handleInputChange={handleInputChange} />;
      case "historyOfPresentIllness":
        return <HistoryOfPresentIllness historyOfPresentIllness={patientData.historyOfPresentIllness} handleInputChange={handleInputChange} />;
      case "pastMedicalHistory":
        return <PastMedicalHistory pastMedicalHistory={patientData.pastMedicalHistory} handleInputChange={handleInputChange} />;
      case "familyHistory":
        return <FamilyHistory familyHistory={patientData.familyHistory} handleInputChange={handleInputChange} />;
      case "socialHistory":
        return <SocialHistory socialHistory={patientData.socialHistory} handleInputChange={handleInputChange} />;
      case "reviewOfSystems":
        return <ReviewOfSystems patientData={patientData} handleInputChange={handleInputChange} />;
      case "examinationFindings":
        return <ExaminationFindings />;
      default:
        return <p className="text-gray-500 text-center p-4">Please select a section to fill out.</p>;
    }
  };

  const handleSectionSelect = (e) => {
    setSelectedSection(e.target.value);
  };

  const sectionOptions = [
    { value: "", label: "-- Select Section --", icon: null },
    { value: "personalInfo", label: "Patient Demographics", icon: User },
    { value: "chiefComplaint", label: "Presenting Complaint", icon: AlertTriangle },
    { value: "historyOfPresentIllness", label: "History of Present Complaint", icon: FileText },
    { value: "pastMedicalHistory", label: "Past Medical History", icon: Building2 },
    { value: "familyHistory", label: "Family History", icon: Users },
    { value: "socialHistory", label: "Social History", icon: Globe },
    { value: "reviewOfSystems", label: "Review of Systems", icon: Stethoscope },
    { value: "examinationFindings", label: "Examination Findings", icon: Search }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Record Patient History</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="mb-4">
            <label htmlFor="section-select" className="block text-lg font-semibold mb-2 text-gray-700">
              Select Section
            </label>
            <div className="relative">
              <select
                id="section-select"
                value={selectedSection}
                onChange={handleSectionSelect}
                className="w-full p-3 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
              >
                {sectionOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="section-container min-h-64">
            {renderSection()}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => console.log(patientData)}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Submit Patient History
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;