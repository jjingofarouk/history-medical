import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import './SocialHistory.css';

// Options for select fields
const housingOptions = [
  { label: 'Apartment', value: 'apartment' },
  { label: 'Detached House', value: 'detached_house' },
  { label: 'Shared Housing', value: 'shared_housing' },
  { label: 'Temporary Shelter', value: 'temporary_shelter' },
  { label: 'Homeless', value: 'homeless' },
  { label: 'Dormitory', value: 'dormitory' },
  { label: 'Mobile Home', value: 'mobile_home' },
  { label: 'Other', value: 'other_housing' },
];

const workOptions = [
  { label: 'Office Job', value: 'office_job' },
  { label: 'Manual Labor', value: 'manual_labor' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Education', value: 'education' },
  { label: 'Unemployed', value: 'unemployed' },
  { label: 'Retired', value: 'retired' },
  { label: 'Freelance', value: 'freelance' },
  { label: 'Self-Employed', value: 'self_employed' },
  { label: 'Student', value: 'student' },
];

const foodOptions = [
  { label: 'Home-cooked', value: 'home_cooked' },
  { label: 'Fast Food', value: 'fast_food' },
  { label: 'Vegetarian', value: 'vegetarian' },
  { label: 'Vegan', value: 'vegan' },
  { label: 'Mixed Diet', value: 'mixed_diet' },
  { label: 'Other', value: 'other' },
  { label: 'Pescatarian', value: 'pescatarian' },
  { label: 'Keto', value: 'keto' },
  { label: 'Gluten-Free', value: 'gluten_free' },
];

const violenceHistoryOptions = [
  { label: 'No History', value: 'no_history' },
  { label: 'Physical Violence', value: 'physical_violence' },
  { label: 'Emotional Abuse', value: 'emotional_abuse' },
  { label: 'Sexual Violence', value: 'sexual_violence' },
  { label: 'Financial Abuse', value: 'financial_abuse' },
  { label: 'Verbal Abuse', value: 'verbal_abuse' },
  { label: 'Stalking', value: 'stalking' },
  { label: 'Other', value: 'other_abuse' },
];

const SocialHistory = ({ socialHistory, handleInputChange }) => {
  const [selectedHousing, setSelectedHousing] = useState(socialHistory.housing || '');
  const [selectedWork, setSelectedWork] = useState(socialHistory.work || '');
  const [selectedFood, setSelectedFood] = useState(socialHistory.food || '');
  const [selectedViolenceHistory, setSelectedViolenceHistory] = useState(socialHistory.violenceHistory || '');

  return (
    <div className="social-history-container">
      <h2 className="title">Social History</h2>

      {/* Smoking History */}
      <label className="label">Smoking (e.g., Pack-years):</label>
      <input
        type="text"
        className="text-input"
        placeholder="Enter smoking history"
        value={socialHistory.smoking || ''}
        onChange={(e) => handleInputChange('socialHistory', 'smoking', e.target.value)}
      />

      {/* Alcohol Consumption */}
      <label className="label">Alcohol (Amount, Duration, When stopped?):</label>
      <input
        type="text"
        className="text-input"
        placeholder="Enter alcohol consumption details"
        value={socialHistory.alcohol || ''}
        onChange={(e) => handleInputChange('socialHistory', 'alcohol', e.target.value)}
      />

      {/* Dietary Habits */}
      <label className="label">Dietary Habits:</label>
      <CustomSelect
        selectedValue={selectedFood}
        onSelect={(value) => {
          setSelectedFood(value);
          handleInputChange('socialHistory', 'food', value);
        }}
        options={foodOptions}
        placeholder="Select dietary habits"
      />

      {/* Exercise Habits */}
      <label className="label">Exercise (Type, Frequency, Limitations?):</label>
      <textarea
        className="text-area"
        placeholder="Enter exercise details"
        value={socialHistory.exercise || ''}
        onChange={(e) => handleInputChange('socialHistory', 'exercise', e.target.value)}
      />

      {/* Sexual History */}
      <label className="label">Sexual History (Any concerns? Number of partners?):</label>
      <textarea
        className="text-area"
        placeholder="Enter sexual history"
        value={socialHistory.sexualHistory || ''}
        onChange={(e) => handleInputChange('socialHistory', 'sexualHistory', e.target.value)}
      />

      {/* Housing Situation */}
      <label className="label">Housing Situation:</label>
      <CustomSelect
        selectedValue={selectedHousing}
        onSelect={(value) => {
          setSelectedHousing(value);
          handleInputChange('socialHistory', 'housing', value);
        }}
        options={housingOptions}
        placeholder="Select housing situation"
      />

      {/* Work Type */}
      <label className="label">Type of Work:</label>
      <CustomSelect
        selectedValue={selectedWork}
        onSelect={(value) => {
          setSelectedWork(value);
          handleInputChange('socialHistory', 'work', value);
        }}
        options={workOptions}
        placeholder="Select type of work"
      />

      {/* History of Gender-Based Violence */}
      <label className="label">History of Gender-Based Violence:</label>
      <CustomSelect
        selectedValue={selectedViolenceHistory}
        onSelect={(value) => {
          setSelectedViolenceHistory(value);
          handleInputChange('socialHistory', 'violenceHistory', value);
        }}
        options={violenceHistoryOptions}
        placeholder="Select history of violence"
      />

      {/* Additional Factors */}
      <label className="label">Additional Factors (Who lives at home? Mobility needs?):</label>
      <textarea
        className="text-area"
        placeholder="Enter additional factors"
        value={socialHistory.additionalFactors || ''}
        onChange={(e) => handleInputChange('socialHistory', 'additionalFactors', e.target.value)}
      />
    </div>
  );
};

export default SocialHistory;