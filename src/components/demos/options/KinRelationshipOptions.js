const kinRelationshipOptions = {
  options: [
    { value: 'spouse', label: 'Spouse' },
    { value: 'parent', label: 'Parent' },
    { value: 'child', label: 'Child' },
    { value: 'sibling', label: 'Sibling' },
    { value: 'relative', label: 'Other Relative' },
    { value: 'friend', label: 'Friend' },
    { value: 'guardian', label: 'Legal Guardian' },
  ],
  clinicalInfo: 'Identifying the relationship to the next of kin helps determine who can make medical decisions or provide support in emergencies, ensuring effective communication and care coordination.',
};

export default kinRelationshipOptions;