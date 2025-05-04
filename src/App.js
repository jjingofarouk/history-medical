import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
import demographicsImage from './demographics.jpeg';
import complaintImage from './complaint.jpeg';
import historyImage from './history.jpeg';
import medicalImage from './medical.jpeg';
import familyImage from './family.jpeg';
import socialImage from './social.jpeg';
import systemsImage from './systems.jpeg';
import examImage from './exam.jpeg';
import './App.css';

const sections = [
  {
    key: 'personalInfo',
    label: 'Patient Demographics',
    icon: <User size={28} />,
    image: demographicsImage,
  },
  {
    key: 'chiefComplaint',
    label: 'Presenting Complaint',
    icon: <AlertTriangle size={28} />,
    image: complaintImage,
  },
  {
    key: 'historyOfPresentIllness',
    label: 'History of Present Illness',
    icon: <FileText size={28} />,
    image: historyImage,
  },
  {
    key: 'pastMedicalHistory',
    label: 'Past Medical History',
    icon: <Building2 size={28} />,
    image: medicalImage,
  },
  {
    key: 'familyHistory',
    label: 'Family History',
    icon: <Users size={28} />,
    image: familyImage,
  },
  {
    key: 'socialHistory',
    label: 'Social History',
    icon: <Globe size={28} />,
    image: socialImage,
  },
  {
    key: 'reviewOfSystems',
    label: 'Review of Systems',
    icon: <Stethoscope size={28} />,
    image: systemsImage,
  },
  {
    key: 'examinationFindings',
    label: 'Examination Findings',
    icon: <Search size={28} />,
    image: examImage,
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
      <Navbar />
      <h1 className="app-header">Welcome to MedForm</h1>
      <p className="app-description">
        Our medical form app allows you to seamlessly track patient data for clinical assessments. Fill out each section for a comprehensive profile.
      </p>

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
                '--order': index + 1,
              }}
            >
              {section.icon}
              <span>{section.label}</span>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}