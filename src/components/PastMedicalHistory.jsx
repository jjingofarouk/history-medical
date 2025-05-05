import React, { useState } from 'react';
import './PastMedicalHistory.css';

const ButtonSelect = ({ 
  options, 
  selectedValues = [], 
  onSelect, 
  multiple = true,
  label 
}) => {
  const handleButtonClick = (option) => {
    if (multiple) {
      const newValues = selectedValues.includes(option)
        ? selectedValues.filter(item => item !== option)
        : [...selectedValues, option];
      onSelect(newValues);
    } else {
      onSelect(option);
    }
  };

  return (
    <div className="button-select-container">
      {label && <label className="input-label">{label}</label>}
      <div className="button-select-options">
        {options.map((option, index) => (
          <button
            key={index}
            type="button"
            className={`select-button ${selectedValues.includes(option) ? 'selected' : ''}`}
            onClick={() => handleButtonClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const PastMedicalHistory = ({ pastMedicalHistory, handleInputChange, handleArrayInputChange }) => {
  // Define all options directly in component
  const chronicConditionsOptions = [
    'Hypertension', 'Diabetes', 'Asthma', 'HIV/AIDS', 'Epilepsy',
    'Heart Disease', 'Kidney Disease', 'Liver Disease', 'Cancer', 'Arthritis'
  ];

  const specificIllnessesOptions = [
    'Malaria', 'Typhoid', 'Tuberculosis', 'Pneumonia', 'Hepatitis',
    'Dengue', 'Cholera', 'Bilharzia', 'COVID-19'
  ];

  const medicationOptions = [
    'ARVs', 'Insulin', 'Antihypertensives', 'Antimalarials', 'Antibiotics',
    'Painkillers', 'Antidepressants', 'Anticoagulants'
  ];

  const vaccinationOptions = [
    'BCG', 'Polio', 'DPT-HepB-Hib', 'Pneumococcal', 'Rotavirus',
    'Measles', 'Yellow Fever', 'COVID-19', 'HPV'
  ];

  return (
    <div className="past-medical-history">
      <h2 className="section-title">Past Medical History</h2>

      {/* Chronic Conditions */}
      <ButtonSelect
        options={chronicConditionsOptions}
        selectedValues={pastMedicalHistory.conditions || []}
        onSelect={(values) => handleArrayInputChange('pastMedicalHistory', 'conditions', values)}
        label="Chronic Conditions"
      />

      {/* Previous Hospitalizations */}
      <div className="input-group">
        <label className="input-label">Hospitalizations (Dates & Reasons)</label>
        <textarea
          className="text-input"
          placeholder="e.g., Jan 2020 - Malaria treatment"
          value={pastMedicalHistory.hospitalizations || ''}
          onChange={(e) => handleInputChange('pastMedicalHistory', 'hospitalizations', e.target.value)}
        />
      </div>

      {/* Surgeries */}
      <div className="input-group">
        <label className="input-label">Surgeries (Dates & Procedures)</label>
        <textarea
          className="text-input"
          placeholder="e.g., March 2018 - Appendectomy"
          value={pastMedicalHistory.surgeries || ''}
          onChange={(e) => handleInputChange('pastMedicalHistory', 'surgeries', e.target.value)}
        />
      </div>

      {/* Allergies */}
      <div className="input-group">
        <label className="input-label">Allergies (Substances & Reactions)</label>
        <textarea
          className="text-input"
          placeholder="e.g., Penicillin - Rash; Peanuts - Anaphylaxis"
          value={pastMedicalHistory.allergies || ''}
          onChange={(e) => handleInputChange('pastMedicalHistory', 'allergies', e.target.value)}
        />
      </div>

      {/* Medications */}
      <ButtonSelect
        options={medicationOptions}
        selectedValues={pastMedicalHistory.medications || []}
        onSelect={(values) => handleArrayInputChange('pastMedicalHistory', 'medications', values)}
        label="Current Medications"
      />

      {/* Specific Illnesses */}
      <ButtonSelect
        options={specificIllnessesOptions}
        selectedValues={pastMedicalHistory.specificIllnesses || []}
        onSelect={(values) => handleArrayInputChange('pastMedicalHistory', 'specificIllnesses', values)}
        label="Previous Specific Illnesses"
      />

      {/* Vaccinations */}
      <ButtonSelect
        options={vaccinationOptions}
        selectedValues={pastMedicalHistory.vaccinations || []}
        onSelect={(values) => handleArrayInputChange('pastMedicalHistory', 'vaccinations', values)}
        label="Vaccination History"
      />

      {/* Other Notes */}
      <div className="input-group">
        <label className="input-label">Additional Medical Notes</label>
        <textarea
          className="text-input"
          placeholder="Any other relevant medical history"
          value={pastMedicalHistory.otherNotes || ''}
          onChange={(e) => handleInputChange('pastMedicalHistory', 'otherNotes', e.target.value)}
        />
      </div>
    </div>
  );
};

export default PastMedicalHistory;