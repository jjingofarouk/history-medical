const nationalityOptions = {
  options: [
    { value: 'Ugandan', label: 'Ugandan' },
    { value: 'Kenyan', label: 'Kenyan' },
    { value: 'Rwandan', label: 'Rwandan' },
    { value: 'Tanzanian', label: 'Tanzanian' },
    { value: 'South_Sudanese', label: 'South Sudanese' },
    { value: 'Congolese', label: 'Congolese (DRC)' },
    { value: 'Burundian', label: 'Burundian' },
    { value: 'Other', label: 'Other' },
  ],
  clinicalInfo: `Nationality-Specific Health Considerations in Uganda

Legal/Ethical Notes:
- Refugees: Eligible for free HIV/TB care but not chronic disease management
- Cross-border workers: Require special documentation for ART refills
- Asylum seekers: Must be reported to UNHCR within 48 hours of identification

Clinical Relevance:
1. South Sudanese:
   - 42% have latent TB (BidiBidi Camp screening)
   - High prevalence of conflict-related PTSD (37%)
   - Vitamin A deficiency in 68% of under-5s

2. Congolese (DRC):
   - 22% malaria prevalence at entry (higher than Ugandan average)
   - Suspect Ebola exposure during outbreaks
   - High rates of sexual violence-related complications

3. Kenyans/Tanzanians:
   - Lake Victoria fisherfolk: schistosomiasis (55% positive serology)
   - Truck drivers: HIV prevalence 26% (EASTF 2023 study)
   - Often present late with advanced cancers

4. Rwandans/Burundians:
   - Higher incidence of sickle cell disease
   - Mental health disorders from genocide trauma
   - Unique snake envenomation patterns

Practical Tips:
For Refugees:
- Mandatory screening: TB (sputum), malaria (RDT), malnutrition (MUAC)
- Document vaccination history (often incomplete)
- Provide multi-language health education materials

For Cross-Border Populations:
- Screen for:
  - Schistosomiasis (hematuria questionnaire)
  - Occupational lung diseases (miners)
  - Sexually transmitted infections

For Ugandan Nationals:
- Regional variations matter:
  - Karamojong: Brucellosis screening
  - Batwa pygmies: Unique genetic disorders
  - Fishing communities: Hepatitis B vaccination

Cultural Context:
- South Sudanese: Traditional bone-setting complications common
- Congolese: 60% prefer traditional healers first
- Kenyans: High mobile population complicates follow-up
- Urban migrants: Often lack tribal immunity to local diseases

Documentation Needs:
- Always record:
  - Country of origin AND region
  - Duration in Uganda
  - Refugee status (with documentation)
- Special flags:
  * "DRC - Ebola contact tracing needed"
  * "South Sudanese - trauma history"
  * "Cross-border trader - high HIV risk"

Disease Risks by Nationality:
┌───────────────┬──────────────────────────────┐
│ Nationality   │ Priority Screening           │
├───────────────┼──────────────────────────────┤
│ South Sudanese│ TB, Malnutrition, PTSD      │
│ Congolese     │ Malaria, Ebola, Sexual violence│
│ Kenyan        │ HIV, Schistosomiasis        │
│ Rwandan       │ Sickle cell, Mental health  │
└───────────────┴──────────────────────────────┘

Emerging Concerns:
1. DRC: Rising measles cases crossing borders
2. South Sudan: Resurgent kala-azar in refugees
3. Regional: Multi-drug resistant malaria clusters

Key References:
- Uganda Refugee Health Policy 2022
- East African Community Disease Surveillance
- MoH Cross-Border Health Guidelines`
};

export default nationalityOptions;