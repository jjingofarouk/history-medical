const occupationOptions = {
  options: [
    { value: 'agriculture', label: 'Agriculture (Farmer, Fisher, etc.)' },
    { value: 'education', label: 'Education (Teacher, Lecturer, etc.)' },
    { value: 'health', label: 'Health (Doctor, Nurse, etc.)' },
    { value: 'business', label: 'Business (Trader, Entrepreneur, etc.)' },
    { value: 'civil_service', label: 'Civil Service (Government Employee)' },
    { value: 'student', label: 'Student' },
    { value: 'religious_leader', label: 'Religious Leader' },
    { value: 'unemployed', label: 'Unemployed' },
    { value: 'retired', label: 'Retired' },
    { value: 'other', label: 'Other' },
  ],
  clinicalInfo: 'Occupation can reveal environmental exposures (e.g., pesticides in agriculture) or socioeconomic factors that impact health outcomes and access to care.',
};

export default occupationOptions;