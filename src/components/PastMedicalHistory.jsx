import React, { useState } from 'react';
import { chronicConditionsOptions } from './ChronicConditions';
import { specificIllnessesOptions } from './SpecificIllnesses';
import { medicationOptions } from './MedicationOptions';
import { vaccinationOptions } from './VaccinationOptions';
import './PastMedicalHistory.css';

const PastMedicalHistory = ({ pastMedicalHistory, handleInputChange, handleArrayInputChange }) => {
  const [hospitalization, setHospitalization] = useState({ date: '', reason: '' });
  const [surgery, setSurgery] = useState({ date: '', type: '' });
  const [otherNotes, setOtherNotes] = useState(pastMedicalHistory.otherNotes || '');
  const maxChars = 500;

  const handleToggleSelection = (field, value) => {
    const currentValues = pastMedicalHistory[field] || [];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];
    handleArrayInputChange('pastMedicalHistory', field, updatedValues);
  };

  const handleAddHospitalization = () => {
    if (hospitalization.date && hospitalization.reason) {
      const newEntry = `${hospitalization.date} - ${hospitalization.reason}`;
      handleArrayInputChange('pastMedicalHistory', 'hospitalizations', [
        ...(pastMedicalHistory.hospitalizations || []),
        newEntry,
      ]);
      setHospitalization({ date: '', reason: '' });
    }
  };

  const handleAddSurgery = () => {
    if (surgery.date && surgery.type) {
      const newEntry = `${surgery.date} - ${surgery.type}`;
      handleArrayInputChange('pastMedicalHistory', 'surgeries', [
        ...(pastMedicalHistory.surgeries || []),
        newEntry,
      ]);
      setSurgery({ date: '', type: '' });
    }
  };

  const renderButtonOptions = (options, field) => (
    <div className="button-select" role="group" aria-label={`Select ${field}`}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`button-option ${
            (pastMedicalHistory[field] || []).includes(option.value) ? 'selected' : ''
          }`}
          onClick={() => handleToggleSelection(field, option.value)}
          aria-pressed={(pastMedicalHistory[field] || []).includes(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );

  const renderSelectedItems = (items, field) => (
    <div className="selected-items">
      {items?.map((item, index) => (
        <div key={index} className="selected-item">
          <span>{item}</span>
          <button
            type="button"
            className="remove-button"
            onClick={() =>
              handleArrayInputChange('pastMedicalHistory', field, items.filter((_, i) => i !== index))
            }
            aria-label={`Remove ${item}`}
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="past-medical-history-card">
      <div className="card-header">
        <h1 className="card-title">Past Medical History</h1>
      </div>
      <div className="card-content">
        {/* Chronic Conditions */}
        <div className="input-group">
          <label className="input-label">Chronic Conditions</label>
          {renderButtonOptions(chronicConditionsOptions, 'conditions')}
          {renderSelectedItems(pastMedicalHistory.conditions, 'conditions')}
        </div>

        {/* Hospitalizations */}
        <div className="input-group">
          <label className="input-label">Hospitalizations</label>
          <div className="hospitalization-inputs">
            <input
              type="text"
              placeholder="YYYY"
              value={hospitalization.date}
              onChange={(e) => setHospitalization({ ...hospitalization, date: e.target.value })}
              className="button-select-input"
              aria-label="Hospitalization year"
            />
            <input
              type="text"
              placeholder="Reason"
              value={hospitalization.reason}
              onChange={(e) => setHospitalization({ ...hospitalization, reason: e.target.value })}
              className="button-select-input"
              aria-label="Hospitalization reason"
            />
            <button
              type="button"
              className="add-button"
              onClick={handleAddHospitalization}
              disabled={!hospitalization.date || !hospitalization.reason}
            >
              Add
            </button>
          </div>
          {renderSelectedItems(pastMedicalHistory.hospitalizations, 'hospitalizations')}
        </div>

        {/* Surgeries */}
        <div className="input-group">
          <label className="input-label">Surgeries</label>
          <div className="hospitalization-inputs">
            <input
              type="text"
              placeholder="YYYY"
              value={surgery.date}
              onChange={(e) => setSurgery({ ...surgery, date: e.target.value })}
              className="button-select-input"
              aria-label="Surgery year"
            />
            <input
              type="text"
              placeholder="Type"
              value={surgery.type}
              onChange={(e) => setSurgery({ ...surgery, type: e.target.value })}
              className="button-select-input"
              aria-label="Surgery type"
            />
            <button
              type="button"
              className="add-button"
              onClick={handleAddSurgery}
              disabled={!surgery.date || !surgery.type}
            >
              Add
            </button>
          </div>
          {renderSelectedItems(pastMedicalHistory.surgeries, 'surgeries')}
        </div>

        {/* Allergies */}
        <div className="input-group">
          <label className="input-label">Allergies</label>
          <textarea
            className="text-input"
            placeholder="e.g., Penicillin - Rash, Peanuts - Anaphylaxis"
            value={pastMedicalHistory.allergies?.join(', ') || ''}
            onChange={(e) =>
              handleArrayInputChange(
                'pastMedicalHistory',
                'allergies',
                e.target.value.split(',').map((allergy) => allergy.trim())
              )
            }
            maxLength={maxChars}
            aria-label="Allergies"
          />
          <div className="character-counter">
            {pastMedicalHistory.allergies?.join(', ').length || 0}/{maxChars}
          </div>
        </div>

        {/* Medications */}
        <div className="input-group">
          <label className="input-label">Medications</label>
          {renderButtonOptions(medicationOptions, 'medications')}
          {renderSelectedItems(pastMedicalHistory.medications, 'medications')}
        </div>

        {/* Specific Illnesses */}
        <div className="input-group">
          <label className="input-label">Specific Illnesses</label>
          {renderButtonOptions(specificIllnessesOptions, 'specificIllnesses')}
          {renderSelectedItems(pastMedicalHistory.specificIllnesses, 'specificIllnesses')}
        </div>

        {/* Vaccinations */}
        <div className="input-group">
          <label className="input-label">Vaccinations</label>
          {renderButtonOptions(vaccinationOptions, 'vaccinations')}
          {renderSelectedItems(pastMedicalHistory.vaccinations, 'vaccinations')}
        </div>

        {/* Other Notes */}
        <div className="input-group">
          <label className="input-label">Additional Notes</label>
          <textarea
            className="text-input"
            placeholder="Enter any additional information"
            value={otherNotes}
            onChange={(e) => {
              setOtherNotes(e.target.value);
              handleInputChange('pastMedicalHistory', 'otherNotes', e.target.value);
            }}
            maxLength={maxChars}
            aria-label="Additional notes"
          />
          <div className="character-counter">{otherNotes.length}/{maxChars}</div>
        </div>

        {/* Save Button */}
        <button
          type="button"
          className="save-button"
          onClick={() => alert('Past Medical History Saved')}
        >
          Save Information
        </button>
      </div>
    </div>
  );
};

export default PastMedicalHistory;