import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { symptomsList } from './symptomsList';
import './ChiefComplait.css';

const ChiefComplaint = ({ chiefComplaints = ['', '', ''], durations = ['', '', ''], durationUnits = ['days', 'days', 'days'], handleInputChange }) => {
  const [complaints, setComplaints] = useState(chiefComplaints);
  const [durationsState, setDurationsState] = useState(durations);
  const [units, setUnits] = useState(durationUnits);
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(null);

  const handleComplaintChange = (index, value) => {
    const updatedComplaints = [...complaints];
    updatedComplaints[index] = value;
    setComplaints(updatedComplaints);
    handleInputChange('chiefComplaints', index, value);

    // Filter suggestions based on input
    if (value.length > 0) {
      const filteredSuggestions = symptomsList
        .filter((symptom) => symptom.toLowerCase().startsWith(value.toLowerCase()))
        .slice(0, 5); // Limit to 5 suggestions
      setSuggestions(filteredSuggestions);
      setActiveSuggestionIndex(index);
    } else {
      setSuggestions([]);
      setActiveSuggestionIndex(null);
    }
  };

  const handleSuggestionClick = (suggestion, index) => {
    const updatedComplaints = [...complaints];
    updatedComplaints[index] = suggestion;
    setComplaints(updatedComplaints);
    handleInputChange('chiefComplaints', index, suggestion);
    setSuggestions([]);
    setActiveSuggestionIndex(null);
  };

  const handleDurationChange = (index, value) => {
    const updatedDurations = [...durationsState];
    updatedDurations[index] = value;
    setDurationsState(updatedDurations);
    handleInputChange('durations', index, value);
  };

  const handleUnitChange = (index, value) => {
    const updatedUnits = [...units];
    updatedUnits[index] = value;
    setUnits(updatedUnits);
    handleInputChange('durationUnits', index, value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Chief Complaints</CardTitle>
      </CardHeader>
      <CardContent>
        {[0, 1, 2].map((index) => (
          <div key={index} className="complaint-section">
            <label htmlFor={`chiefComplaint${index}`} className="complaint-label">
              Complaint {index + 1}:
            </label>
            <textarea
              id={`chiefComplaint${index}`}
              placeholder="Enter the complaint"
              value={complaints[index] || ''}
              onChange={(e) => handleComplaintChange(index, e.target.value)}
              className="text-area"
            />
            {suggestions.length > 0 && activeSuggestionIndex === index && (
              <div className="suggestions">
                {suggestions.map((suggestion, suggestionIndex) => (
                  <div
                    key={suggestionIndex}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(suggestion, index)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
            <label htmlFor={`duration${index}`} className="duration-label">
              Duration of Symptoms:
            </label>
            <div className="duration-input">
              <input
                type="text"
                id={`duration${index}`}
                placeholder="e.g., 3"
                value={durationsState[index] || ''}
                onChange={(e) => handleDurationChange(index, e.target.value)}
                className="input"
              />
              <select
                value={units[index] || 'days'}
                onChange={(e) => handleUnitChange(index, e.target.value)}
                className="duration-unit"
              >
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>
                <option value="years">Years</option>
              </select>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ChiefComplaint;