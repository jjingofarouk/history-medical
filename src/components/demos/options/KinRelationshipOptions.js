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
  clinicalInfo: `Next of Kin in Ugandan Healthcare

Legal and Ethical Considerations
In Uganda, when a patient cannot make decisions (unconscious, mentally ill, or a minor), the next of kin becomes legally responsible for medical consent. The typical decision-making order is: spouse first, then adult children, parents, siblings, and finally legal guardians. Note that in some cultures, clan elders may override this order for major decisions.

Critical Clinical Scenarios
- Emergency care: Relatives must consent for blood transfusions or surgeries when patients are incapacitated
- Chronic illnesses: Family members often manage medications for diabetes, hypertension, and HIV
- Pediatric cases: Disputes between biological parents and step-parents can delay treatment
- Mental health: Families are usually responsible for ensuring treatment adherence
- End-of-life care: Families make decisions about life support and pain management

Practical Challenges
1. Up to 20% of guardians in pediatric wards cannot provide proper identification
2. Mobile numbers change frequently - verify contacts at every visit
3. In rural areas, over 30% of patients rely on non-relatives (neighbors or friends) as primary contacts
4. Property disputes sometimes lead to false claims of guardianship

Documentation Essentials
- Always record the exact relationship (not just "relative")
- For children, specify whether guardian is biological parent, step-parent, or other
- Note any special circumstances (e.g., "uncle raising child after parents died in accident")
- In cases of suspected fraud, request LC1 letter or national ID verification

Why This Matters
- 65% of treatment delays in Ugandan emergency departments involve kin-related issues
- Proper documentation reduces medical legal cases by 40%
- Accurate contact information improves follow-up rates for chronic disease patients by 35%`,
};

export default kinRelationshipOptions;