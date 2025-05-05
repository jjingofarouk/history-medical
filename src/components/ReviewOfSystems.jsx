import React, { useState } from 'react';
import './ReviewOfSystems.css';

const systems = [
  {
    name: 'General/Constitutional',
    items: [
      'Fever', 'Chills', 'Night sweats', 'Fatigue', 'Weakness',
      'Weight loss (unintentional)', 'Weight gain', 'Loss of appetite',
      'Malaise', 'Difficulty sleeping', 'Frequent illness'
    ]
  },
  {
    name: 'Eyes',
    items: [
      'Blurred vision', 'Double vision', 'Eye pain', 'Redness',
      'Dry eyes', 'Excessive tearing', 'Light sensitivity',
      'Floaters', 'Flashing lights', 'Vision loss',
      'Discharge', 'Swelling', 'Itching'
    ]
  },
  {
    name: 'ENT (Ears, Nose, Throat)',
    items: [
      'Hearing loss', 'Tinnitus', 'Ear pain', 'Ear discharge',
      'Nasal congestion', 'Sinus pain', 'Nosebleeds',
      'Sore throat', 'Hoarseness', 'Difficulty swallowing',
      'Mouth ulcers', 'Tooth pain', 'Bleeding gums',
      'Altered taste', 'Bad breath'
    ]
  },
  {
    name: 'Cardiovascular',
    items: [
      'Chest pain', 'Palpitations', 'Irregular heartbeat',
      'Shortness of breath', 'Exercise intolerance',
      'Leg swelling', 'Leg pain with walking',
      'Varicose veins', 'Fainting spells', 'Dizziness',
      'High blood pressure', 'Low blood pressure'
    ]
  },
  {
    name: 'Respiratory',
    items: [
      'Cough', 'Sputum production', 'Blood in sputum',
      'Wheezing', 'Shortness of breath', 'Chest tightness',
      'Snoring', 'Sleep apnea', 'Frequent pneumonia',
      'Pleuritic pain', 'Clubbing of fingers'
    ]
  },
  {
    name: 'Gastrointestinal',
    items: [
      'Abdominal pain', 'Nausea', 'Vomiting', 'Diarrhea',
      'Constipation', 'Blood in stool', 'Black/tarry stools',
      'Heartburn', 'Indigestion', 'Bloating',
      'Excessive gas', 'Difficulty swallowing',
      'Jaundice', 'Hemorrhoids', 'Rectal pain'
    ]
  },
  {
    name: 'Genitourinary',
    items: [
      'Painful urination', 'Frequent urination',
      'Urgency', 'Incontinence', 'Blood in urine',
      'Cloudy urine', 'Strong urine odor',
      'Decreased urine output', 'Flank pain',
      'Genital sores', 'Genital discharge',
      'Erectile dysfunction', 'Testicular pain',
      'Pelvic pain', 'Menstrual irregularities'
    ]
  },
  {
    name: 'Musculoskeletal',
    items: [
      'Joint pain', 'Joint swelling', 'Joint stiffness',
      'Muscle pain', 'Muscle weakness', 'Back pain',
      'Neck pain', 'Limited range of motion',
      'Bone pain', 'Fractures', 'Muscle cramps',
      'Gait problems', 'Difficulty walking'
    ]
  },
  {
    name: 'Skin/Nails/Hair',
    items: [
      'Rash', 'Itching', 'Dry skin', 'Skin lesions',
      'Skin discoloration', 'Easy bruising',
      'Slow wound healing', 'Hair loss',
      'Nail changes', 'Excessive sweating',
      'Cold intolerance', 'Heat intolerance',
      'Skin growths', 'Moles changing'
    ]
  },
  {
    name: 'Neurological',
    items: [
      'Headache', 'Dizziness', 'Vertigo', 'Numbness',
      'Tingling', 'Weakness', 'Tremors', 'Seizures',
      'Memory problems', 'Concentration difficulties',
      'Speech problems', 'Coordination problems',
      'Balance problems', 'Loss of consciousness',
      'Sensory changes'
    ]
  },
  {
    name: 'Psychiatric',
    items: [
      'Depression', 'Anxiety', 'Mood swings',
      'Irritability', 'Suicidal thoughts',
      'Hallucinations', 'Delusions',
      'Sleep disturbances', 'Appetite changes',
      'Panic attacks', 'Phobias',
      'Memory problems', 'Concentration issues',
      'Psychotic symptoms'
    ]
  },
  {
    name: 'Endocrine',
    items: [
      'Heat/cold intolerance', 'Excessive thirst',
      'Excessive hunger', 'Excessive urination',
      'Neck swelling', 'Hand tremor',
      'Hair thinning', 'Skin changes',
      'Unexplained weight changes',
      'Fatigue', 'Irregular periods',
      'Decreased libido'
    ]
  },
  {
    name: 'Hematologic/Lymphatic',
    items: [
      'Easy bruising', 'Prolonged bleeding',
      'Frequent infections', 'Swollen lymph nodes',
      'Pale skin', 'Fatigue', 'Shortness of breath',
      'Blood clots', 'Enlarged spleen',
      'Night sweats', 'Unexplained fever'
    ]
  },
  {
    name: 'Allergic/Immunologic',
    items: [
      'Seasonal allergies', 'Food allergies',
      'Drug allergies', 'Insect allergies',
      'Hives', 'Swelling', 'Anaphylaxis',
      'Frequent infections', 'Autoimmune symptoms',
      'Immunodeficiency'
    ]
  },
  {
    name: 'Sleep',
    items: [
      'Insomnia', 'Excessive sleepiness',
      'Snoring', 'Gasping at night',
      'Restless legs', 'Nightmares',
      'Sleepwalking', 'Teeth grinding',
      'Difficulty falling asleep',
      'Difficulty staying asleep'
    ]
  }
];

const ReviewOfSystems = ({ handleSystemReview }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState({});
  const [expandedSystems, setExpandedSystems] = useState([]);

  const toggleSystem = (systemName) => {
    setExpandedSystems(prev =>
      prev.includes(systemName)
        ? prev.filter(name => name !== systemName)
        : [...prev, systemName]
    );
  };

  const handleSymptomSelect = (systemName, symptom) => {
    const updatedSymptoms = { ...selectedSymptoms };
    
    if (!updatedSymptoms[systemName]) {
      updatedSymptoms[systemName] = [];
    }

    if (updatedSymptoms[systemName].includes(symptom)) {
      updatedSymptoms[systemName] = updatedSymptoms[systemName].filter(s => s !== symptom);
    } else {
      updatedSymptoms[systemName].push(symptom);
    }

    setSelectedSymptoms(updatedSymptoms);
    handleSystemReview(systemName, updatedSymptoms[systemName]);
  };

  const isSystemExpanded = (systemName) => expandedSystems.includes(systemName);

  return (
    <div className="ros-container">
      <h1 className="ros-title">Review of Systems</h1>
      <p className="ros-subtitle">Select all symptoms that apply</p>
      
      <div className="systems-grid">
        {systems.map((system) => (
          <div key={system.name} className="system-card">
            <div 
              className="system-header"
              onClick={() => toggleSystem(system.name)}
            >
              <h3>{system.name}</h3>
              <span className="expand-icon">
                {isSystemExpanded(system.name) ? '−' : '+'}
              </span>
            </div>
            
            {isSystemExpanded(system.name) && (
              <div className="symptoms-grid">
                {system.items.map((symptom, index) => (
                  <button
                    key={index}
                    className={`symptom-button ${
                      selectedSymptoms[system.name]?.includes(symptom) ? 'selected' : ''
                    }`}
                    onClick={() => handleSymptomSelect(system.name, symptom)}
                  >
                    {symptom}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="selected-summary">
        <h3>Selected Symptoms</h3>
        {Object.keys(selectedSymptoms).filter(sys => selectedSymptoms[sys].length > 0).length > 0 ? (
          Object.entries(selectedSymptoms).map(([system, symptoms]) => (
            symptoms.length > 0 && (
              <div key={system} className="system-summary">
                <strong>{system}:</strong> {symptoms.join(', ')}
              </div>
            )
          ))
        ) : (
          <p>No symptoms selected yet</p>
        )}
      </div>
    </div>
  );
};

export default ReviewOfSystems;