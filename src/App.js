
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SectionPage from './SectionPage';
import './App.css';

export default function App() {
  const [patientData, setPatientData] = useState({
    personalInfo: {
      prefix: '',
      name: '',
      dateOfBirth: '',
      gender: '',
      occupation: '',
      maritalStatus: '',
      nok: '',
      kinRelationship: '',
      nationality: '',
      tribe: '',
      religion: '',
      address: '',
      phone: '',
      nin: '',
      email: '',
    },
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
      [section]:
        typeof prev[section] === 'object'
          ? { ...prev[section], [field]: value }
          : value,
    }));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/section/:sectionKey"
          element={
            <SectionPage
              patientData={patientData}
              handleInputChange={handleInputChange}
            />
          }
        />
      </Routes>
    </Router>
  );
}

