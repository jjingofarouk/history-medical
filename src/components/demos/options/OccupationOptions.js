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
  clinicalInfo: `Occupation-Specific Health Risks in Uganda

Legal/Ethical Notes:
- Farmers: Mandatory reporting for pesticide poisoning cases
- Healthcare workers: Required HIV PEP within 2 hours of exposure
- Miners: Silicosis compensation claims require detailed work history

Clinical Relevance:
1. Agriculture:
   - 62% of occupational deaths (fishing accidents, snakebites)
   - Chronic pesticide exposure: 38% have neurological symptoms
   - Zoonotics: Brucellosis (12% seropositivity in cattle keepers)

2. Healthcare Workers:
   - Needlestick injuries: 3.2/year average
   - TB prevalence 4× general population
   - Highest burnout rates (62% screen positive for depression)

3. Business/Trade:
   - Market vendors: 68% have chronic back pain
   - Boda-boda drivers: 89% of traumatic brain injuries
   - High HIV risk (mobile populations)

4. Students:
   - 45% mental health issues (exam stress, substance abuse)
   - Poor nutrition (70% skip breakfast)
   - Sexual/reproductive health needs

Practical Tips:
For Farmers/Fishers:
- Annual screening: 
  - Kidney function (creatinine)
  - Schistosomiasis (urine dipstick)
  - Hearing tests (pesticide ototoxicity)

For Healthcare Workers:
- Quarterly: 
  - TB screening (sputum)
  - Mental health assessment
  - PEP eligibility review

For Urban Traders:
- Monitor for:
  - Hypertension (stress-related)
  - Chronic respiratory symptoms
  - STIs (mobile populations)

For Students:
- Essential screening:
  - Vision testing annually
  - Mental health (PHQ-9)
  - Anemia (especially females)

Cultural Context:
- Fishing communities: 60% use traditional medicine first
- Teachers: High alcohol use (stress coping)
- Religious leaders: Influence health-seeking behavior
- Retirees: 80% rely on family support

Documentation Needs:
- Always record:
  - Specific occupation (not just "business")
  - Duration in current job
  - Workplace hazards
- Special flags:
  * "Fisher - bilharzia exposure"
  * "Health worker - needlestick risk"
  * "Street vendor - air pollution exposure"

Health Risks by Occupation:
┌────────────────┬──────────────────────────────┐
│ Occupation     │ Priority Screening          │
├────────────────┼──────────────────────────────┤
│ Farmer         │ Pesticides, Zoonotics       │
│ Health worker  │ TB, Needlestick injuries    │
│ Student        │ Mental health, Nutrition    │
│ Boda-boda      │ Trauma, Substance use       │
└────────────────┴──────────────────────────────┘

Emerging Concerns:
1. Agricultural: Rising herbicide-linked kidney disease
2. Healthcare: Antimicrobial resistance in staff
3. Urban: Air pollution-related COPD in street vendors
4. Students: Synthetic drug use epidemics

Key References:
- Uganda Occupational Safety Act
- MoH Healthcare Worker Guidelines
- ILO Fishing Safety Protocols`
};


export default occupationOptions;