import React, { useState } from 'react';
import { chronicConditionsOptions } from './ChronicConditions';
import { specificIllnessesOptions } from './SpecificIllnesses';
import { medicationOptions } from './MedicationOptions';
import { vaccinationOptions } from './VaccinationOptions';
import './PastMedicalHistory.css';

const ButtonSelect = ({ options, value, onChange, placeholder }) => {
  const [otherText, setOtherText] = useState('');

  const handleButtonClick = (option) => {
    const optionValue = typeof option === 'object' ? option.value : option;
    const optionLabel = typeof option === 'object' ? option.label : option;

    if (optionValue === 'Other') {
      if (!value.includes('Other')) {
        onChange([...value, 'Other']);
      }
    } else {
      if (value.includes(optionValue)) {
        onChange(value.filter((v) => v !== optionValue));
      } else {
        onChange([...value, optionValue]);
      }
    }
  };

  return (
    <div className="button-select">
      <div className="options-container">
        {options.map((option, index) => {
          const optionValue = typeof option === 'object' ? option.value : option;
          const optionLabel = typeof option === 'object' ? option.label : option;
          return (
            <button
              key={index}
              className={`option-button ${value.includes(optionValue) ? 'active' : ''}`}
              onClick={() => handleButtonClick(option)}
            >
              {optionLabel}
            </button>
          );
        })}
        <button
          className={`option-button ${value.includes('Other') ? 'active' : ''}`}
          onClick={() => handleButtonClick('Other')}
        >
          Other
        </button>
      </div>
      {value.includes('Other') && (
        <input
          className="other-input"
          placeholder={placeholder}
          value={otherText}
          onChange={(e) => {
            setOtherText(e.target.value);
            const updatedValue = value.filter((v) => !v.startsWith('Other'));
            if (e.target.value) {
              onChange([...updatedValue, `Other: ${e.target.value}`]);
            } else {
              onChange(updatedValue);
            }
          }}
        />
      )}
    </div>
  );
};

const PastMedicalHistory = ({ pastMedicalHistory, handleInputChange, handleArrayInputChange }) => {
  const [conditions, setConditions] = useState(pastMedicalHistory.conditions || []);
  const [medications, setMedications] = useState(pastMedicalHistory.medications || []);
  const [allergies, setAllergies] = useState(pastMedicalHistory.allergies || []);
  const [specificIllnesses, setSpecificIllnesses] = useState(pastMedicalHistory.specificIllnesses || []);
  const [surgeries, setSurgeries] = useState(pastMedicalHistory.surgeries || []);
  const [vaccinations, setVaccinations] = useState(pastMedicalHistory.vaccinations || []);
  const [hospitalizations, setHospitalizations] = useState(pastMedicalHistory.hospitalizations || []);
  const [otherNotes, setOtherNotes] = useState(pastMedicalHistory.otherNotes || []);

  const hospitalizationOptions = [
    'Pneumonia (Recent)',
    'Heart Attack (MI)',
    'Stroke',
    'Appendicitis',
    'Fracture Repair',
    'Infection Treatment',
    'Kidney Stones',
    'Gallbladder Removal',
  ];

  const allergyOptions = [
    'Penicillin',
    'Peanuts',
    'Shellfish',
    'Pollen',
    'Dust Mites',
    'Latex',
    'Aspirin',
    'Sulfa Drugs',
  ];

  const surgeryOptions = [
    'Appendectomy',
    'Cholecystectomy',
    'Hip Replacement',
    'Knee Replacement',
    'Tonsillectomy',
    'Heart Bypass',
    'Hernia Repair',
    'Cataract Surgery',
  ];

  return (
    <div className="past-medical-history-container">
      <h2 className="header">Past Medical History</h2>

      {/* Chronic Conditions */}
      <h3 className="section-header">Chronic Conditions</h3>
      <ButtonSelect
        options={chronicConditionsOptions}
        value={conditions}
        onChange={(value) => {
          setConditions(value);
          handleArrayInputChange('pastMedicalHistory', 'conditions', value);
        }}
        placeholder="Specify other conditions"
      />

      {/* Previous Hospitalizations */}
      <h3 className="section-header">Hospitalizations</h3>
      <ButtonSelect
        options={hospitalizationOptions}
        value={hospitalizations}
        onChange={(value) => {
          setHospitalizations(value);
          handleArrayInputChange('pastMedicalHistory', 'hospitalizations', value);
        }}
        placeholder="Specify other hospitalizations"
      />

      {/* Surgeries */}
      <h3 className="section-header">Surgeries</h3>
      <ButtonSelect
        options={surgeryOptions}
        value={surgeries}
        onChange={(value) => {
          setSurgeries(value);
          handleArrayInputChange('pastMedicalHistory', 'surgeries', value);
        }}
        placeholder="Specify other surgeries"
      />

      {/* Allergies */}
      <h3 className="section-header">Allergies</h3>
      <ButtonSelect
        options={allergyOptions}
        value={allergies}
        onChange={(value) => {
          setAllergies(value);
          handleArrayInputChange('pastMedicalHistory', 'allergies', value);
        }}
        placeholder="Specify other allergies"
      />

      {/* Medications */}
      <h3 className="section-header">Medications</h3>
      <ButtonSelect
        options={medicationOptions}
        value={medications}
        onChange={(value) => {
          setMedications(value);
          handleArrayInputChange('pastMedicalHistory', 'medications', value);
        }}
        placeholder="Specify other medications"
      />

      {/* Specific Illnesses */}
      <h3 className="section-header">Specific Illnesses</h3>
      <ButtonSelect
        options={specificIllnessesOptions}
        value={specificIllnesses}
        onChange={(value) => {
          setSpecificIllnesses(value);
          handleArrayInputChange('pastMedicalHistory', 'specificIllnesses', value);
        }}
        placeholder="Specify other illnesses"
      />

      {/* Vaccinations */}
      <h3 className="section-header">Vaccinations</h3>
      <ButtonSelect
        options={vaccinationOptions}
        value={vaccinations}
        onChange={(value) => {
          setVaccinations(value);
          handleArrayInputChange('pastMedicalHistory', 'vaccinations', value);
        }}
        placeholder="Specify other vaccinations"
      />

      {/* Other Notes */}
      <h3 className="section-header">Additional Notes</h3>
      <ButtonSelect
        options={[]}
        value={otherNotes}
        onChange={(value) => {
          setOtherNotes(value);
          handleArrayInputChange('pastMedicalHistory', 'otherNotes', value);
        }}
        placeholder="Specify additional information"
      />

      {/* Save Button */}
      <button
        className="save-button"
        onClick={() => alert('Past Medical History Saved')}
      >
        Save Information
      </button>
    </div>
  );
};

export default PastMedicalHistory;