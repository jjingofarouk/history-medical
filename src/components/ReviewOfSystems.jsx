import React, { useState } from 'react';
import './ReviewOfSystems.css';

const systems = [
  {
    name: 'Constitutional Symptoms',
    items: ['Fever', 'Chills', 'Weight loss', 'Fatigue', 'Night sweats'],
  },
  {
    name: 'Eyes',
    items: ['Blurred vision', 'Double vision', 'Eye pain', 'Redness', 'Vision changes'],
  },
  {
    name: 'ENT (Ears, Nose, Throat)',
    items: ['Hearing loss', 'Tinnitus', 'Earache', 'Nasal congestion', 'Sore throat'],
  },
  {
    name: 'Cardiovascular',
    items: ['Chest pain', 'Palpitations', 'Shortness of breath', 'Swelling of legs'],
  },
  {
    name: 'Respiratory',
    items: ['Cough', 'Shortness of breath', 'Wheezing', 'Sputum production'],
  },
  {
    name: 'Gastrointestinal',
    items: ['Abdominal pain', 'Nausea', 'Vomiting', 'Diarrhea', 'Constipation'],
  },
  {
    name: 'Genitourinary',
    items: ['Dysuria', 'Hematuria', 'Incontinence', 'Urgency', 'Frequency'],
  },
  {
    name: 'Musculoskeletal',
    items: ['Joint pain', 'Stiffness', 'Back pain', 'Muscle weakness', 'Swelling'],
  },
  {
    name: 'Skin',
    items: ['Rash', 'Itching', 'Dry skin', 'Lesions', 'Bruising'],
  },
  {
    name: 'Neurologic',
    items: ['Headache', 'Dizziness', 'Numbness', 'Seizures', 'Tingling'],
  },
  {
    name: 'Psychiatric',
    items: ['Anxiety', 'Depression', 'Mood swings', 'Hallucinations', 'Memory loss'],
  },
  {
    name: 'Endocrine',
    items: ['Heat intolerance', 'Cold intolerance', 'Excessive thirst', 'Excessive urination'],
  },
  {
    name: 'Hematologic/Lymphatic',
    items: ['Easy bruising', 'Frequent infections', 'Swollen lymph nodes', 'Bleeding tendency'],
  },
  {
    name: 'Allergic/Immunologic',
    items: ['Allergic reactions', 'Frequent colds', 'Seasonal allergies', 'Autoimmune issues'],
  },
];

const ReviewOfSystems = ({ handleSystemReview }) => {
  const [selectedSystem, setSelectedSystem] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState({});
  const [openAccordions, setOpenAccordions] = useState({});

  const handleSystemChange = (systemName) => {
    setSelectedSystem(systemName);
    setOpenAccordions({});
  };

  const toggleAccordion = (systemName) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [systemName]: !prev[systemName],
    }));
  };

  const handleCheckboxChange = (systemName, symptom) => {
    const updatedSymptoms = { ...selectedSymptoms };
    if (!updatedSymptoms[systemName]) {
      updatedSymptoms[systemName] = [];
    }
    if (updatedSymptoms[systemName].includes(symptom)) {
      updatedSymptoms[systemName] = updatedSymptoms[systemName].filter((s) => s !== symptom);
    } else {
      updatedSymptoms[systemName].push(symptom);
    }
    setSelectedSymptoms(updatedSymptoms);
    handleSystemReview(systemName, updatedSymptoms[systemName]);
  };

  const renderSymptoms = () => {
    if (!selectedSystem) {
      return (
        <div className="no-selection">
          <p>Please select a system to begin reviewing symptoms.</p>
        </div>
      );
    }

    const system = systems.find((sys) => sys.name === selectedSystem);
    if (!system || !system.items) {
      return <p className="no-symptoms">No symptoms available.</p>;
    }

    return (
      <div className="system-card">
        <div className="system-card-header">
          <h2>{selectedSystem}</h2>
        </div>
        <div className="system-card-content">
          <div className="accordion">
            <div
              className={`accordion-header ${openAccordions[selectedSystem] ? 'active' : ''}`}
              onClick={() => toggleAccordion(selectedSystem)}
            >
              <h3>Symptoms</h3>
              <span className="accordion-icon">{openAccordions[selectedSystem] ? '−' : '+'}</span>
            </div>
            <div className={`accordion-content ${openAccordions[selectedSystem] ? 'active' : ''}`}>
              <div className="symptom-list">
                {system.items.map((symptom, index) => (
                  <div key={index} className="symptom-item">
                    <label className="symptom-label">
                      <input
                        type="checkbox"
                        value={symptom}
                        checked={selectedSymptoms[selectedSystem]?.includes(symptom) || false}
                        onChange={() => handleCheckboxChange(selectedSystem, symptom)}
                        className="symptom-checkbox"
                      />
                      <span className="symptom-text">{symptom}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Split systems: 1-2 fixed tabs, rest in scrollable container
  const fixedSystems = systems.slice(0, 2); // First two systems
  const scrollableSystems = systems.slice(2); // Remaining systems

  return (
    <div className="ros-container">
      <div className="system-selector-card">
        <div className="system-selector-header">
          <h2>Review of Systems</h2>
        </div>
        <div className="system-selector-content">
          <p>Select a system to document symptoms:</p>
          <div className="system-tabs-container" data-testid="system-tabs-container">
            <div className="system-tabs">
              {fixedSystems.map((system) => (
                <button
                  key={system.name}
                  className={`tab-button ${selectedSystem === system.name ? 'active' : ''}`}
                  onClick={() => handleSystemChange(system.name)}
                >
                  {system.name}
                </button>
              ))}
              <div className="scrollable-tabs" data-testid="scrollable-tabs">
                {scrollableSystems.map((system) => (
                  <button
                    key={system.name}
                    className={`tab-button scrollable-tab ${selectedSystem === system.name ? 'active' : ''}`}
                    onClick={() => handleSystemChange(system.name)}
                  >
                    {system.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderSymptoms()}
    </div>
  );
};

export default ReviewOfSystems;