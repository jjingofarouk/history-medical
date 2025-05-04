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
import './App.css';

const sections = [
  {
    key: 'personalInfo',
    label: 'Patient Demographics',
    icon: <User size={28} />,
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80',
  },
  {
    key: 'chiefComplaint',
    label: 'Presenting Complaint',
    icon: <AlertTriangle size={28} />,
    image: 'https://images.unsplash.com/photo-1588776814546-ec7b1e3941f9?auto=format&fit=crop&w=800&q=80',
  },
  {
    key: 'historyOfPresentIllness',
    label: 'History of Present Illness',
    icon: <FileText size={28} />,
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80',
  },
  {
    key: 'pastMedicalHistory',
    label: 'Past Medical History',
    icon: <Building2 size={28} />,
    image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b4?auto=format&fit=crop&w=800&q=80',
  },
  {
    key: 'familyHistory',
    label: 'Family History',
    icon: <Users size={28} />,
    image: 'https://images.unsplash.com/photo-1549921296-3a4bfe321943?auto=format&fit=crop&w=800&q=80',
  },
  {
    key: 'socialHistory',
    label: 'Social History',
    icon: <Globe size={28} />,
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80',
  },
  {
    key: 'reviewOfSystems',
    label: 'Review of Systems',
    icon: <Stethoscope size={28} />,
    image: 'https://images.unsplash.com/photo-1588776814634-0ef4b5f9823e?auto=format&fit=crop&w=800&q=80',
  },
  {
    key: 'examinationFindings',
    label: 'Examination Findings',
    icon: <Search size={28} />,
    image: 'https://images.unsplash.com/photo-1579154203451-c40b9e5c9c91?auto=format&fit=crop&w=800&q=80',
  },
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
    examinationFindings: {},
  });

  const handleInputChange = (section, field, value) => {
    setPatientData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
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
          {sections.map((section, index) => (
            <div
              key={section.key}
              className="section-card"
              onClick={() => setSelectedSection(section.key)}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${section.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                '--order': index + 1,
              }}
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