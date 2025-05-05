import React, { useState } from 'react';
import './FamilyHistory.css';

const FamilyHistory = ({ familyHistory, handleInputChange, handleArrayInputChange }) => {
  const [additionalFactor, setAdditionalFactor] = useState('');
  const maxChars = 500;

  const hereditaryDiseasesOptions = [
    { label: 'Diabetes', value: 'diabetes' },
    { label: 'Cancer', value: 'cancer' },
    { label: 'Cardiovascular Diseases', value: 'cardiovascular' },
    { label: 'Hypertension', value: 'hypertension' },
    { label: 'Other', value: 'other' },
  ];

  const hypertensionOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Unknown', value: 'unknown' },
  ];

  const cardiovascularOptions = [
    { label: 'Heart Attack', value: 'heart_attack' },
    { label: 'Stroke', value: 'stroke' },
    { label: 'Arrhythmias', value: 'arrhythmias' },
    { label: 'Other', value: 'other' },
  ];

  const cancerOptions = [
    { label: 'Breast Cancer', value: 'breast_cancer' },
    { label: 'Colon Cancer', value: 'colon_cancer' },
    { label: 'Lung Cancer', value: 'lung_cancer' },
    { label: 'Other', value: 'other' },
  ];

  const tuberculosisOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Unknown', value: 'unknown' },
  ];

  const smokingOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Occasional', value: 'occasional' },
    { label: 'Unknown', value: 'unknown' },
  ];

  const alcoholOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Occasional', value: 'occasional' },
    { label: 'Unknown', value: 'unknown' },
  ];

  const mentalHealthOptions = [
    { label: 'Depression', value: 'depression' },
    { label: 'Anxiety', value: 'anxiety' },
    { label: 'Bipolar Disorder', value: 'bipolar_disorder' },
    { label: 'Other', value: 'other' },
  ];

  const handleToggleSelection = (field, value) => {
    const currentValues = familyHistory[field] || [];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];
    handleArrayInputChange('familyHistory', field, updatedValues);
  };

  const handleAddFactor = () => {
    if (additionalFactor) {
      handleArrayInputChange('familyHistory', 'additionalFactors', [
        ...(familyHistory.additionalFactors || []),
        additionalFactor,
      ]);
      setAdditionalFactor('');
    }
  };

  const renderButtonOptions = (options, field, singleSelect = false) => (
    <div className="button-select" role="group" aria-label={`Select ${field}`}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`button-option ${
            singleSelect
              ? familyHistory[field] === option.value
                ? 'selected'
                : ''
              : (familyHistory[field] || []).includes(option.value)
              ? 'selected'
              : ''
          }`}
          onClick={() =>
            singleSelect
              ? handleInputChange('familyHistory', field, option.value)
              : handleToggleSelection(field, option.value)
          }
          aria-pressed={
            singleSelect
              ? familyHistory[field] === option.value
              : (familyHistory[field] || []).includes(option.value)
          }
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
              handleArrayInputChange('familyHistory', field, items.filter((_, i) => i !== index))
            }
            aria-label={`Remove ${item}`}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="family-history-card">
      <div className="card-header">
        <h1 className="card-title">Family Medical History</h1>
      </div>
      <div className="card-content">
        {/* Hereditary Diseases */}
        <div className="input-group">
          <label className="input-label">Hereditary Diseases</label>
          <p className="input-description">Select any hereditary diseases present in your family.</p>
          {renderButtonOptions(hereditaryDiseasesOptions, 'hereditaryDiseases')}
          {renderSelectedItems(familyHistory.hereditaryDiseases, 'hereditaryDiseases')}
        </div>

        {/* Hypertension */}
        <div className="input-group">
          <label className="input-label">Hypertension</label>
          <p className="input-description">Does any family member have a history of hypertension?</p>
          {renderButtonOptions(hypertensionOptions, 'hypertension', true)}
        </div>

        {/* Cardiovascular Diseases */}
        <div className="input-group">
          <label className="input-label">Cardiovascular Diseases</label>
          <p className="input-description">Select any cardiovascular conditions in your family history.</p>
          {renderButtonOptions(cardiovascularOptions, 'cardiovascular')}
          {renderSelectedItems(familyHistory.cardiovascular, 'cardiovascular')}
        </div>

        {/* Cancer */}
        <div className="input-group">
          <label className="input-label">Cancer</label>
          <p className="input-description">Select any types of cancer present in your family.</p>
          {renderButtonOptions(cancerOptions, 'cancer')}
          {renderSelectedItems(familyHistory.cancer, 'cancer')}
        </div>

        {/* Tuberculosis */}
        <div className="input-group">
          <label className="input-label">Tuberculosis</label>
          <p className="input-description">Does any family member have a history of tuberculosis?</p>
          {renderButtonOptions(tuberculosisOptions, 'tuberculosis', true)}
        </div>

        {/* Smoking */}
        <div className="input-group">
          <label className="input-label">Smoking</label>
          <p className="input-description">Is smoking common among family members?</p>
          {renderButtonOptions(smokingOptions, 'smoking', true)}
        </div>

        {/* Alcohol Consumption */}
        <div className="input-group">
          <label className="input-label">Alcohol Consumption</label>
          <p className="input-description">Is alcohol consumption common among family members?</p>
          {renderButtonOptions(alcoholOptions, 'alcohol', true)}
        </div>

        {/* Mental Health */}
        <div className="input-group">
          <label className="input-label">Mental Health Conditions</label>
          <p className="input-description">Select any mental health conditions in your family history.</p>
          {renderButtonOptions(mentalHealthOptions, 'mentalHealth')}
          {renderSelectedItems(familyHistory.mentalHealth, 'mentalHealth')}
        </div>

        {/* Additional Factors */}
        <div className="input-group">
          <label className="input-label">Additional Factors</label>
          <p className="input-description">Add other relevant family medical history details.</p>
          <div className="additional-factor-inputs">
            <input
              type="text"
              placeholder="e.g., Family history of autoimmune disorders"
              value={additionalFactor}
              onChange={(e) => setAdditionalFactor(e.target.value)}
              className="button-select-input"
              aria-label="Additional factor"
              maxLength={maxChars}
            />
            <button
              type="button"
              className="add-button"
              onClick={handleAddFactor}
              disabled={!additionalFactor}
            >
              Add
            </button>
          </div>
          {renderSelectedItems(familyHistory.additionalFactors, 'additionalFactors')}
          <div className="character-counter">{additionalFactor.length}/{maxChars}</div>
        </div>

        {/* Save Button */}
        <button
          type="button"
          className="save-button"
          onClick={() => alert('Family History Saved')}
        >
          Save Information
        </button>
      </div>
    </div>
  );
};

export default FamilyHistory;