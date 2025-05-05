import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import TextArea from './TextArea';
import Input from './Input';
import { socratesFields } from './socratesFields';
import './HistoryOfPresentIllness.css';

const MultiSelect = ({ options, value, onChange, placeholder }) => {
  const [selectedOptions, setSelectedOptions] = useState(value || []);
  const [otherText, setOtherText] = useState('');

  const handleButtonClick = (option) => {
    let updatedOptions;
    if (option === 'Other') {
      updatedOptions = selectedOptions.includes('Other')
        ? selectedOptions.filter((opt) => opt !== 'Other')
        : [...selectedOptions, 'Other'];
    } else {
      updatedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((opt) => opt !== option)
        : [...selectedOptions, option];
    }
    setSelectedOptions(updatedOptions);
    onChange(updatedOptions);
  };

  return (
    <div className="multi-select" role="group" aria-label="Multi-select options">
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOptions.includes(option) ? 'active' : ''}`}
            onClick={() => handleButtonClick(option)}
            aria-pressed={selectedOptions.includes(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {selectedOptions.includes('Other') && (
        <Input
          className="other-input"
          placeholder={placeholder}
          value={otherText}
          onChange={(e) => {
            setOtherText(e.target.value);
            const updatedOptions = selectedOptions.filter((opt) => opt !== 'Other').concat(`Other: ${e.target.value}`);
            onChange(updatedOptions);
          }}
          aria-label="Other option description"
        />
      )}
    </div>
  );
};

const HistoryOfPresentIllness = ({ historyOfPresentIllness, handleInputChange }) => {
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [errors, setErrors] = useState({});
  const [showSummary, setShowSummary] = useState(false);
  const maxDescriptionLength = 1000;

  const tooltips = {
    site: 'Specify the anatomical location (e.g., right upper quadrant for gallbladder pain).',
    onset: 'Sudden onset suggests acute conditions (e.g., myocardial infarction); insidious suggests chronic (e.g., malignancy).',
    onsetDate: 'Exact or approximate date helps determine acuity of the condition.',
    character: 'Sharp pain suggests somatic origin; burning suggests neuropathic pain.',
    radiation: 'Radiation to the left arm or jaw is common in cardiac pain; to the back in pancreatic pain.',
    associations: 'Associated symptoms (e.g., nausea, fever) help narrow differential diagnoses.',
    timeCourse: 'Constant pain suggests serious conditions; intermittent may indicate episodic issues (e.g., migraines).',
    exacerbatingRelievingFactors: 'Factors like movement or rest help differentiate musculoskeletal vs. visceral pain.',
    severity: 'Use the 1-10 scale to assess functional impact (e.g., 10 prevents all activity).',
  };

  const validateFields = () => {
    const newErrors = {};
    if (!historyOfPresentIllness.site) newErrors.site = 'Site is required.';
    if (!historyOfPresentIllness.severity) newErrors.severity = 'Severity is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateSummary = () => {
    return `
      **SOCRATES Pain Assessment Summary**
      - **Site**: ${historyOfPresentIllness.site || 'Not specified'}
      - **Onset**: ${historyOfPresentIllness.onset || 'Not specified'} ${historyOfPresentIllness.onsetDate ? `on ${historyOfPresentIllness.onsetDate}` : ''}
      - **Character**: ${historyOfPresentIllness.character || 'Not specified'}
      - **Radiation**: ${Array.isArray(historyOfPresentIllness.radiation) ? historyOfPresentIllness.radiation.join(', ') : historyOfPresentIllness.radiation || 'None'}
      - **Associations**: ${Array.isArray(historyOfPresentIllness.associations) ? historyOfPresentIllness.associations.join(', ') : historyOfPresentIllness.associations || 'None'}
      - **Time Course**: ${historyOfPresentIllness.timeCourse || 'Not specified'}
      - **Exacerbating/Relieving Factors**: ${Array.isArray(historyOfPresentIllness.exacerbatingRelievingFactors) ? historyOfPresentIllness.exacerbatingRelievingFactors.join(', ') : historyOfPresentIllness.exacerbatingRelievingFactors || 'None'}
      - **Severity**: ${historyOfPresentIllness.severity || 'Not specified'}
      - **Detailed Description**: ${historyOfPresentIllness[''] || 'Not provided'}
    `;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateSummary());
    alert('Summary copied to clipboard!');
  };

  const handleExportSummary = () => {
    const blob = new Blob([generateSummary()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SOCRATES_Summary.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDescriptionChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxDescriptionLength) {
      setDescriptionLength(text.length);
      handleInputChange('historyOfPresentIllness', '', text);
    }
  };

  useEffect(() => {
    validateFields();
  }, [historyOfPresentIllness]);

  return (
    <Card className="hpi-card" role="region" aria-labelledby="hpi-title">
      <CardHeader>
        <CardTitle id="hpi-title">History of Presenting Complaints</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="input-group">
          <div className="input-container full-width">
            <label className="input-label">Detailed Description</label>
            <TextArea
              className="input-textarea"
              placeholder="e.g., 45-year-old male with sharp epigastric pain radiating to the back, associated with nausea and vomiting, worse after eating fatty meals."
              value={historyOfPresentIllness[''] || ''}
              onChange={handleDescriptionChange}
              aria-describedby="description-tooltip"
            />
            <div className="character-counter">
              {descriptionLength}/{maxDescriptionLength} characters
            </div>
            <span id="description-tooltip" className="tooltip">
              Provide a detailed narrative including patient demographics, symptoms, and context.
            </span>
          </div>
        </div>

        <div className="input-group">
          {socratesFields.slice(0, 2).map(({ key, label, options, placeholder }) => (
            <div key={key} className="input-container">
              <label className="input-label">{label}</label>
              <ButtonSelect
                options={options}
                value={historyOfPresentIllness[key] || ''}
                onChange={(value) => handleInputChange('historyOfPresentIllness', key, value)}
                placeholder={placeholder}
                aria-describedby={`${key}-tooltip`}
              />
              {errors[key] && <span className="error">{errors[key]}</span>}
              <span id={`${key}-tooltip`} className="tooltip">{tooltips[key]}</span>
            </div>
          ))}
        </div>

        <div className="input-group">
          <div className="input-container">
            <label className="input-label">Onset Date</label>
            <Input
              type="date"
              className="input-text"
              value={historyOfPresentIllness['onsetDate'] || ''}
              onChange={(e) => handleInputChange('historyOfPresentIllness', 'onsetDate', e.target.value)}
              aria-describedby="onsetDate-tooltip"
            />
            <span id="onsetDate-tooltip" className="tooltip">{tooltips.onsetDate}</span>
          </div>
          <div className="input-container">
            <label className="input-label">Character</label>
            <ButtonSelect
              options={socratesFields.find((f) => f.key === 'character').options}
              value={historyOfPresentIllness['character'] || ''}
              onChange={(value) => handleInputChange('historyOfPresentIllness', 'character', value)}
              placeholder={socratesFields.find((f) => f.key === 'character').placeholder}
              aria-describedby="character-tooltip"
            />
            <span id="character-tooltip" className="tooltip">{tooltips.character}</span>
          </div>
        </div>

        <div className="input-group">
          {socratesFields.slice(3, 5).map(({ key, label, options, placeholder }) => (
            <div key={key} className="input-container">
              <label className="input-label">{label}</label>
              <MultiSelect
                options={options}
                value={historyOfPresentIllness[key] || []}
                onChange={(value) => handleInputChange('historyOfPresentIllness', key, value)}
                placeholder={placeholder}
                aria-describedby={`${key}-tooltip`}
              />
              <span id={`${key}-tooltip`} className="tooltip">{tooltips[key]}</span>
            </div>
          ))}
        </div>

        <div className="input-group">
          {socratesFields.slice(5, 7).map(({ key, label, options, placeholder }) => (
            <div key={key} className="input-container">
              <label className="input-label">{label}</label>
              <MultiSelect
                options={options}
                value={historyOfPresentIllness[key] || []}
                onChange={(value) => handleInputChange('historyOfPresentIllness', key, value)}
                placeholder={placeholder}
                aria-describedby={`${key}-tooltip`}
              />
              <span id={`${key}-tooltip`} className="tooltip">{tooltips[key]}</span>
            </div>
          ))}
        </div>

        <div className="input-group">
          <div className="input-container">
            <label className="input-label">Severity</label>
            <ButtonSelect
              options={socratesFields.find((f) => f.key === 'severity').options}
              value={historyOfPresentIllness['severity'] || ''}
              onChange={(value) => handleInputChange('historyOfPresentIllness', 'severity', value)}
              placeholder={socratesFields.find((f) => f.key === 'severity').placeholder}
              aria-describedby="severity-tooltip"
            />
            {errors.severity && <span className="error">{errors.severity}</span>}
            <span id="severity-tooltip" className="tooltip">{tooltips.severity}</span>
          </div>
        </div>

        <div className="summary-section">
          <button
            className="summary-toggle"
            onClick={() => setShowSummary(!showSummary)}
            aria-expanded={showSummary}
          >
            {showSummary ? 'Hide Summary' : 'Show Summary'}
          </button>
          {showSummary && (
            <div className="summary-content">
              <pre>{generateSummary()}</pre>
              <div className="summary-actions">
                <button onClick={handleCopySummary}>Copy to Clipboard</button>
                <button onClick={handleExportSummary}>Export as Text</button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default HistoryOfPresentIllness;