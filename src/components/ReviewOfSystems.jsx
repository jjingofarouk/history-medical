import React, { useState } from 'react';
import './ReviewOfSystems.css';

const systems = [
  {
    name: 'General/Constitutional',
    items: [
      'Fever', 'Chills', 'Night sweats', 'Fatigue', 'Generalized weakness',
      'Unintentional weight loss', 'Unintentional weight gain', 'Anorexia',
      'Malaise', 'Insomnia', 'Recurrent infections', 'Cachexia',
      'Hyperhidrosis', 'Lethargy', 'Poor exercise tolerance',
      'Generalized edema (anasarca)', 'Feeling of impending doom'
    ]
  },
  {
    name: 'Eyes',
    items: [
      'Blurred vision', 'Diplopia', 'Ocular pain', 'Conjunctival erythema',
      'Xerophthalmia', 'Epiphora', 'Photophobia', 'Floaters',
      'Photopsia', 'Visual acuity loss', 'Ocular discharge',
      'Periorbital edema', 'Ocular pruritus', 'Scotoma',
      'Peripheral vision loss', 'Color vision disturbance',
      'Proptosis', 'Enophthalmos', 'Nystagmus', 'Ocular foreign body sensation'
    ]
  },
  {
    name: 'ENT (Ears, Nose, Throat)',
    items: [
      'Sensorineural hearing loss', 'Conductive hearing loss', 'Tinnitus',
      'Otalgia', 'Otorrhea', 'Nasal congestion', 'Rhinorrhea',
      'Epistaxis', 'Sinus pressure', 'Pharyngitis', 'Dysphonia',
      'Dysphagia', 'Oral ulcers', 'Dental pain', 'Gingival bleeding',
      'Ageusia', 'Halitosis', 'Trismus', 'Tonsillar exudate',
      'Laryngeal stridor', 'Nasal crusting', 'Parotid swelling',
      'Aural fullness', 'Vertigo (otologic origin)'
    ]
  },
  {
    name: 'Cardiovascular',
    items: [
      'Angina pectoris', 'Palpitations', 'Arrhythmia', 'Dyspnea on exertion',
      'Orthopnea', 'Paroxysmal nocturnal dyspnea', 'Peripheral edema',
      'Claudication', 'Varicose veins', 'Syncope', 'Presyncope',
      'Hypertension', 'Hypotension', 'Cyanosis', 'Jugular venous distension',
      'Cold extremities', 'Raynaud phenomenon', 'Dependent rubor',
      'Postural hypotension', 'Cardiogenic shock symptoms'
    ]
  },
  {
    name: 'Respiratory',
    items: [
      'Cough (productive/non-productive)', 'Sputum production', 'Hemoptysis',
      'Wheezing', 'Dyspnea', 'Chest tightness', 'Snoring',
      'Obstructive sleep apnea', 'Recurrent pneumonia', 'Pleuritic chest pain',
      'Digital clubbing', 'Tachypnea', 'Bradypnea', 'Orthopnea',
      'Pulmonary edema symptoms', 'Bronchospasm', 'Stridor',
      'Hypoxemia symptoms', 'Hypercapnia symptoms', 'Respiratory distress'
    ]
  },
  {
    name: 'Gastrointestinal',
    items: [
      'Abdominal pain', 'Nausea', 'Vomiting', 'Diarrhea', 'Constipation',
      'Hematochezia', 'Melena', 'Gastroesophageal reflux', 'Dyspepsia',
      'Abdominal bloating', 'Flatulence', 'Dysphagia', 'Jaundice',
      'Hemorrhoids', 'Anal pain', 'Steatorrhea', 'Hematemesis',
      'Ascites', 'Epigastric tenderness', 'Right upper quadrant pain',
      'Left lower quadrant pain', 'Pruritus ani', 'Fecal incontinence',
      'Early satiety', 'Postprandial fullness'
    ]
  },
  {
    name: 'Genitourinary',
    items: [
      'Dysuria', 'Polyuria', 'Urinary urgency', 'Urinary incontinence',
      'Hematuria', 'Turbid urine', 'Malodorous urine', 'Oliguria',
      'Flank pain', 'Genital ulcers', 'Urethral discharge', 'Erectile dysfunction',
      'Testicular pain', 'Pelvic pain', 'Menorrhagia', 'Dysmenorrhea',
      'Anuria', 'Nocturia', 'Suprapubic pain', 'Vaginal discharge',
      'Dyspareunia', 'Scrotal swelling', 'Priapism', 'Amenorrhea',
      'Post-void dribbling', 'Urinary retention'
    ]
  },
  {
    name: 'Musculoskeletal',
    items: [
      'Arthralgia', 'Joint effusion', 'Morning stiffness', 'Myalgia',
      'Muscle weakness', 'Back pain', 'Cervical pain', 'Limited joint mobility',
      'Bone pain', 'Pathologic fractures', 'Muscle cramps', 'Gait instability',
      'Difficulty ambulating', 'Joint erythema', 'Joint warmth',
      'Muscle atrophy', 'Fasciculations', 'Tendon pain',
      'Bursitis symptoms', 'Spinal deformity', 'Limb deformity',
      'Myoclonus', 'Joint crepitus'
    ]
  },
  {
    name: 'Skin/Nails/Hair',
    items: [
      'Exanthem', 'Pruritus', 'Xerosis', 'Cutaneous lesions',
      'Hyperpigmentation', 'Ecchymosis', 'Delayed wound healing',
      'Alopecia', 'Onychodystrophy', 'Hyperhidrosis', 'Cold intolerance',
      'Heat intolerance', 'Cutaneous neoplasms', 'Changing nevi',
      'Erythema', 'Urticaria', 'Telangiectasia', 'Purpura',
      'Skin induration', 'Nail pitting', 'Hirsutism', 'Skin fragility',
      'Photosensitivity', 'Pallor', 'Jaundice (cutaneous)'
    ]
  },
  {
    name: 'Neurological',
    items: [
      'Cephalgia', 'Vertigo', 'Paresthesia', 'Hypoesthesia',
      'Muscle weakness', 'Tremor', 'Seizures', 'Amnesia',
      'Cognitive impairment', 'Aphasia', 'Ataxia', 'Dysmetria',
      'Syncope', 'Sensory loss', 'Cranial nerve dysfunction',
      'Hemiparesis', 'Spasticity', 'Clonus', 'Dyskinesia',
      'Myoclonus', 'Focal neurological deficits', 'Visual hallucinations',
      'Dysarthria', 'Bradykinesia', 'Resting tremor'
    ]
  },
  {
    name: 'Psychiatric',
    items: [
      'Major depressive episode', 'Generalized anxiety', 'Mood lability',
      'Irritability', 'Suicidal ideation', 'Auditory hallucinations',
      'Visual hallucinations', 'Delusions', 'Insomnia', 'Hypersomnia',
      'Anorexia nervosa symptoms', 'Panic attacks', 'Phobic disorders',
      'Cognitive dysfunction', 'Psychomotor agitation', 'Psychomotor retardation',
      'Obsessive thoughts', 'Compulsive behaviors', 'Post-traumatic stress symptoms',
      'Mania', 'Hypomania', 'Dissociative symptoms'
    ]
  },
  {
    name: 'Endocrine',
    items: [
      'Heat intolerance', 'Cold intolerance', 'Polydipsia', 'Polyphagia',
      'Polyuria', 'Goiter', 'Fine tremor', 'Diffuse hair thinning',
      'Hyperpigmentation', 'Unexplained weight loss', 'Unexplained weight gain',
      'Lethargy', 'Menstrual irregularities', 'Decreased libido',
      'Galactorrhea', 'Gynecomastia', 'Hirsutism', 'Exophthalmos',
      'Adrenal crisis symptoms', 'Hypoglycemia symptoms',
      'Hyperglycemia symptoms', 'Osteoporosis'
    ]
  },
  {
    name: 'Hematologic/Lymphatic',
    items: [
      'Ecchymosis', 'Prolonged bleeding', 'Recurrent infections',
      'Lymphadenopathy', 'Pallor', 'Fatigue', 'Dyspnea',
      'Thrombotic events', 'Splenomegaly', 'Night sweats',
      'Persistent fever', 'Petechiae', 'Purpura', 'Hematoma formation',
      'Hemarthrosis', 'Mucosal bleeding', 'Hepatosplenomegaly',
      'Bone marrow suppression symptoms', 'Anemia symptoms',
      'Leukocytosis symptoms', 'Thrombocytopenia symptoms'
    ]
  },
  {
    name: 'Allergic/Immunologic',
    items: [
      'Allergic rhinitis', 'Food hypersensitivity', 'Drug hypersensitivity',
      'Insect sting hypersensitivity', 'Urticaria', 'Angioedema',
      'Anaphylactic symptoms', 'Recurrent infections', 'Autoimmune symptoms',
      'Immunodeficiency symptoms', 'Eczema', 'Contact dermatitis',
      'Asthma (allergic component)', 'Eosinophilia symptoms',
      'Latex allergy', 'Seasonal conjunctivitis'
    ]
  },
  {
    name: 'Sleep',
    items: [
      'Insomnia', 'Hypersomnolence', 'Snoring', 'Nocturnal gasping',
      'Restless legs syndrome', 'Nightmares', 'Somnambulism',
      'Bruxism', 'Difficulty initiating sleep', 'Frequent awakenings',
      'Non-restorative sleep', 'Sleep paralysis', 'Hypnagogic hallucinations',
      'Circadian rhythm disturbance', 'Periodic limb movements'
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