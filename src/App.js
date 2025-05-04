

import React, { useState } from 'react';
import {
  User, AlertTriangle, FileText, Building2,
  Users, Globe, Stethoscope, Search, ArrowLeft
} from 'lucide-react';
import PersonalInfo from './components/PersonalInfo';
import ChiefComplaint from './components/ChiefComplaint';
import HistoryOfPresentIllness from './components/HistoryOfPresentIllness';
import PastMedicalHistory from './components/PastMedicalHistory';
import FamilyHistory from './components/FamilyHistory';
import SocialHistory from './components/SocialHistory';
import ReviewOfSystems from './components/ReviewOfSystems';
import ExaminationFindings from './components/ExaminationFindings';
import "./App.css"

const sections = [
  { key: 'personalInfo', label: 'Patient Demographics', icon: <User size={28} /> },
  { key: 'chiefComplaint', label: 'Presenting Complaint', icon: <AlertTriangle size={28} /> },
  { key: 'historyOfPresentIllness', label: 'History of Present Illness', icon: <FileText size={28} /> },
  { key: 'pastMedicalHistory', label: 'Past Medical History', icon: <Building2 size={28} /> },
  { key: 'familyHistory', label: 'Family History', icon: <Users size={28} /> },
  { key: 'socialHistory', label: 'Social History', icon: <Globe size={28} /> },
  { key: 'reviewOfSystems', label: 'Review of Systems', icon: <Stethoscope size={28} /> },
  { key: 'examinationFindings', label: 'Examination Findings', icon: <Search size={28} /> }
];

export default function App() {
  const [selectedSection, setSelectedSection] = useState(null);

  const [patientData, setPatientData] = useState({
    personalInfo: {},
    chiefComplaint: '',
    historyOfPresentIllness: '',
    pastMedicalHistory: {},
    familyHistory: '',
    socialHistory: {},
    reviewOfSystems: {},
    examinationFindings: {}
  });

  const handleInputChange = (section, field, value) => {
    setPatientData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const renderFormSection = () => {
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
        return <ReviewOfSystems reviewOfSystems={patientData.reviewOfSystems} handleInputChange={handleInputChange} />;
      case 'examinationFindings':
        return <ExaminationFindings examinationFindings={patientData.examinationFindings} handleInputChange={handleInputChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-header">Medical Form</h1>

      {selectedSection ? (
        <>
          <button
            onClick={() => setSelectedSection(null)}
            className="submit-button"
            style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}
          >
            <ArrowLeft size={20} style={{ marginRight: 8 }} />
            Back to Sections
          </button>
          {renderFormSection()}
        </>
      ) : (
        <div className="card-grid">
          {sections.map(section => (
            <div
              key={section.key}
              className="section-card"
              onClick={() => setSelectedSection(section.key)}
            >
              {section.icon}
              <span>{section.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}