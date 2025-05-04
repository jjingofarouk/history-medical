import React, { useState } from 'react';
import { examinationSystems } from './ExaminationSystems'; // Assuming this contains your systems data
import './ExaminationFindings.css';

const ExaminationFindings = () => {
  const [selectedSystem, setSelectedSystem] = useState('');
  const [findings, setFindings] = useState({});

  const handleSystemChange = (event) => {
    setSelectedSystem(event.target.value);
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
        {type === 'options' && expected.map((option) => (
          <label key={option} className="checkbox-item">
            <input
              type="checkbox"
              checked={findings[systemName]?.[category]?.[name]?.value === option || false}
              onChange={(e) =>
                handleFindingChange(systemName, category, name, e.target.checked ? option : '', type)
              }
            />
            {option}
          </label>
        ))}
        {type === 'range' && (
          <input
            type="number"
            value={findings[systemName]?.[category]?.[name]?.value || ''}
            onChange={(e) =>
              handleFindingChange(systemName, category, name, e.target.value, type)
            }
            min={min}
            max={max}
            placeholder={`Enter value (Expected: ${min}-${max})`}
            className="text-field"
          />
        )}
        {type === 'text' && (
          <input
            type="text"
            value={findings[systemName]?.[category]?.[name]?.value || ''}
            onChange={(e) =>
              handleFindingChange(systemName, category, name, e.target.value, type)
            }
            placeholder={`Enter text (Expected: ${expected})`}
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
      return <p className="not-relevant">Not relevant.</p>;
    }

    return (
      <div className="card">
        <div className="card-header">
          <h2>{`${selectedSystem} Examination`}</h2>
        </div>
        <div className="card-content">
          {Object.keys(system.findings).map((category) => (
            <div key={category}>
              <h3 className="category-title">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <hr className="divider" />
              {Array.isArray(system.findings[category]) && system.findings[category].length > 0 ? (
                system.findings[category].map((finding) =>
                  renderFindingControl(selectedSystem, category, finding)
                )
              ) : (
                <p className="no-findings">No findings for {category}</p>
              )}
            </div>
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
          <select
            value={selectedSystem}
            onChange={handleSystemChange}
            className="select-box"
          >
            <option value="">-- Select System --</option>
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