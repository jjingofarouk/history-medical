export const severityOptions = [
  '1 - Mild',
  '2',
  '3',
  '4',
  '5 - Moderate',
  '6',
  '7',
  '8',
  '9',
  '10 - Severe',
];

export const characterOptions = [
  'Sharp',
  'Dull',
  'Throbbing',
  'Burning',
  'Aching',
  'Stabbing',
  'Cramping',
  'Tingling',
  'Numbness',
  'Pressure',
  'Squeezing',
  'Other',
];

export const radiationOptions = [
  'None',
  'To the arm',
  'To the leg',
  'To the back',
  'To the chest',
  'To the abdomen',
  'To the neck',
  'To the head',
  'To the face',
  'Other',
];

export const associationsOptions = [
  'Nausea',
  'Vomiting',
  'Diarrhea',
  'Fever',
  'Chills',
  'Fatigue',
  'Sweating',
  'Cough',
  'Shortness of breath',
  'Palpitations',
  'Dizziness',
  'Confusion',
  'Changes in vision',
  'Changes in appetite',
  'Other',
];

export const timeCourseOptions = [
  'Constant',
  'Intermittent',
  'Progressively worsening',
  'Improving',
  'Unchanged',
  'Fluctuating',
  'Recurring',
];

export const exacerbatingRelievingOptions = [
  'Rest',
  'Activity',
  'Medications',
  'Positioning',
  'Temperature changes',
  'Food intake',
  'Stress',
  'Coughing/Sneezing',
  'Lifting',
  'Other',
];

export const siteOptions = [
  'Head',
  'Neck',
  'Chest',
  'Abdomen',
  'Back',
  'Left Arm',
  'Right Arm',
  'Left Leg',
  'Right Leg',
  'Shoulder',
  'Hip',
  'Knee',
  'Ankle',
  'Wrist',
  'Elbow',
  'Face',
  'Pelvis',
  'Other',
];

export const onsetOptions = [
  'Sudden',
  'Gradual',
  'Insidious',
  'Other',
];

export const socratesFields = [
  {
    key: 'site',
    label: 'Site',
    options: siteOptions,
    placeholder: 'e.g., Left shoulder, Right abdomen',
  },
  {
    key: 'onset',
    label: 'Onset',
    options: onsetOptions,
    placeholder: 'e.g., Specific date or event',
  },
  {
    key: 'onsetDate',
    label: 'Onset Date',
    placeholder: 'Select the date it started',
    type: 'date',
  },
  {
    key: 'character',
    label: 'Character',
    options: characterOptions,
    placeholder: 'e.g., Describe the nature of the pain',
  },
  {
    key: 'radiation',
    label: 'Radiation',
    options: radiationOptions,
    placeholder: 'e.g., Where it spreads',
  },
  {
    key: 'associations',
    label: 'Associations',
    options: associationsOptions,
    placeholder: 'e.g., Other symptoms experienced',
  },
  {
    key: 'timeCourse',
    label: 'Time Course',
    options: timeCourseOptions,
    placeholder: 'e.g., How it changes over time',
  },
  {
    key: 'exacerbatingRelievingFactors',
    label: 'Exacerbating/Relieving Factors',
    options: exacerbatingRelievingOptions,
    placeholder: 'e.g., What makes it better or worse',
  },
  {
    key: 'severity',
    label: 'Severity',
    options: severityOptions,
    placeholder: 'e.g., Scale of 1-10',
  },
];