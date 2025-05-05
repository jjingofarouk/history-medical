import React, { useState, useEffect } from 'react';
import CustomSelect from './CustomSelect';
import { chronicConditionsOptions } from './ChronicConditions';
import { specificIllnessesOptions } from './SpecificIllnesses';
import { medicationOptions } from './MedicationOptions';
import { vaccinationOptions } from './VaccinationOptions';
import './PastMedicalHistory.css';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import ButtonSelect from './ButtonSelect';
import TextArea from './TextArea';
import Input from './Input';

const PastMedicalHistory = ({ pastMedicalHistory, handleInputChange, handleArrayInputChange }) => {
  const [conditions, setConditions] = useState(pastMedicalHistory.conditions || []);
  const [medications, setMedications] = useState(pastMedicalHistory.medications || []);
  const [allergies, setAllergies] = useState(pastMedicalHistory.allergies || []);
  const [specificIllnesses, setSpecificIllnesses] = useState(pastMedicalHistory.specificIllnesses || []);
  const [vaccinations, setVaccinations] = useState(pastMedicalHistory.vaccinations || []);
  const [hospitalizations, setHospitalizations] = useState(pastMedicalHistory.hospitalizations || []);
  const [otherNotes, setOtherNotes] = useState(pastMedicalHistory.otherNotes || '');
  const [newHospitalization, setNewHospitalization] = useState({ date: '', reason: '', duration: '' });

  const maxTextLength = 500;

  const handleAddHospitalization = () => {
    if (newHospitalization.date && newHospitalization.reason) {
      const updatedHospitalizations = [...hospitalizations, newHospitalization];
      setHospitalizations(updatedHospitalizations);
      handleArrayInputChange('pastMedicalHistory', 'hospitalizations', updatedHospitalizations);
      setNewHospitalization({ date: '', reason: '', duration: '' });
    }
  };

  const handleRemoveItem = (array, setArray, field, index) => {
    const updatedArray = array.filter((_, i) => i !== index);
    setArray(updatedArray);
    handleArrayInputChange('pastMedicalHistory', field, updatedArray);
  };

  useEffect(() => {
    setConditions(pastMedicalHistory.conditions || []);
    setMedications(pastMedicalHistory.medications || []);
    setAllergies(pastMedicalHistory.allergies || []);
    setSpecificIllnesses(pastMedicalHistory.specificIllnesses || []);
    setVaccinations(pastMedicalHistory.vaccinations || []);
    setHospitalizations(pastMedicalHistory.hospitalizations || []);
    setOtherNotes(pastMedicalHistory.otherNotes || '');
  }, [pastMedicalHistory]);

  return (
    <Card className="past-medical-history-card">
      <CardHeader>
        <CardTitle>Past Medical History</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Chronic Conditions */}
        <div className="input-group">
          <div className="input-container full-width">
            <label className="input-label">Chronic Conditions</label>
            <CustomSelect
              selectedValue={conditions}
              onSelect={(value) => {
                setConditions(value);
                handleArrayInputChange('pastMedicalHistory', 'conditions', value);
              }}
              options={chronicConditionsOptions}
              placeholder="Select chronic conditions (e.g., Diabetes, Hypertension)"
              multiple
              searchable
            />
            <div className="selected-items">
              {conditions.map((condition, index) => (
                <div key={index} className="selected-item">
                  {condition}
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItem(conditions, setConditions, 'conditions', index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specific Illnesses */}
        <div className="input-group">
          <div className="input-container full-width">
            <label className="input-label">Specific Illnesses</label>
            <CustomSelect
              selectedValue={specificIllnesses}
              onSelect={(value) => {
                setSpecificIllnesses(value);
                handleArrayInputChange('pastMedicalHistory', 'specificIllnesses', value);
              }}
              options={specificIllnessesOptions}
              placeholder="Select specific illnesses (e.g., Tuberculosis, Stroke)"
              multiple
              searchable
            />
            <div className="selected-items">
              {specificIllnesses.map((illness, index) => (
                <div key={index} className="selected-item">
                  {illness}
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItem(specificIllnesses, setSpecificIllnesses, 'specificIllnesses', index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Medications */}
        <div className="input-group">
          <div className="input-container full-width">
            <label className="input-label">Current Medications</label>
            <CustomSelect
              selectedValue={medications}
              onSelect={(value) => {
                setMedications(value);
                handleArrayInputChange('pastMedicalHistory', 'medications', value);
              }}
              options={medicationOptions}
              placeholder="Select medications (e.g., Metformin, Lisinopril)"
              multiple
              searchable
            />
            <div className="selected-items">
              {medications.map((med, index) => (
                <div key={index} className="selected-item">
                  {med}
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItem(medications, setMedications, 'medications', index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Allergies */}
        <div className="input-group">
          <div className="input-container full-width">
            <label className="input-label">Allergies</label>
            <ButtonSelect
              options={['Medications', 'Food', 'Environmental', 'Other']}
              value=""
              onChange={(value) => {
                if (!allergies.includes(value)) {
                  const newAllergies = [...allergies, value];
                  setAllergies(newAllergies);
                  handleArrayInputChange('pastMedicalHistory', 'allergies', newAllergies);
                }
              }}
              placeholder="Specify allergy (e.g., Penicillin - Rash)"
            />
            <div className="selected-items">
              {allergies.map((allergy, index) => (
                <div key={index} className="selected-item">
                  {allergy}
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItem(allergies, setAllergies, 'allergies', index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vaccinations */}
        <div className="input-group">
          <div className="input-container full-width">
            <label className="input-label">Vaccinations</label>
            <CustomSelect
              selectedValue={vaccinations}
              onSelect={(value) => {
                setVaccinations(value);
                handleArrayInputChange('pastMedicalHistory', 'vaccinations', value);
              }}
              options={vaccinationOptions}
              placeholder="Select vaccinations (e.g., COVID-19, Influenza)"
              multiple
              searchable
            />
            <div className="selected-items">
              {vaccinations.map((vaccination, index) => (
                <div key={index} className="selected-item">
                  {vaccination.label || vaccination}
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItem(vaccinations, setVaccinations, 'vaccinations', index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hospitalizations */}
        <div className="input-group">
          <div className="input-container full-width">
            <label className="input-label">Past Hospitalizations</label>
            <div className="hospitalization-inputs">
              <Input
                type="date"
                className="input-text"
                placeholder="Date"
                value={newHospitalization.date}
                onChange={(e) => setNewHospitalization({ ...newHospitalization, date: e.target.value })}
              />
              <Input
                className="input-text"
                placeholder="Reason (e.g., Pneumonia)"
                value={newHospitalization.reason}
                onChange={(e) => setNewHospitalization({ ...newHospitalization, reason: e.target.value })}
              />
              <Input
                className="input-text"
                placeholder="Duration (e.g., 5 days)"
                value={newHospitalization.duration}
                onChange={(e) => setNewHospitalization({ ...newHospitalization, duration: e.target.value })}
              />
              <button className="add-button" onClick={handleAddHospitalization}>
                Add
              </button>
            </div>
            <div className="selected-items">
              {hospitalizations.map((hosp, index) => (
                <div key={index} className="selected-item">
                  {`${hosp.date}: ${hosp.reason} (${hosp.duration})`}
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItem(hospitalizations, setHospitalizations, 'hospitalizations', index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Notes */}
        <div className="input-group">
          <div className="input-container full-width">
            <label className="input-label">Additional Medical Notes</label>
            <TextArea
              className="input-textarea"
              placeholder="e.g., History of recurrent infections, relevant diagnostic findings"
              value={otherNotes}
              onChange={(e) => {
                if (e.target.value.length <= maxTextLength) {
                  setOtherNotes(e.target.value);
                  handleInputChange('pastMedicalHistory', 'otherNotes', e.target.value);
                }
              }}
            />
            <div className="character-counter">
              {otherNotes.length}/{maxTextLength} characters
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          className="save-button"
          onClick={() => alert('Past Medical History Saved')}
        >
          Save Information
        </button>
      </CardContent>
    </Card>
  );
};

export default PastMedicalHistory;