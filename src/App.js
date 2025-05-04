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
} from 'lucide-react'; // Import Lucide icons
import PersonalInfo from './components/PersonalInfo';
import ChiefComplaint from './components/ChiefComplaint';
import HistoryOfPresentIllness from './components/HistoryOfPresentIllness';
import PastMedicalHistory from './components/PastMedicalHistory';
import FamilyHistory from './components/FamilyHistory';
import SocialHistory from './components/SocialHistory';
import ReviewOfSystems from './components/ReviewOfSystems';
import ExaminationFindings from './components/ExaminationFindings';
import './App.css';

const App = () => {
  const [patientData, setPatientData] = useState({
    personalInfo: {},
    chiefComplaint: '',
    historyOfPresentIllness: '',
    pastMedicalHistory: {},
    familyHistory: '',
    socialHistory: {},
  });

  const [selectedSection, setSelectedSection] = useState('personalInfo');

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

  const sections = [
    { id: 'personalInfo', label: 'Demographics', icon: User },
    { id: 'chiefComplaint', label: 'Complaint', icon: AlertTriangle },
    { id: 'historyOfPresentIllness', label: 'History', icon: FileText },
    { id: 'pastMedicalHistory', label: 'Past Medical', icon: Building2 },
    { id: 'familyHistory', label: 'Family', icon: Users },
    { id: 'socialHistory', label: 'Social', icon: Globe },
    { id: 'reviewOfSystems', label: 'Systems', icon: Stethoscope },
    { id: 'examinationFindings', label: 'Findings', icon: Search },
  ];

  return (
    <div className="app-container">
      <h1 className="app-header">Record Patient History</h1>

      <div className="section-container">
        {renderSection()}
      </div>

      <nav className="bottom-tab-nav">
        {sections.map((section) => {
          const Icon = section.icon; // Extract the icon component
          return (
            <button
              key={section.id}
              className={`tab-button ${selectedSection === section.id ? 'tab-button-active' : ''}`}
              onClick={() => setSelectedSection(section.id)}
              aria-label={`Select ${section.label} section`}
            >
              <Icon className="tab-icon" size={20} />
              <span className="tab-label">{section.label}</span>
            </button>
          );
        })}
      </nav>

      <button
        onClick={() => console.log(patientData)}
        className="submit-button"
      >
        Submit Patient History
      </button>
    </div>
  );
};

export default App;