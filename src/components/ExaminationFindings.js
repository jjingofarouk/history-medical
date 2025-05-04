import React, { useState } from 'react';
import { examinationSystems } from './ExaminationSystems';
import './ExaminationFindings.css';

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
            value: value,
            type: findingType,
          },
        },
      },
    };
    handleInputChange('examinationFindings', updatedFindings);
  };

  const renderFindingControl = (systemName, category, finding) => {
    const { name, expected, type, min, max } = finding;
    const currentValue = examinationFindings[systemName]?.[category]?.[name]?.value || '';

    return (
      <div key={name} className="finding-control">
        <label className routes="finding-label">{name}</label>
        {type === 'options' && (
          <div className="options-container">
            {expected.map((option) => (
              <button
                key={option}
                className={`finding-option ${currentValue === option ? 'active' : ''}`}
                onClick={() =>
                  handleFindingChange(
                    systemName,
                    category,
                    name,
                    currentValue === option ? '' : option,
                    type
                  )
                }
              >
                {option}
              </button>
            ))}
          </div>
        )}
        {(type === 'range' || type === 'custom') && (
          <input
            type={type === 'range' ? 'number' : 'text'}
            value={currentValue}
            onChange={(e) =>
              handleFindingChange(systemName, category, name, e.target.value, type)
            }
            min={min}
            max={max}
            placeholder={
              type === 'range'
                ? `Enter value (${min}-${max})`
                : `Enter ${name.toLowerCase()} (e.g., ${expected})`
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

    const system = examinationSystems.find((sys) => sys.name === selectedSystem);

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
            system.findings[category].length > 0 && (
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
            )
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
          <div className="system-tabs">
            {examinationSystems.map((system, index) => (
              <button
                key={system.name}
                className={`tab-button ${selectedSystem === system.name ? 'active' : ''}`}
                onClick={() => handleSystemChange(system.name)}
                style={{ '--order': index }}
              >
                {system.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      {renderSystemFindings()}
    </div>
  );
};

export default ExaminationFindings;