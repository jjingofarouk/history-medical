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
  clinicalInfo: 'The next of kin’s relationship is vital in Uganda’s collectivist culture, where family often makes treatment decisions. For critically ill patients, such as those with advanced malaria or stroke, identifying a reliable decision-maker (e.g., spouse or guardian) ensures timely consent for procedures, especially in under-resourced hospitals.',
};

export default kinRelationshipOptions;