export const severityOptions = [
  '1 - Minimal (barely noticeable, no functional impact)',
  '2',
  '3',
  '4',
  '5 - Moderate (noticeable, affects daily activities)',
  '6',
  '7',
  '8',
  '9',
  '10 - Severe (debilitating, prevents all activity)',
];

export const characterOptions = [
  'Aching',           // Common in musculoskeletal pain
  'Sharp',           // Common in acute injuries or visceral pain
  'Dull',            // Common in chronic or visceral pain
  'Throbbing',       // Common in vascular or inflammatory pain
  'Burning',         // Common in neuropathic pain
  'Stabbing',        // Common in acute visceral or somatic pain
  'Cramping',        // Common in gastrointestinal or muscular pain
  'Squeezing',       // Common in cardiac or esophageal pain
  'Pressure',        // Common in cardiac or tension headaches
  'Tingling',        // Common in neuropathic pain
  'Numbness',        // Common in neuropathic or compressive pain
  'Lancinating',     // Common in neuropathic pain (e.g., trigeminal neuralgia)
  'Gnawing',         // Common in gastrointestinal pain
  'Colicky',         // Common in biliary or renal pain
  'Other',
];

export const radiationOptions = [
  'None',                          // Most common, localized pain
  'To the left arm',               // Common in cardiac pain
  'To the right arm',              // Less common but seen in cardiac or cervical pain
  'To the back',                   // Common in pancreatic or aortic pain
  'To the chest',                  // Common in esophageal or pulmonary pain
  'To the jaw',                    // Common in cardiac pain
  'To the shoulder',               // Common in diaphragmatic or gallbladder pain
  'To the abdomen',                // Common in referred visceral pain
  'To the neck',                   // Common in cervical or cardiac pain
  'To the leg',                    // Common in sciatica or vascular pain
  'To the head',                   // Common in migraines or tension headaches
  'To the face',                   // Common in trigeminal neuralgia
  'To the scapula',                // Common in biliary or pancreatic pain
  'Other',
];

export const associationsOptions = [
  'Nausea',                        // Common in visceral pain
  'Vomiting',                      // Common in gastrointestinal or migraine
  'Fatigue',                       // Common in systemic illness
  'Fever',                         // Common in infectious or inflammatory conditions
  'Chills',                        // Common in infections
  'Sweating',                      // Common in cardiac or infectious conditions
  'Shortness of breath',           // Common in cardiac or pulmonary conditions
  'Cough',                         // Common in respiratory conditions
  'Diarrhea',                      // Common in gastrointestinal conditions
  'Constipation',                  // Common in gastrointestinal conditions
  'Dizziness',                     // Common in cardiovascular or neurologic conditions
  'Palpitations',                  // Common in cardiac or anxiety-related conditions
  'Chest tightness',               // Common in cardiac or pulmonary conditions
  'Loss of appetite',              // Common in systemic or gastrointestinal conditions
  'Weight loss',                   // Common in malignancy or chronic illness
  'Headache',                      // Common in neurologic or systemic conditions
  'Confusion',                     // Common in metabolic or neurologic conditions
  'Visual changes',                // Common in neurologic or hypertensive conditions
  'Weakness',                      // Common in neurologic or systemic conditions
  'Joint swelling',                // Common in rheumatologic conditions
  'Rash',                          // Common in allergic or infectious conditions
  'Syncope',                       // Less common, seen in cardiovascular conditions
  'Urinary symptoms',              // Common in renal or urologic conditions
  'Other',
];

export const timeCourseOptions = [
  'Constant',                      // Common in chronic or severe acute pain
  'Intermittent',                  // Common in episodic conditions (e.g., migraines)
  'Fluctuating',                   // Common in inflammatory or neuropathic pain
  'Waxing and waning',             // Common in visceral pain (e.g., biliary colic)
  'Progressively worsening',       // Common in malignancy or infection
  'Improving',                     // Common in resolving conditions
  'Recurring',                     // Common in cyclic conditions (e.g., menstrual pain)
  'Episodic',                      // Common in migraines or seizures
];

export const exacerbatingRelievingOptions = [
  'Movement',                      // Common in musculoskeletal pain
  'Rest',                          // Common in musculoskeletal or inflammatory pain
  'Food intake',                   // Common in gastrointestinal pain
  'Positioning',                   // Common in musculoskeletal or visceral pain
  'Medications',                   // Common in most pain types
  'Deep inspiration',              // Common in pleuritic or pericardial pain
  'Coughing',                      // Common in pulmonary or musculoskeletal pain
  'Swallowing',                    // Common in esophageal pain
  'Palpation',                     // Common in somatic or visceral pain
  'Temperature changes',           // Common in neuropathic or inflammatory pain
  'Stress',                        // Common in tension headaches or cardiac pain
  'Lifting',                       // Common in musculoskeletal pain
  'Bending',                       // Common in spinal or musculoskeletal pain
  'Urination',                     // Common in urologic pain
  'Defecation',                    // Common in gastrointestinal or pelvic pain
  'Other',
];

export const siteOptions = [
  'Chest',                         // Common in cardiac, pulmonary pain
  'Abdomen - Right upper quadrant', // Common in hepatic or biliary pain
  'Abdomen - Left upper quadrant',  // Common in splenic or gastric pain
  'Abdomen - Epigastric',           // Common in gastric or pancreatic pain
  'Abdomen - Periumbilical',        // Common in appendiceal or small bowel pain
  'Abdomen - Right lower quadrant', // Common in appendicitis
  'Abdomen - Left lower quadrant',  // Common in diverticulitis
  'Back - Lower',                  // Common in musculoskeletal or renal pain
  'Back - Upper',                  // Common in musculoskeletal or aortic pain
  'Head',                          // Common in headaches or neurologic pain
  'Neck',                          // Common in musculoskeletal or cervical pain
  'Shoulder - Left',               // Common in referred cardiac or diaphragmatic pain
  'Shoulder - Right',              // Common in biliary or diaphragmatic pain
  'Arm - Left',                    // Common in cardiac or musculoskeletal pain
  'Arm - Right',                   // Common in musculoskeletal pain
  'Leg - Left',                    // Common in sciatica or vascular pain
  'Leg - Right',                   // Common in sciatica or vascular pain
  'Hip - Left',                    // Common in arthritis or musculoskeletal pain
  'Hip - Right',                   // Common in arthritis or musculoskeletal pain
  'Knee - Left',                   // Common in arthritis or injury
  'Knee - Right',                  // Common in arthritis or injury
  'Ankle - Left',                  // Common in injury or arthritis
  'Ankle - Right',                 // Common in injury or arthritis
  'Wrist - Left',                  // Common in injury or arthritis
  'Wrist - Right',                 // Common in injury or arthritis
  'Elbow - Left',                  // Common in injury or arthritis
  'Elbow - Right',                 // Common in injury or arthritis
  'Face',                          // Common in trigeminal neuralgia or dental pain
  'Pelvis',                        // Common in gynecologic or urologic pain
  'Generalized',                   // Common in systemic conditions
  'Other',
];

export const onsetOptions = [
  'Sudden',                        // Common in acute conditions (e.g., MI, fracture)
  'Gradual',                       // Common in inflammatory or degenerative conditions
  'Insidious',                     // Common in chronic or malignant conditions
  'Traumatic',                     // Common in injury-related pain
  'Other',
];

export const socratesFields = [
  {
    key: 'site',
    label: 'Site of Pain',
    options: siteOptions,
    placeholder: 'e.g., Right upper quadrant, Left lower back',
  },
  {
    key: 'onset',
    label: 'Onset',
    options: onsetOptions,
    placeholder: 'e.g., Sudden after lifting, Gradual over weeks',
  },
  {
    key: 'onsetDate',
    label: 'Onset Date',
    placeholder: 'Select the date symptoms began',
    type: 'date',
  },
  {
    key: 'character',
    label: 'Character of Pain',
    options: characterOptions,
    placeholder: 'e.g., Sharp, Burning, Colicky',
  },
  {
    key: 'radiation',
    label: 'Radiation of Pain',
    options: radiationOptions,
    placeholder: 'e.g., Radiates to left arm or jaw',
  },
  {
    key: 'associations',
    label: 'Associated Symptoms',
    options: associationsOptions,
    placeholder: 'e.g., Nausea, Shortness of breath, Fever',
  },
  {
    key: 'timeCourse',
    label: 'Time Course',
    options: timeCourseOptions,
    placeholder: 'e.g., Constant, Intermittent, Waxing and waning',
  },
  {
    key: 'exacerbatingRelievingFactors',
    label: 'Exacerbating/Relieving Factors',
    options: exacerbatingRelievingOptions,
    placeholder: 'e.g., Worsens with movement, Relieved by rest',
  },
  {
    key: 'severity',
    label: 'Severity of Pain',
    options: severityOptions,
    placeholder: 'e.g., 5 - Moderate, affects daily activities',
  },
];