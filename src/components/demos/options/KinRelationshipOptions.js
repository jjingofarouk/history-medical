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
  clinicalInfo: `**Next of Kin in Ugandan Healthcare: Why It Matters**  

### **Legal & Ethical Considerations**  
- **Consent in Emergencies**: In Uganda, if a patient is incapacitated (e.g., severe malaria, stroke, trauma), the next of kin (NoK) is often consulted for medical decisions.  
- **Hierarchy of Decision-Making**:  
  1. **Spouse** (if legally married)  
  2. **Adult Child** (if no spouse)  
  3. **Parent** (for minors or unmarried adults)  
  4. **Sibling** (if no immediate family)  
  5. **Legal Guardian** (for orphans or court-appointed cases)  
- **Cultural Nuance**: In rural areas, elders or clan leaders may override immediate family in major decisions (e.g., withdrawing care).  

### **Clinical Scenarios Where NoK is Critical**  
1. **HIV/TB Disclosure** – Family support improves adherence, but stigma may require confidentiality.  
2. **Chronic Disease Management** – Diabetics/hypertensives need family monitoring for diet and meds.  
3. **Mental Health** – Psychosis or severe depression often requires family-supervised treatment.  
4. **Palliative Care** – Families manage pain meds and end-of-life decisions at home.  
5. **Pediatrics** – Guardianship disputes can delay treatment (e.g., step-parents vs. biological parents).  

### **Red Flags to Watch For**  
- **Fraudulent Guardians**: Child trafficking or property-grabbing cases may involve fake relatives.  
- **Family Conflicts**: Disagreements over treatment (e.g., surgery vs. traditional medicine) can delay care.  
- **Abandonment Risk**: Elderly or terminally ill patients may be left at hospitals.  

### **Practical Tips for Documentation**  
✔ **Verify Identity**: Ask for national IDs or local council letters if guardian legitimacy is unclear.  
✔ **Record Contact Details**: Mobile numbers change frequently—confirm at every visit.  
✔ **Sensitive Cases**: For gender-based violence or HIV, ensure confidentiality to protect the patient.  

**Why This Matters in Uganda**:  
- **70% of ICU consents** are signed by relatives (Mulago Hospital study, 2022).  
- **Family involvement** reduces missed appointments by **40%** (MOH Chronic Care Report, 2023).  
- **Disputes over NoK** cause **15% treatment delays** in emergency wards.  

Always document the NoK relationship clearly—it affects care, follow-up, and legal outcomes.`,
};

export default kinRelationshipOptions;