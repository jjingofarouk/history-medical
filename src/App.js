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

// Define section data with image URLs
const sections = [
  {
    key: 'personalInfo',
    label: 'Patient Demographics',
    icon: <User size={28} />,
    image: '/demographics.jpeg', // Local image (must be in public/)
    fallbackImage: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800',
  },
  {
    key: 'chiefComplaint',
    label: 'Presenting Complaint',
    icon: <AlertTriangle size={28} />,
    image: '/complaint.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1576091160550-2173fdabe9f1?auto=format&fit=crop&w=800',
  },
  {
    key: 'historyOfPresentIllness',
    label: 'History of Present Illness',
    icon: <FileText size={28} />,
    image: '/history.jpeg', // Placeholder; replace with actual image
    fallbackImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5ebd8?auto=format&fit=crop&w=800',
  },
  {
    key: 'pastMedicalHistory',
    label: 'Past Medical History',
    icon: <Building2 size={28} />,
    image: '/medical.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800',
  },
  {
    key: 'familyHistory',
    label: 'Family History',
    icon: <Users size={28} />,
    image: '/family.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=800',
  },
  {
    key: 'socialHistory',
    label: 'Social History',
    icon: <Globe size={28} />,
    image: '/social.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1445527812168-57f788836937?auto=format&fit=crop&w=800',
  },
  {
    key: 'reviewOfSystems',
    label: 'Review of Systems',
    icon: <Stethoscope size={28} />,
    image: '/systems.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800',
  },
  {
    key: 'examinationFindings',
    label: 'Examination Findings',
    icon: <Search size={28} />,
    image: '/exam.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1579165466949-318953a3d7fa?auto=format&fit=crop&w=800',
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
                '--card-image': `url(${section.image})`,
                '--card-fallback-image': `url(${section.fallbackImage})`,
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