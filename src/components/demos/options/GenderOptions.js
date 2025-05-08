const genderOptions = {
  options: [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'intersex', label: 'Intersex' },
    { value: 'non_binary', label: 'Non-binary' },
    { value: 'prefer_not_to_say', label: 'Prefer not to say' },
  ],
  clinicalInfo: `Gender-Specific Clinical Practice Guidelines

Legal/Ethical Notes:
- Consent: Females under 18 require guardian consent for HIV testing (not males)
- Documentation: Biological sex must match lab references (e.g., Hb ranges)
- Intersex: Court order required for gender marker changes in Uganda

Clinical Relevance:
Females:
- Lifetime risk of maternal death: 1 in 49 (Uganda MoH 2023)
- Cervical cancer kills 22 women daily (80% preventable via screening)
- Autoimmune diseases peak 30-50 years (check TSH in fatigue)

Males:
- 7-year shorter life expectancy than women (56 vs 63 years)
- 89% of occupational injuries (construction, fishing, boda-bodas)
- Prostate cancer: 2nd leading cancer death after age 60

Practical Tips:
For Female Patients:
1. Always ask: 
   - Last menstrual period (anemia workup)
   - Number of pregnancies (multiparity risks)
   - Contraceptive use (DVT screening)

2. Essential screening:
   - VIA every 3 years starting at 25
   - Breast exam annually after 30
   - Hemoglobin at every ANC visit

For Male Patients:
1. Routine checks:
   - Testicular exam ages 15-40 (1 in 250 cancer risk)
   - Alcohol screening using AUDIT-C
   - Blood pressure annually after 35

2. High-risk groups:
   - Boda-boda drivers: TBI assessment
   - Fishermen: Schisto serology
   - Miners: Silicosis screening

For Intersex Patients:
- Emergency protocol: Hydrocortisone for adrenal crisis
- Developmental: Monitor puberty progression annually
- Surgical: Document any prior interventions

For Non-Binary Patients:
- Mental health: PHQ-9 at every visit
- Hormone therapy: Monitor liver enzymes q3mo
- STI screening: More frequent than cisgender patients

Cultural Context:
- Rural areas: 60% of women deliver outside health facilities
- Fishing communities: Higher transactional sex (HIV risk)
- Urban youth: Growing LGBTQ+ healthcare needs

Documentation Needs:
- Always record:
  - Biological sex for lab reference ranges
  - Gender identity for patient-centered care
  - Sexual practices for risk assessment
- Special notes:
  * "Intersex - requires endocrine follow-up"
  * "Gender-affirming hormones in use"
  * "Declined gender-specific screening"

Critical Medications by Gender:
┌────────────┬──────────────────────────────┐
│ Gender     │ Special Considerations       │
├────────────┼──────────────────────────────┤
│ Female     │ Reduce zolpidem dose 30%    │
│ Male       │ Higher opioid overdose risk │
│ Intersex   │ Glucocorticoid emergency kit│
└────────────┴──────────────────────────────┘

Emerging Concerns:
1. Teen girls: Rising STEMI rates with oral contraceptive use
2. Young men: Synthetic androgen liver toxicity
3. Transgender: Unregulated silicone injection complications

Key References:
- Uganda Clinical Guidelines 2023
- WHO Gender and Health Toolkit
- Ministry of Health Gender Policy`
};

export default genderOptions;