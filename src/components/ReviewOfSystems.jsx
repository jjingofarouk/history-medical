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

const ReviewOfSystems = ({ patientData, handleInputChange }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState(patientData.reviewOfSystems || {});

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
    handleInputChange('reviewOfSystems', systemName, updatedSymptoms[systemName]);
  };

  return (
    <div className="ros-container">
      {systems.map((system, index) => (
        <div key={index} className="ros-system">
          <h3 className="system-title">{system.name}</h3>
          <div className="ros-items">
            {system.items.map((symptom, symptomIndex) => (
              <div key={symptomIndex} className="ros-item">
                <label className="ros-label">
                  <input
                    type="checkbox"
                    value={symptom}
                    checked={selectedSymptoms[system.name]?.includes(symptom) || false}
                    onChange={() => handleCheckboxChange(system.name, symptom)}
                  />
                  {symptom}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewOfSystems;