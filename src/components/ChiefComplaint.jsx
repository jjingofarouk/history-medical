import React, { useState, useCallback, useMemo, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { symptomsList } from './symptomsList';
import './ChiefComplaint.css';

// Constants for maintainability
const DURATION_UNITS = ['hours', 'days', 'weeks', 'months', 'years'];
const MAX_SUGGESTIONS = 5;
const MAX_COMPLAINT_LENGTH = 200;
const SEVERITY_LEVELS = [
  { value: '1', label: 'Mild (1-3)' },
  { value: '2', label: 'Moderate (4-7)' },
  { value: '3', label: 'Severe (8-10)' },
];

// Educational content for tooltips
const EDUCATIONAL_TOOLTIPS = {
  chiefComplaint: "The chief complaint is the patient's primary reason for seeking medical care. Use clear, concise language (e.g., 'chest pain' instead of 'hurting in chest'). Avoid medical jargon unless quoting the patient.",
  duration: "Duration helps determine the acuity of the condition. Be precise (e.g., '3 days' instead of 'a few days'). For chronic conditions, note onset and progression.",
  severity: "Severity assessment helps prioritize symptoms. Use a 1-10 scale: Mild (1-3), Moderate (4-7), Severe (8-10). Ask patients to describe impact on daily activities.",
};

const ChiefComplaint = ({
  chiefComplaints = [''],
  durations = [''],
  durationUnits = ['days'],
  severities = ['1'],
  handleInputChange,
}) => {
  const [complaints, setComplaints] = useState(chiefComplaints);
  const [durationsState, setDurationsState] = useState(durations);
  const [units, setUnits] = useState(durationUnits);
  const [severitiesState, setSeveritiesState] = useState(severities);
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(null);
  const [focusedSuggestion, setFocusedSuggestion] = useState(-1);
  const [errors, setErrors] = useState([]);
  const textareaRefs = useRef([]);

  // Add or remove complaint fields
  const addComplaint = useCallback(() => {
    setComplaints((prev) => [...prev, '']);
    setDurationsState((prev) => [...prev, '']);
    setUnits((prev) => [...prev, 'days']);
    setSeveritiesState((prev) => [...prev, '1']);
    setErrors((prev) => [...prev, '']);
  }, []);

  const removeComplaint = useCallback((index) => {
    setComplaints((prev) => prev.filter((_, i) => i !== index));
    setDurationsState((prev) => prev.filter((_, i) => i !== index));
    setUnits((prev) => prev.filter((_, i) => i !== index));
    setSeveritiesState((prev) => prev.filter((_, i) => i !== index));
    setErrors((prev) => prev.filter((_, i) => i !== index));
    handleInputChange('chiefComplaints', index, '');
  }, [handleInputChange]);

  // Memoized suggestion filtering
  const getFilteredSuggestions = useCallback(
    (value) =>
      symptomsList
        .filter((symptom) => symptom.toLowerCase().includes(value.toLowerCase()))
        .slice(0, MAX_SUGGESTIONS),
    []
  );

  // Validate complaint input
  const validateComplaint = (value) => {
    if (value.length === 0) return '';
    if (value.length < 3) return 'Complaint is too short. Be specific (e.g., "abdominal pain").';
    if (value.length > MAX_COMPLAINT_LENGTH) return `Complaint must be under ${MAX_COMPLAINT_LENGTH} characters.`;
    if (!/^[a-zA-Z\s.,'-]+$/.test(value)) return 'Use letters, spaces, and basic punctuation only.';
    return '';
  };

  // Handle complaint input changes
  const handleComplaintChange = useCallback(
    (index, value) => {
      const updatedComplaints = [...complaints];
      updatedComplaints[index] = value;
      setComplaints(updatedComplaints);
      handleInputChange('chiefComplaints', index, value);

      const error = validateComplaint(value);
      setErrors((prev) => {
        const newErrors = [...prev];
        newErrors[index] = error;
        return newErrors;
      });

      if (value.length > 0) {
        setSuggestions(getFilteredSuggestions(value));
        setActiveSuggestionIndex(index);
        setFocusedSuggestion(-1);
      } else {
        setSuggestions([]);
        setActiveSuggestionIndex(null);
        setFocusedSuggestion(-1);
      }
    },
    [complaints, handleInputChange, getFilteredSuggestions]
  );

  // Handle suggestion selection
  const handleSuggestionClick = useCallback(
    (suggestion, index) => {
      const updatedComplaints = [...complaints];
      updatedComplaints[index] = suggestion;
      setComplaints(updatedComplaints);
      handleInputChange('chiefComplaints', index, suggestion);
      setSuggestions([]);
      setActiveSuggestionIndex(null);
      setFocusedSuggestion(-1);
      setErrors((prev) => {
        const newErrors = [...prev];
        newErrors[index] = '';
        return newErrors;
      });
      textareaRefs.current[index]?.focus();
    },
    [complaints, handleInputChange]
  );

  // Handle duration input changes
  const handleDurationChange = useCallback(
    (index, value) => {
      if (value && (Number(value) < 0 || isNaN(Number(value)))) return;
      const updatedDurations = [...durationsState];
      updatedDurations[index] = value;
      setDurationsState(updatedDurations);
      handleInputChange('durations', index, value);
    },
    [durationsState, handleInputChange]
  );

  // Handle duration unit changes
  const handleUnitChange = useCallback(
    (index, value) => {
      const updatedUnits = [...units];
      updatedUnits[index] = value;
      setUnits(updatedUnits);
      handleInputChange('durationUnits', index, value);
    },
    [units, handleInputChange]
  );

  // Handle severity changes
  const handleSeverityChange = useCallback(
    (index, value) => {
      const updatedSeverities = [...severitiesState];
      updatedSeverities[index] = value;
      setSeveritiesState(updatedSeverities);
      handleInputChange('severities', index, value);
    },
    [severitiesState, handleInputChange]
  );

  // Keyboard navigation for suggestions
  const handleKeyDown = useCallback(
    (e, index) => {
      if (!suggestions.length || activeSuggestionIndex !== index) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusedSuggestion((prev) => Math.min(prev + 1, suggestions.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedSuggestion((prev) => Math.max(prev - 1, -1));
      } else if (e.key === 'Enter' && focusedSuggestion >= 0) {
        e.preventDefault();
        handleSuggestionClick(suggestions[focusedSuggestion], index);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setSuggestions([]);
        setActiveSuggestionIndex(null);
        setFocusedSuggestion(-1);
      }
    },
    [suggestions, activeSuggestionIndex, focusedSuggestion, handleSuggestionClick]
  );

  // Memoized complaint cards
  const complaintCards = useMemo(
    () =>
      complaints.map((complaint, index) => (
        <div
          key={index}
          className="complaint-card"
          role="group"
          aria-labelledby={`complaint-label-${index}`}
        >
          <div className="complaint-section">
            <div className="label-tooltip">
              <label
                id={`complaint-label-${index}`}
                htmlFor={`chiefComplaint${index}`}
                className="complaint-label"
              >
                Complaint {index + 1}
              </label>
              <span className="tooltip" aria-label={EDUCATIONAL_TOOLTIPS.chiefComplaint}>
                ℹ️
              </span>
            </div>
            <div className="input-wrapper">
              <textarea
                id={`chiefComplaint${index}`}
                ref={(el) => (textareaRefs.current[index] = el)}
                placeholder="e.g., Chest Pain"
                value={complaint}
                onChange={(e) => handleComplaintChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`complaint-textarea ${errors[index] ? 'error' : ''}`}
                aria-autocomplete="list"
                aria-controls={`suggestions-${index}`}
                aria-activedescendant={
                  focusedSuggestion >= 0 ? `suggestion-${index}-${focusedSuggestion}` : undefined
                }
                aria-describedby={`error-${index}`}
                rows={3}
                maxLength={MAX_COMPLAINT_LENGTH}
              />
              {errors[index] && (
                <span id={`error-${index}`} className="error-message" role="alert">
                  {errors[index]}
                </span>
              )}
              {suggestions.length > 0 && activeSuggestionIndex === index && (
                <ul className="suggestions-list" id={`suggestions-${index}`} role="listbox">
                  {suggestions.map((suggestion, suggestionIndex) => (
                    <li
                      key={suggestionIndex}
                      id={`suggestion-${index}-${suggestionIndex}`}
                      className={`suggestion-item ${
                        focusedSuggestion === suggestionIndex ? 'focused' : ''
                      }`}
                      onClick={() => handleSuggestionClick(suggestion, index)}
                      onMouseEnter={() => setFocusedSuggestion(suggestionIndex)}
                      role="option"
                      aria-selected={focusedSuggestion === suggestionIndex}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="duration-section">
            <div className="label-tooltip">
              <label
                htmlFor={`duration${index}`}
                className="duration-label"
                aria-label={`Duration for complaint ${index + 1}`}
              >
                Duration
              </label>
              <span className="tooltip" aria-label={EDUCATIONAL_TOOLTIPS.duration}>
                ℹ️
              </span>
            </div>
            <div className="duration-group">
              <input
                type="number"
                id={`duration${index}`}
                placeholder="e.g., 3"
                value={durationsState[index]}
                onChange={(e) => handleDurationChange(index, e.target.value)}
                className="duration-input"
                min="0"
                step="1"
                aria-describedby={`duration-unit-${index}`}
              />
              <select
                id={`duration-unit-${index}`}
                value={units[index]}
                onChange={(e) => handleUnitChange(index, e.target.value)}
                className="duration-select"
              >
                {DURATION_UNITS.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="severity-section">
            <div className="label-tooltip">
              <label
                htmlFor={`severity${index}`}
                className="severity-label"
                aria-label={`Severity for complaint ${index + 1}`}
              >
                Severity
              </label>
              <span className="tooltip" aria-label={EDUCATIONAL_TOOLTIPS.severity}>
                ℹ️
              </span>
            </div>
            <select
              id={`severity${index}`}
              value={severitiesState[index]}
              onChange={(e) => handleSeverityChange(index, e.target.value)}
              className="severity-select"
            >
              {SEVERITY_LEVELS.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
          {complaints.length > 1 && (
            <button
              className="remove-complaint-btn"
              onClick={() => removeComplaint(index)}
              aria-label={`Remove complaint ${index + 1}`}
            >
              Remove
            </button>
          )}
        </div>
      )),
    [
      complaints,
      durationsState,
      units,
      severitiesState,
      suggestions,
      activeSuggestionIndex,
      focusedSuggestion,
      errors,
      handleComplaintChange,
      handleKeyDown,
      handleDurationChange,
      handleUnitChange,
      handleSeverityChange,
      handleSuggestionClick,
      removeComplaint,
    ]
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Chief Complaints</CardTitle>
        <button
          className="add-complaint-btn"
          onClick={addComplaint}
          aria-label="Add new complaint"
          disabled={complaints.length >= 5}
        >
          Add Complaint
        </button>
      </CardHeader>
      <CardContent>
        <div className="educational-note">
          <strong>Tip:</strong> Elicit the chief complaint in the patient's own words, then clarify with specific questions about onset, duration, and severity. Use the OPQRST framework (Onset, Provocation, Quality, Radiation, Severity, Time) for a thorough history.
        </div>
        <div className="complaint-grid">{complaintCards}</div>
      </CardContent>
    </Card>
  );
};

export default ChiefComplaint;