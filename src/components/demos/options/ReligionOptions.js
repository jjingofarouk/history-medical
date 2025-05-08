const religionOptions = {
  groupedOptions: [
    {
      label: 'Christianity',
      options: [
        { value: 'catholic', label: 'Roman Catholic' },
        { value: 'anglican', label: 'Anglican (Church of Uganda)' },
        { value: 'pentecostal', label: 'Pentecostal (Born Again)' },
        { value: 'sda', label: 'Seventh-Day Adventist' },
        { value: 'orthodox', label: 'Orthodox' },
        { value: 'other_christian', label: 'Other Christian' },
      ],
    },
    {
      label: 'Islam',
      options: [
        { value: 'sunni', label: 'Sunni Muslim' },
        { value: 'shia', label: 'Shia Muslim' },
        { value: 'ahmadiyya', label: 'Ahmadiyya Muslim' },
      ],
    },
    {
      label: 'Other',
      options: [
        { value: 'traditional', label: 'African Traditional Religion' },
        { value: 'bahai', label: 'Bahá\'í Faith' },
        { value: 'hindu', label: 'Hindu' },
        { value: 'none', label: 'None (Atheist/Agnostic)' },
      ],
    },
  ],
  clinicalInfo: 'Religion shapes health decisions in Uganda. Pentecostal patients may prioritize faith healing, delaying treatment for conditions like epilepsy or diabetes. Muslim women may require female clinicians for cultural sensitivity, impacting gynecological care. Traditional believers may use herbal remedies, complicating tuberculosis or HIV treatment regimens.',
};

export default religionOptions;