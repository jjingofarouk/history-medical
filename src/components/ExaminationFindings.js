import React, { useState } from 'react';
import { examinationSystems } from './ExaminationSystems';
import './ExaminationFindings.css';

const ExaminationFindings = () => {
  const [selectedSystem, setSelectedSystem] = useState('');
  const [openAccordions, setOpenAccordions] = useState({});
  const [findings, setFindings] = useState({});

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
        <label className="finding-label">{name}</label>
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