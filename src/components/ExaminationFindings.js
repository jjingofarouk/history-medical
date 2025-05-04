import React, { useState } from 'react';
import { examinationSystems } from './ExaminationSystems';
import './ExaminationFindings.css';

const ExaminationFindings = () => {
  const [selectedSystem, setSelectedSystem] = useState('');
  const [openAccordions, setOpenAccordions] = useState({});
  const [findings, setFindings] = useState({});

  const handleSystemChange = (systemName) => {
    setSelectedSystem(systemName);
    setOpenAccordions({}); // Reset accordions when switching systems
  };

  const toggleAccordion = (category) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleFindingChange = (systemName, category, findingName, value, findingType) => {
    setFindings((prevFindings) => ({
      ...prevFindings,
      [systemName]: {
        ...prevFindings[systemName],
        [category]: {
          ...prevFindings[systemName]?.[category],
          [findingName]: {
            value: value,
            type: findingType,
          },
        },
      },
    }));
  };

  const renderFindingControl = (systemName, category, finding) => {
    const { name, expected, type, min, max } = finding;

    return (
      <div key={name} className="finding-control">
        <span className="finding-name">{name}:</span>
        {type === 'options' && (
          <div className="options-container">
            {expected.map((option) => (
              <button
                key={option}
                className={`finding-option ${findings[systemName]?.[category]?.[name]?.value === option ? 'active' : ''}`}
                onClick={() =>
                  handleFindingChange(
                    systemName,
                    category,
                    name,
                    findings[systemName]?.[category]?.[name]?.value === option ? '' : option,
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
            value={findings[systemName]?.[category]?.[name]?.value || ''}
            onChange={(e) =>
              handleFindingChange(systemName, category, name, e.target.value, type)
            }
            min={min}
            max={max}
            placeholder={
              type === 'range'
                ? `Enter value (${min}-${max})`
                : `Enter ${name} (e.g., ${expected})`
            }
            className="text-field"
          />
        )}
      </div>
    );
  };

  const renderSystemFindings = () => {
    if (!selectedSystem) return null;

    const system = examinationSystems.find((sys) => sys.name === selectedSystem);

    if (!system || !system.findings) {
      return <p className="not-relevant">No relevant findings.</p>;
    }

    return (
      <div className="card">
        <div className="card-header">
          <h2>{`${selectedSystem} Examination`}</h2>
        </div>
        <div className="card-content">
          {Object.keys(system.findings).map((category) => (
            system.findings[category].length > 0 && (
              <div key={category} className="accordion-section">
                <div
                  className={`accordion-header ${openAccordions[category] ? 'active' : ''}`}
                  onClick={() => toggleAccordion(category)}
                >
                  <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                  <span className="accordion-arrow">↓</span>
                </div>
                <div className={`accordion-content ${openAccordions[category] ? 'active' : ''}`}>
                  {system.findings[category].map((finding) =>
                    renderFindingControl(selectedSystem, category, finding)
                  )}
                </div>
              </div>
            )
          ))}
          <button className="save-button">Save Findings</button>
        </div>
      </div>
    );
  };

  return (
    <div className="examination-findings-container">
      <div className="card">
        <div className="card-header">
          <h2>Physical Examination</h2>
        </div>
        <div className="card-content">
          <p>Select a system to record your examination findings:</p>
          <div className="tab-nav">
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
