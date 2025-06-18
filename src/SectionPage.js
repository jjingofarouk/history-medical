
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ArrowLeft } from 'lucide-react';
import './SectionPage.css';

import PersonalInfo from './components/demos/PersonalInfo'; // Updated path
import ChiefComplaint from './components/ChiefComplaint';
import HistoryOfPresentIllness from './components/HistoryOfPresentIllness';
import PastMedicalHistory from './components/PastMedicalHistory';
import FamilyHistory from './components/FamilyHistory';
import SocialHistory from './components/SocialHistory';
import ReviewOfSystems from './components/ReviewOfSystems';
import ExaminationFindings from './components/ExaminationFindings';

export default function SectionPage({ patientData, handleInputChange }) {
  const { sectionKey } = useParams();
  const navigate = useNavigate();

  const sectionComponents = {
    personalInfo: (
      <PersonalInfo
        personalInfo={patientData.personalInfo}
        handleInputChange={handleInputChange}
      />
    ),
    chiefComplaint: (
      <ChiefComplaint
        chiefComplaint={patientData.chiefComplaint}
        handleInputChange={handleInputChange}
      />
    ),
    historyOfPresentIllness: (
      <HistoryOfPresentIllness
        historyOfPresentIllness={patientData.historyOfPresentIllness}
        handleInputChange={handleInputChange}
      />
    ),
    pastMedicalHistory: (
      <PastMedicalHistory
        pastMedicalHistory={patientData.pastMedicalHistory}
        handleInputChange={handleInputChange}
      />
    ),
    familyHistory: (
      <FamilyHistory
        familyHistory={patientData.familyHistory}
        handleInputChange={handleInputChange}
      />
    ),
    socialHistory: (
      <SocialHistory
        socialHistory={patientData.socialHistory}
        handleInputChange={handleInputChange}
      />
    ),
    reviewOfSystems: (
      <ReviewOfSystems
        reviewOfSystems={patientData.reviewOfSystems}
        handleInputChange={handleInputChange}
      />
    ),
    examinationFindings: (
      <ExaminationFindings
        examinationFindings={patientData.examinationFindings}
        handleInputChange={handleInputChange}
      />
    ),
  };

  return (
    <div className="app-container">
      <Navbar />
      <button
        onClick={() => navigate('/')}
        className="submit-button"
        style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}
      >
        <ArrowLeft size={20} style={{ marginRight: 8 }} />
        Back to Sections
      </button>
      {sectionComponents[sectionKey] || <p>Section not found</p>}

    </div>
  );
}