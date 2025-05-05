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

const SocialHistory = ({ socialHistory, handleInputChange, handleArrayInputChange }) => {
  // Extensive options for all categories
  const housingOptions = [
    'Apartment', 'Detached House', 'Shared Housing', 'Temporary Shelter',
    'Homeless', 'Dormitory', 'Mobile Home', 'Public Housing', 
    'Subsidized Housing', 'Rural Home', 'Urban High-rise', 'Military Housing',
    'Nursing Home', 'Rehabilitation Center', 'Other'
  ];

  const workOptions = [
    'Office Job', 'Manual Labor', 'Healthcare', 'Education', 'Construction',
    'Agriculture', 'Manufacturing', 'Retail', 'Hospitality', 'Transportation',
    'Arts/Entertainment', 'Technology', 'Finance', 'Government', 'Unemployed',
    'Retired', 'Freelance', 'Self-Employed', 'Student', 'Homemaker', 'Disabled'
  ];

  const foodOptions = [
    'Home-cooked', 'Fast Food', 'Vegetarian', 'Vegan', 'Mixed Diet',
    'Pescatarian', 'Keto', 'Gluten-Free', 'Low-Carb', 'Mediterranean',
    'DASH Diet', 'Halal', 'Kosher', 'Processed Foods', 'Organic Only',
    'Food Insecure', 'Meal Delivery', 'Other'
  ];

  const violenceOptions = [
    'No History', 'Physical Violence', 'Emotional Abuse', 'Sexual Violence',
    'Financial Abuse', 'Verbal Abuse', 'Stalking', 'Childhood Abuse',
    'Domestic Violence', 'Elder Abuse', 'Human Trafficking', 'Hate Crime',
    'Workplace Violence', 'Community Violence', 'Other'
  ];

  const smokingOptions = [
    'Never Smoked', 'Current Smoker', 'Former Smoker', 'Social Smoker',
    '1-5 pack-years', '6-10 pack-years', '11-20 pack-years', 
    '21-30 pack-years', '30+ pack-years', 'Vape User', 
    'Chewing Tobacco', 'Cigar Smoker', 'Pipe Smoker', 'Secondhand Smoke'
  ];

  const alcoholOptions = [
    'Never Drinks', 'Occasional Drinker', 'Social Drinker', '1-2 drinks/week',
    '3-7 drinks/week', '8-14 drinks/week', '15+ drinks/week', 
    'Binge Drinker', 'Former Heavy Drinker', 'In Recovery',
    'Weekend Drinker', 'Daily Drinker', 'Problem Drinker', 'Other'
  ];

  const sexualHistoryOptions = [
    'Sexually Active', 'Not Sexually Active', 'Multiple Partners',
    'Single Partner', 'Same-sex Partners', 'Opposite-sex Partners',
    'Both-sex Partners', 'STI History', 'No STI History', 
    'Regular Testing', 'Never Tested', 'High-risk Behavior',
    'Uses Protection', 'Does Not Use Protection', 'Other'
  ];

  const exerciseOptions = [
    'Sedentary', 'Light Activity', 'Moderate Exercise', 'Vigorous Exercise',
    '1-2 days/week', '3-4 days/week', '5+ days/week', 'Athlete',
    'Yoga/Pilates', 'Weight Training', 'Cardio Focus', 'Outdoor Activities',
    'Physical Job', 'Limited Mobility', 'Other'
  ];

  const socialSupportOptions = [
    'Strong Support', 'Moderate Support', 'Limited Support', 'Isolated',
    'Family Support', 'Friend Support', 'Community Support', 
    'Religious Support', 'Support Groups', 'Professional Support',
    'No Support System', 'Caregiver Dependent', 'Other'
  ];

  return (
    <div className="social-history">
      <h2 className="section-title">Social History</h2>

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
            placeholder="e.g., Who lives at home? Mobility needs? Other concerns?"
            value={socialHistory.additionalFactors || ''}
            onChange={(e) => handleInputChange('socialHistory', 'additionalFactors', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialHistory;