import React, { useState } from 'react';
import './SocialHistory.css';

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

// SVG Social Health Wheel Component
const SocialHealthWheel = () => {
  const [activeSegment, setActiveSegment] = useState(null);

  const segments = [
    {
      id: 'housing',
      label: 'Housing',
      d: 'M150,150 L150,50 A100,100 0 0,1 219.13,80.87 Z',
      tooltip: 'In Uganda, 46% of rural households live in mud houses with thatched roofs, increasing risks of respiratory infections due to poor ventilation.'
    },
    {
      id: 'work',
      label: 'Employment',
      d: 'M150,150 L219.13,80.87 A100,100 0 0,1 250,150 Z',
      tooltip: 'Over 70% of Ugandans are engaged in subsistence agriculture, which can limit access to healthcare due to low income.'
    },
    {
      id: 'food',
      label: 'Diet',
      d: 'M150,150 L250,150 A100,100 0 0,1 219.13,219.13 Z',
      tooltip: 'Food insecurity affects 25% of Ugandan households, contributing to malnutrition and stunted growth in children.'
    },
    {
      id: 'violence',
      label: 'Violence',
      d: 'M150,150 L219.13,219.13 A100,100 0 0,1 150,250 Z',
      tooltip: 'Gender-based violence is reported by 51% of Ugandan women, impacting mental and physical health.'
    },
    {
      id: 'substance',
      label: 'Substance Use',
      d: 'M150,150 L150,250 A100,100 0 0,1 80.87,219.13 Z',
      tooltip: 'Tobacco use is prevalent in 10% of Ugandan adults, linked to high rates of lung cancer and heart disease.'
    },
    {
      id: 'social',
      label: 'Social Support',
      d: 'M150,150 L80.87,219.13 A100,100 0 0,1 50,150 Z',
      tooltip: 'Strong community ties in Uganda provide emotional support, but stigma can isolate those with HIV/AIDS.'
    }
  ];

  return (
    <div className="social-health-wheel">
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

const SocialHistory = ({ socialHistory, handleInputChange, handleArrayInputChange }) => {
  // Updated options for Ugandan context
  const housingOptions = [
    'Mud House', 'Iron-sheet House', 'Urban Apartment', 'Shared Compound',
    'Temporary Shelter', 'Homeless', 'Dormitory', 'Public Housing',
    'Rural Hut', 'Refugee Camp', 'Other'
  ];

  const workOptions = [
    'Subsistence Farming', 'Boda Boda Driver', 'Market Vendor', 'Teacher',
    'Healthcare Worker', 'Construction', 'Retail', 'Hospitality',
    'Unemployed', 'Student', 'Self-Employed', 'Informal Sector', 'Other'
  ];

  const foodOptions = [
    'Matoke-based Diet', 'Posho and Beans', 'Vegetarian', 'Mixed Diet',
    'Fish-based Diet', 'Food Insecure', 'Relief Food', 'Street Food',
    'Organic Farming', 'Other'
  ];

  const violenceOptions = [
    'No History', 'Domestic Violence', 'Gender-based Violence', 'Community Conflict',
    'Child Abuse', 'Land Dispute Violence', 'Political Violence', 'Other'
  ];

  const smokingOptions = [
    'Never Smoked', 'Current Smoker', 'Former Smoker', 'Social Smoker',
    'Local Tobacco', 'Vape User', 'Secondhand Smoke', 'Other'
  ];

  const alcoholOptions = [
    'Never Drinks', 'Occasional Drinker', 'Waragi Consumer', 'Local Brew',
    'Social Drinker', 'Binge Drinker', 'In Recovery', 'Other'
  ];

  const sexualHistoryOptions = [
    'Sexually Active', 'Not Sexually Active', 'Multiple Partners',
    'Single Partner', 'HIV/AIDS History', 'STI History', 'No STI History',
    'Uses Condoms', 'Does Not Use Condoms', 'Regular Testing', 'Other'
  ];

  const exerciseOptions = [
    'Sedentary', 'Walking', 'Farming Activities', 'Sports', 'Bicycle Use',
    'Limited Mobility', 'Other'
  ];

  const socialSupportOptions = [
    'Strong Community', 'Family Support', 'Religious Group', 'Limited Support',
    'HIV Support Group', 'No Support', 'NGO Support', 'Other'
  ];

  return (
    <div className="social-history">
      <h2 className="section-title">Social History</h2>
      <div className="section">
        <h3 className="section-subtitle">Social Health Wheel (Uganda Context)</h3>
        <SocialHealthWheel />
        <p className="wheel-description">
          Interact with the wheel to learn how social factors impact health in Uganda.
        </p>
      </div>

      {/* Substance Use */}
      <div className="section">
        <h3 className="section-subtitle">Substance Use</h3>
        <div className="input-grid">
          <ButtonSelect
            options={smokingOptions}
            selectedValues={socialHistory.smoking || []}
            onSelect={(values) => handleArrayInputChange('socialHistory', 'smoking', values)}
            label="Tobacco Use"
          />
          <ButtonSelect
            options={alcoholOptions}
            selectedValues={socialHistory.alcohol || []}
            onSelect={(values) => handleArrayInputChange('socialHistory', 'alcohol', values)}
            label="Alcohol Use"
          />
        </div>
      </div>

      {/* Diet & Exercise */}
      <div className="section">
        <h3 className="section-subtitle">Diet & Exercise</h3>
        <div className="input-grid">
          <ButtonSelect
            options={foodOptions}
            selectedValues={socialHistory.food || []}
            onSelect={(values) => handleArrayInputChange('socialHistory', 'food', values)}
            label="Dietary Habits"
          />
          <ButtonSelect
            options={exerciseOptions}
            selectedValues={socialHistory.exercise || []}
            onSelect={(values) => handleArrayInputChange('socialHistory', 'exercise', values)}
            label="Exercise Habits"
          />
        </div>
      </div>

      {/* Sexual Health */}
      <div className="section">
        <h3 className="section-subtitle">Sexual Health</h3>
        <ButtonSelect
          options={sexualHistoryOptions}
          selectedValues={socialHistory.sexualHistory || []}
          onSelect={(values) => handleArrayInputChange('socialHistory', 'sexualHistory', values)}
          label="Sexual History"
        />
      </div>

      {/* Living Situation */}
      <div className="section">
        <h3 className="section-subtitle">Living Situation</h3>
        <div className="input-grid">
          <ButtonSelect
            options={housingOptions}
            selectedValues={socialHistory.housing || []}
            onSelect={(values) => handleArrayInputChange('socialHistory', 'housing', values)}
            label="Housing Situation"
          />
          <ButtonSelect
            options={workOptions}
            selectedValues={socialHistory.work || []}
            onSelect={(values) => handleArrayInputChange('socialHistory', 'work', values)}
            label="Employment Status"
          />
        </div>
      </div>

      {/* Violence & Safety */}
      <div className="section">
        <h3 className="section-subtitle">Violence & Safety</h3>
        <ButtonSelect
          options={violenceOptions}
          selectedValues={socialHistory.violenceHistory || []}
          onSelect={(values) => handleArrayInputChange('socialHistory', 'violenceHistory', values)}
          label="Violence History"
        />
      </div>

      {/* Social Support */}
      <div className="section">
        <h3 className="section-subtitle">Social Support</h3>
        <ButtonSelect
          options={socialSupportOptions}
          selectedValues={socialHistory.socialSupport || []}
          onSelect={(values) => handleArrayInputChange('socialHistory', 'socialSupport', values)}
          label="Support Systems"
        />
      </div>

      {/* Additional Notes */}
      <div className="section">
        <h3 className="section-subtitle">Additional Notes</h3>
        <div className="input-group">
          <label className="input-label">Other Relevant Information</label>
          <textarea
            className="text-input"
            placeholder="e.g., Access to clean water? Community health worker visits? Other concerns?"
            value={socialHistory.additionalFactors || ''}
            onChange={(e) => handleInputChange('socialHistory', 'additionalFactors', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialHistory;