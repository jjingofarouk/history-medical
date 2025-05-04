import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SectionPage from './SectionPage';

export default function App() {
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