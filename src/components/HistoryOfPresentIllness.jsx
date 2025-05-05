import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import TextArea from './TextArea';
import Input from './Input';
import { socratesFields } from './socratesFields';
import './HistoryOfPresentIllness.css';

const ButtonSelect = ({ options, value, onChange, placeholder }) => {
  const [otherText, setOtherText] = useState('');

  const handleButtonClick = (option) => {
    if (option === 'Other') {
      onChange('Other');
    } else {
      onChange(option);
      setOtherText('');
    }
  };

  return (
    <div className="button-select">
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${value === option ? 'active' : ''}`}
            onClick={() => handleButtonClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {value === 'Other' && (
        <Input
          className="other-input"
          placeholder={placeholder}
          value={otherText}
          onChange={(e) => {
            setOtherText(e.target.value);
            onChange(`Other: ${e.target.value}`);
          }}
        />
      )}
    </div>
  );
};

const HistoryOfPresentIllness = ({ historyOfPresentIllness, handleInputChange }) => {
  const [descriptionLength, setDescriptionLength] = useState(0);
  const maxDescriptionLength = 500;

  const handleDescriptionChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxDescriptionLength) {
      setDescriptionLength(text.length);
      handleInputChange('historyOfPresentIllness', '', text);
    }
  };

  return (
    <Card className="hpi-card">
      <CardHeader>
        <CardTitle>History of Presenting Complaints</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="input-group">
          <div className="input-container full-width">
            <label className="input-label">Detailed Description</label>
            <TextArea
              className="input-textarea"
              placeholder="e.g., Describe the pain intensity, duration, or triggers"
              value={historyOfPresentIllness[''] || ''}
              onChange={handleDescriptionChange}
            />
            <div className="character-counter">
              {descriptionLength}/{maxDescriptionLength} characters
            </div>
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
              />
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
            />
          </div>
          <div className="input-container">
            <label className="input-label">Character</label>
            <ButtonSelect
              options={socratesFields.find((f) => f.key === 'character').options}
              value={historyOfPresentIllness['character'] || ''}
              onChange={(value) => handleInputChange('historyOfPresentIllness', 'character', value)}
              placeholder={socratesFields.find((f) => f.key === 'character').placeholder}
            />
          </div>
        </div>

        <div className="input-group">
          {socratesFields.slice(3, 5).map(({ key, label, options, placeholder }) => (
            <div key={key} className="input-container">
              <label className="input-label">{label}</label>
              <ButtonSelect
                options={options}
                value={historyOfPresentIllness[key] || ''}
                onChange={(value) => handleInputChange('historyOfPresentIllness', key, value)}
                placeholder={placeholder}
              />
            </div>
          ))}
        </div>

        <div className="input-group">
          {socratesFields.slice(5, 7).map(({ key, label, options, placeholder }) => (
            <div key={key} className="input-container">
              <label className="input-label">{label}</label>
              <ButtonSelect
                options={options}
                value={historyOfPresentIllness[key] || ''}
                onChange={(value) => handleInputChange('historyOfPresentIllness', key, value)}
                placeholder={placeholder}
              />
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
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HistoryOfPresentIllness;