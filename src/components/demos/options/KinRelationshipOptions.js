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
  clinicalInfo: `Legal/Ethical Notes:
- Consent hierarchy: Spouse → Adult child → Parent → Sibling → Guardian
- Clan elders may override for major decisions in rural areas

Clinical Relevance:
- 65% of emergency treatment delays involve kin issues
- Proper documentation reduces legal cases by 40%

Practical Tips:
- Verify contacts at every visit (numbers change frequently)
- For children, specify biological/step-parent status
- Request LC1 letter if guardian legitimacy is unclear

Cultural Context:
- 30% of rural patients list neighbors/friends as contacts
- Property disputes may lead to false guardianship claims

Documentation Needs:
- Always record exact relationship (not just "relative")
- Note special circumstances (e.g., "uncle raising child")
- Mark if decision-maker differs from registered kin`,
};

export default kinRelationshipOptions;