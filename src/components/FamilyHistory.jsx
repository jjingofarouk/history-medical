import React from 'react';
import CustomSelect from './CustomSelect';
import './FamilyHistory.css';

const FamilyHistory = ({ familyHistory, handleInputChange }) => {
  return (
    <div className="family-history-container">
      <h2 className="header">Family History</h2>

      {/* Hereditary Diseases */}
      <div className="input-container">
        <label className="input-label">Hereditary Diseases</label>
        <CustomSelect
          options={[
            { label: 'Diabetes', value: 'diabetes' },
            { label: 'Cancer', value: 'cancer' },
            { label: 'Cardiovascular Diseases', value: 'cardiovascular' },
            { label: 'Hypertension', value: 'hypertension' },
            { label: 'Other', value: 'other' },
          ]}
          selectedValue={familyHistory.hereditaryDiseases || ''}
          onSelect={(value) => handleInputChange('familyHistory', 'hereditaryDiseases', value)}
        />
      </div>

      {/* Hypertension */}
      <div className="input-container">
        <label className="input-label">Hypertension (Any family history?)</label>
        <CustomSelect
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
            { label: 'Unknown', value: 'unknown' },
          ]}
          selectedValue={familyHistory.hypertension || ''}
          onSelect={(value) => handleInputChange('familyHistory', 'hypertension', value)}
        />
      </div>

      {/* Cardiovascular Diseases */}
      <div className="input-container">
        <label className="input-label">Cardiovascular Diseases</label>
        <CustomSelect
          options={[
            { label: 'Heart Attack', value: 'heart_attack' },
            { label: 'Stroke', value: 'stroke' },
            { label: 'Arrhythmias', value: 'arrhythmias' },
            { label: 'Other', value: 'other' },
          ]}
          selectedValue={familyHistory.cardiovascular || ''}
          onSelect={(value) => handleInputChange('familyHistory', 'cardiovascular', value)}
        />
      </div>

      {/* Cancer */}
      <div className="input-container">
        <label className="input-label">Cancer</label>
        <CustomSelect
          options={[
            { label: 'Breast Cancer', value: 'breast_cancer' },
            { label: 'Colon Cancer', value: 'colon_cancer' },
            { label: 'Lung Cancer', value: 'lung_cancer' },
            { label: 'Other', value: 'other' },
          ]}
          selectedValue={familyHistory.cancer || ''}
          onSelect={(value) => handleInputChange('familyHistory', 'cancer', value)}
        />
      </div>

      {/* Tuberculosis */}
      <div className="input-container">
        <label className="input-label">Tuberculosis</label>
        <CustomSelect
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
            { label: 'Unknown', value: 'unknown' },
          ]}
          selectedValue={familyHistory.tuberculosis || ''}
          onSelect={(value) => handleInputChange('familyHistory', 'tuberculosis', value)}
        />
      </div>

      {/* Smoking */}
      <div className="input-container">
        <label className="input-label">Smoking</label>
        <CustomSelect
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
            { label: 'Occasional', value: 'occasional' },
            { label: 'Unknown', value: 'unknown' },
          ]}
          selectedValue={familyHistory.smoking || ''}
          onSelect={(value) => handleInputChange('familyHistory', 'smoking', value)}
        />
      </div>

      {/* Alcohol */}
      <div className="input-container">
        <label className="input-label">Alcohol Consumption</label>
        <CustomSelect
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
            { label: 'Occasional', value: 'occasional' },
            { label: 'Unknown', value: 'unknown' },
          ]}
          selectedValue={familyHistory.alcohol || ''}
          onSelect={(value) => handleInputChange('familyHistory', 'alcohol', value)}
        />
      </div>

      {/* Mental Health */}
      <div className="input-container">
        <label className="input-label">Mental Health</label>
        <CustomSelect
          options={[
            { label: 'Depression', value: 'depression' },
            { label: 'Anxiety', value: 'anxiety' },
            { label: 'Bipolar Disorder', value: 'bipolar_disorder' },
            { label: 'Other', value: 'other' },
          ]}
          selectedValue={familyHistory.mentalHealth || ''}
          onSelect={(value) => handleInputChange('familyHistory', 'mentalHealth', value)}
        />
      </div>

      {/* Additional Factors */}
      <div className="input-container">
        <label className="input-label">Additional Factors</label>
        <input
          type="text"
          className="text-input"
          placeholder="Enter other relevant family history"
          value={familyHistory.additionalFactors || ''}
          onChange={(e) => handleInputChange('familyHistory', 'additionalFactors', e.target.value)}
        />
      </div>

      {/* Save Button */}
      <button
        className="save-button"
        onClick={() => alert('Family History Saved')}
      >
        Save Information
      </button>
    </div>
  );
};

export default FamilyHistory;