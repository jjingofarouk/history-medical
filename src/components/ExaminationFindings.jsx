import React, { useState } from 'react';
import { examinationSystems } from './ExaminationSystems';
import './ExaminationFindings.css';

const ButtonSelect = ({ options, value = [], onChange, placeholder, exclusive = false }) => {
  const [otherText, setOtherText] = useState('');

  const handleButtonClick = (option) => {
    let updatedValue;
    if (option === 'Other') {
      updatedValue = ['Other'];
      setOtherText('');
    } else {
      if (exclusive) {
        updatedValue = value.includes(option) ? [] : [option];
      } else {
        updatedValue = value.includes(option)
          ? value.filter((val) => val !== option)
          : [...value, option];
      }
    }
    onChange(updatedValue);
  };

  return (
    <div className="button-select">
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`finding-option ${value.includes(option) ? 'active' : ''}`}
            onClick={() => handleButtonClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {value.includes('Other') && (
        <input
          className="finding-input"
          placeholder={placeholder}
          value={otherText}
          onChange={(e) => {
            setOtherText(e.target.value);
            onChange([...value.filter((v) => v !== 'Other'), `Other: ${e.target.value}`]);
          }}
        />
      )}
    </div>
  );
};

const ExaminationFindings = ({ examinationFindings = {}, handleInputChange }) => {
  const [selectedSystem, setSelectedSystem] = useState('');
  const [openAccordions, setOpenAccordions] = useState({});

  const handleSystemChange = (systemName) => {
    setSelectedSystem(systemName);
    setOpenAccordions({});
  };

  const toggleAccordion = (category) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleFindingChange = (systemName, category, findingName, value, findingType) => {
    const updatedFindings = {
      ...examinationFindings,
      [systemName]: {
        ...examinationFindings[systemName],
        [category]: {
          ...examinationFindings[systemName]?.[category],
          [findingName]: {
            value,
            type: findingType,
          },
        },
      },
    };

    handleInputChange('examinationFindings', updatedFindings);
  };

  const renderFindingControl = (systemName, category, finding) => {
    const { name, expected = [], type, min, max, exclusive = false } = finding || {};
    const currentValue = examinationFindings[systemName]?.[category]?.[name]?.value || (type === 'options' ? [] : '');

    if (!name || !type) return null;

    return (
      <div key={name} className="finding-control">
        <label className="finding-label">{name}</label>
        {type === 'options' && (
          <ButtonSelect
            options={expected}
            value={Array.isArray(currentValue) ? currentValue : [currentValue]}
            onChange={(value) => handleFindingChange(systemName, category, name, value, type)}
            placeholder={`Enter ${name.toLowerCase()} (e.g., ${expected[0] || 'value'})`}
            exclusive={exclusive}
          />
        )}
        {(type === 'range' || type === 'custom') && (
          <input
            type={type === 'range' ? 'number' : 'text'}
            value={currentValue}
            onChange={(e) => handleFindingChange(systemName, category, name, e.target.value, type)}
            min={min}
            max={max}
            placeholder={
              type === 'range'
                ? `Enter value (${min}-${max})`
                : `Enter ${name.toLowerCase()} (e.g., ${expected[0] || 'value'})`
            }
            className="finding-input"
          />
        )}
      </div>
    );
  };

  const renderSystemFindings = () => {
    if (!selectedSystem) {
      return (
        <div className="no-selection">
          <p>Please select a system to begin recording findings.</p>
        </div>
      );
    }

    const system = examinationSystems.find((sys) => sys?.name === selectedSystem);

    if (!system || !system.findings) {
      return <p className="no-findings">No relevant findings available.</p>;
    }

    return (
      <div className="system-card">
        <div className="system-card-header">
          <h2>{selectedSystem} Examination</h2>
        </div>
        <div className="system-card-content">
          {Object.keys(system.findings).map((category) =>
            system.findings[category]?.length > 0 ? (
              <div key={category} className="accordion">
                <div
                  className={`accordion-header ${openAccordions[category] ? 'active' : ''}`}
                  onClick={() => toggleAccordion(category)}
                >
                  <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                  <span className="accordion-icon">{openAccordions[category] ? '−' : '+'}</span>
                </div>
                <div className={`accordion-content ${openAccordions[category] ? 'active' : ''}`}>
                  {system.findings[category].map((finding) =>
                    renderFindingControl(selectedSystem, category, finding)
                  )}
                </div>
              </div>
            ) : null
          )}
          <button className="save-button">Save Examination Findings</button>
        </div>
      </div>
    );
  };

  return (
    <div className="examination-container">
      <div className="system-selector-card">
        <div className="system-selector-header">
          <h2>Physical Examination</h2>
        </div>
        <div className="system-selector-content">
          <p>Select a system to document examination findings:</p>
          <select
            className="system-dropdown"
            value={selectedSystem}
            onChange={(e) => handleSystemChange(e.target.value)}
            data-testid="system-dropdown"
          >
            <option value="">Select a system</option>
            {examinationSystems.map((system) => (
              <option key={system.name} value={system.name}>
                {system.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {renderSystemFindings()}
    </div>
  );
};

export default ExaminationFindings;
