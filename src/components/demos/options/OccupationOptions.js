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
  clinicalInfo: 'Occupation in Uganda directly correlates with health risks. Farmers face pesticide exposure and zoonotic diseases like brucellosis, common in cattle-rearing regions like Mbarara. Urban traders may present with respiratory issues from air pollution in Kampala. Unemployed patients often delay seeking care, complicating tuberculosis or HIV management.',
};

export default occupationOptions;