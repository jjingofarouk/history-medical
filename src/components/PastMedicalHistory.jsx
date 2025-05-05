

import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import { chronicConditionsOptions } from './ChronicConditions';
import { specificIllnessesOptions } from './SpecificIllnesses';
import { medicationOptions } from './MedicationOptions';
import { vaccinationOptions } from './VaccinationOptions';
import './PastMedicalHistory.css';

const PastMedicalHistory = ({ pastMedicalHistory, handleInputChange, handleArrayInputChange }) => {
  const [selectedCondition, setSelectedCondition] = useState('');
  const [medications, setMedications] = useState(pastMedicalHistory.medications || []);
  const [allergies, setAllergies] = useState(pastMedicalHistory.allergies || []);
  const [specificIllnesses, setSpecificIllnesses] = useState(pastMedicalHistory.specificIllnesses || []);
  const [surgeries, setSurgeries] = useState(pastMedicalHistory.surgeries || []);
  const [vaccinations, setVaccinations] = useState(pastMedicalHistory.vaccinations || []);
  const [otherNotes, setOtherNotes] = useState(pastMedicalHistory.otherNotes || '');

  const handleConditionSelect = (condition) => {
    setSelectedCondition(condition);
    if (condition && !pastMedicalHistory.conditions?.includes(condition)) {
      handleArrayInputChange('pastMedicalHistory', 'conditions', [...(pastMedicalHistory.conditions || []), condition]);
    }
  };

  return (
    <div className="past-medical-history-container">
      <h2 className="header">Past Medical History</h2>

      {/* Chronic Conditions */}
      <h3 className="section-header">Chronic Conditions</h3>
      <CustomSelect
        selectedValue={selectedCondition}
        onSelect={handleConditionSelect}
        options={chronicConditionsOptions || []}
        placeholder="Select chronic conditions"
        multiple
      />

      {/* Previous Hospitalizations */}
      <h3 className="section-header">Hospitalizations</h3>
      <label className="label">Include dates and reasons for past hospitalizations:</label>
      <textarea
        className="text-input"
        placeholder="e.g., 2018 - Pneumonia treatment"
        value={pastMedicalHistory.hospitalizations || ''}
        onChange={(e) => handleInputChange('pastMedicalHistory', 'hospitalizations', e.target.value)}
      />

      {/* Surgeries */}
      <h3 className="section-header">Surgeries</h3>
      <label className="label">List previous surgeries with dates:</label>
      <textarea
        className="text-input"
        placeholder="e.g., 2020 - Appendectomy"
        value={surgeries.join(', ')}
        onChange={(e) => {
          const newSurgeries = e.target.value.split(',').map((surgery) => surgery.trim());
          setSurgeries(newSurgeries);
          handleArrayInputChange('pastMedicalHistory', 'surgeries', newSurgeries);
        }}
      />

      {/* Allergies */}
      <h3 className="section-header">Allergies</h3>
      <label className="label">List allergies (medications, food, environment):</label>
      <textarea
        className="text-input"
        placeholder="e.g., Penicillin - Rash, Peanuts - Anaphylaxis"
        value={allergies.join(', ')}
        onChange={(e) => {
          const newAllergies = e.target.value.split(',').map((allergy) => allergy.trim());
          setAllergies(newAllergies);
          handleArrayInputChange('pastMedicalHistory', 'allergies', newAllergies);
        }}
      />

      {/* Medications */}
      <h3 className="section-header">Medications</h3>
      <CustomSelect
        selectedValue={medications}
        onSelect={(value) => {
          setMedications(value);
          handleArrayInputChange('pastMedicalHistory', 'medications', value);
        }}
        options={medicationOptions || []}
        placeholder="Select medications"
        multiple
      />

      {/* Specific Illnesses */}
      <h3 className="section-header">Specific Illnesses</h3>
      <CustomSelect
        selectedValue={specificIllnesses}
        onSelect={(value) => {
          setSpecificIllnesses(value);
          handleArrayInputChange('pastMedicalHistory', 'specificIllnesses', value);
        }}
        options={specificIllnessesOptions || []}
        placeholder="Select illnesses"
        multiple
      />

      {/* Vaccinations */}
      <h3 className="section-header">Vaccinations</h3>
      <CustomSelect
        selectedValue={vaccinations}
        onSelect={(value) => {
          setVaccinations(value);
          handleArrayInputChange('pastMedicalHistory', 'vaccinations', value);
        }}
        options={vaccinationOptions || []}
        placeholder="Select vaccinations"
        multiple
      />

      {/* Other Notes */}
      <h3 className="section-header">Additional Notes</h3>
      <label className="label">Other relevant medical history:</label>
      <textarea
        className="text-input"
        placeholder="Enter any additional information"
        value={otherNotes}
        onChange={(e) => {
          setOtherNotes(e.target.value);
          handleInputChange('pastMedicalHistory', 'otherNotes', e.target.value);
        }}
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
