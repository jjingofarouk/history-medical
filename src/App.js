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

import Sidebar from './components/Sidebar';
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

  const [selectedSection, setSelectedSection] = useState('');

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
      case 'personalInfo':
        return <PersonalInfo personalInfo={patientData.personalInfo} handleInputChange={handleInputChange} />;
      case 'chiefComplaint':
        return <ChiefComplaint chiefComplaint={patientData.chiefComplaint} handleInputChange={handleInputChange} />;
      case 'historyOfPresentIllness':
        return <HistoryOfPresentIllness historyOfPresentIllness={patientData.historyOfPresentIllness} handleInputChange={handleInputChange} />;
      case 'pastMedicalHistory':
        return <PastMedicalHistory pastMedicalHistory={patientData.pastMedicalHistory} handleInputChange={handleInputChange} />;
      case 'familyHistory':
        return <FamilyHistory familyHistory={patientData.familyHistory} handleInputChange={handleInputChange} />;
      case 'socialHistory':
        return <SocialHistory socialHistory={patientData.socialHistory} handleInputChange={handleInputChange} />;
      case 'reviewOfSystems':
        return <ReviewOfSystems patientData={patientData} handleInputChange={handleInputChange} />;
      case 'examinationFindings':
        return <ExaminationFindings />;
      default:
        return <p className="default-text">Please select a section to fill out.</p>;
    }
  };

  return (
    <div className="app-container" style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
      <Sidebar selectedSection={selectedSection} onSelect={setSelectedSection} />

      <div className="main-content" style={{ flex: 1, paddingLeft: '24px' }}>
        <h1 className="app-header">Record Patient History</h1>
        <div className="section-container">
          {renderSection()}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => console.log(patientData)}
            className="submit-button"
          >
            Submit Patient History
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;