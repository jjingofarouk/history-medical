import React, { useState } from 'react';
import './FamilyHistory.css';

const FamilyHealthWheel = () => {
  const [activeSegment, setActiveSegment] = useState(null);

  const segments = [
    {
      id: 'hereditary',
      label: 'Hereditary Diseases',
      d: 'M150,150 L150,50 A100,100 0 0,1 219.13,80.87 Z',
      tooltip: 'In Uganda, hereditary diseases like diabetes and hypertension are rising, affecting 4% and 26% of adults, respectively.'
    },
    {
      id: 'tuberculosis',
      label: 'Tuberculosis',
      d: 'M150,150 L219.13,80.87 A100,100 0 0,1 250,150 Z',
      tooltip: 'Tuberculosis has a prevalence of 253 per 100,000 in Uganda, often linked to family exposure.'
    },
    {
      id: 'hiv',
      label: 'HIV/AIDS',
      d: 'M150,150 L250,150 A100,100 0 0,1 219.13,219.13 Z',
      tooltip: 'HIV/AIDS affects 5.4% of Ugandan adults, with family history increasing risk of transmission.'
    },
    {
      id: 'sickle_cell',
      label: 'Sickle Cell',
      d: 'M150,150 L219.13,219.13 A100,100 0 0,1 150,250 Z',
      tooltip: 'Sickle cell disease affects 1-2% of Ugandans, with 20% carrying the trait, often inherited.'
    },
    {
      id: 'mental_health',
      label: 'Mental Health',
      d: 'M150,150 L150,250 A100,100 0 0,1 80.87,219.13 Z',
      tooltip: 'Mental health issues like depression are underreported in Uganda, but family history increases risk.'
    },
    {
      id: 'malaria',
      label: 'Malaria',
      d: 'M150,150 L80.87,219.13 A100,100 0 0,1 50,150 Z',
      tooltip: 'Malaria is endemic in Uganda, with family living conditions affecting exposure risk.'
    }
  ];

  return (
    <div className="family-health-wheel">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        width="100%"
        height="300"
      >
        <g>
          {segments.map((segment) => (
            <g key={segment.id}>
              <path
                d={segment.d}
                fill={activeSegment === segment.id ? 'var(--color-accent-1)' : 'var(--color-black-3)'}
                stroke="var(--color-white-1)"
                strokeWidth="1"
                onMouseEnter={() => setActiveSegment(segment.id)}
                onMouseLeave={() => setActiveSegment(null)}
                style={{ cursor: 'pointer', transition: 'var(--transition-quick)' }}
              />
              <text
                x="150"
                y="150"
                textAnchor="middle"
                fill="var(--color-white-1)"
                fontSize="12"
                fontFamily="var(--font-base)"
                style={{ pointerEvents: 'none' }}
                transform={`rotate(${segments.indexOf(segment) * 60}, 150, 150)`}
              >
                {segment.label}
              </text>
            </g>
          ))}
        </g>
      </svg>
      {activeSegment && (
        <div className="tooltip">
          {segments.find((s) => s.id === activeSegment)?.tooltip}
        </div>
      )}
    </div>
  );
};

const FamilyHistory = ({ familyHistory, handleInputChange, handleArrayInputChange }) => {
  const [additionalFactor, setAdditionalFactor] = useState('');
  const maxChars = 500;

  const hereditaryDiseasesOptions = [
    { label: 'Diabetes', value: 'diabetes' },
    { label: 'Hypertension', value: 'hypertension' },
    { label: 'Sickle Cell Disease', value: 'sickle_cell' },
    { label: 'Cancer', value: 'cancer' },
    { label: 'Cardiovascular Diseases', value: 'cardiovascular' },
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
    { label: 'Heart Failure', value: 'heart_failure' },
    { label: 'Other', value: 'other' },
  ];

  const cancerOptions = [
    { label: 'Cervical Cancer', value: 'cervical_cancer' },
    { label: 'Kaposi’s Sarcoma', value: 'kaposi_sarcoma' },
    { label: 'Liver Cancer', value: 'liver_cancer' },
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
    { label: 'Local Tobacco', value: 'local_tobacco' },
    { label: 'Unknown', value: 'unknown' },
  ];

  const mentalHealthOptions = [
    { label: 'Depression', value: 'depression' },
    { label: 'Anxiety', value: 'anxiety' },
    { label: 'Post-Traumatic Stress', value: 'ptsd' },
    { label: 'Other', value: 'other' },
  ];

  const hivOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Unknown', value: 'unknown' },
  ];

  const sickleCellOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Trait Carrier', value: 'trait_carrier' },
    { label: 'Unknown', value: 'unknown' },
  ];

  const malariaOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Frequent', value: 'frequent' },
    { label: 'Unknown', value: 'unknown' },
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
        <div className="input-group">
          <label className="input-label">Family Health Wheel (Uganda Context)</label>
          <p className="input-description">
            Interact with the wheel to learn about family health factors in Uganda.
          </p>
          <FamilyHealthWheel />
        </div>

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

        {/* HIV/AIDS */}
        <div className="input-group">
          <label className="input-label">HIV/AIDS</label>
          <p className="input-description">Does any family member have a history of HIV/AIDS?</p>
          {renderButtonOptions(hivOptions, 'hiv', true)}
        </div>

        {/* Sickle Cell Disease */}
        <div className="input-group">
          <label className="input-label">Sickle Cell Disease</label>
          <p className="input-description">Does any family member have sickle cell disease or carry the trait?</p>
          {renderButtonOptions(sickleCellOptions, 'sickleCell', true)}
        </div>

        {/* Malaria */}
        <div className="input-group">
          <label className="input-label">Malaria</label>
          <p className="input-description">Does any family member have a history of frequent malaria?</p>
          {renderButtonOptions(malariaOptions, 'malaria', true)}
        </div>

        {/* Smoking */}
        <div className="input-group">
          <label className="input-label">Smoking</label>
          <p className="input-description">Is smoking common among family members?</p>
          {renderButtonOptions(smokingOptions, 'smoking', true)}
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
          <p className="input-description">Add other relevant family medical history details (e.g., epilepsy, malnutrition).</p>
          <div className="additional-factor-inputs">
            <input
              type="text"
              placeholder="e.g., Family history of epilepsy"
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