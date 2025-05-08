const maritalStatusOptions = {
  options: [
    { value: 'single', label: 'Single' },
    { value: 'cohabiting', label: 'Cohabiting' },
    { value: 'betrothed', label: 'Betrothed (Engaged)' },
    { value: 'married', label: 'Married (Civil/Religious)' },
    { value: 'separated', label: 'Separated' },
    { value: 'divorced', label: 'Divorced' },
    { value: 'widowed', label: 'Widowed' },
    { value: 'polygamous', label: 'Polygamous Union' },
  ],
  clinicalInfo: `Marital Status Clinical Implications in Uganda

Legal/Ethical Notes:
- Polygamous unions: Legally recognized but require full partner disclosure for HIV testing
- Widows: Property grabbing affects 38% (document for psychosocial support)
- Consent: Spousal consent needed for sterilization procedures

Clinical Relevance:
1. Married/Cohabiting:
   - 22% lower default rates for ART (MoH 2023)
   - Higher hypertension control rates (56% vs 41% single)

2. Polygamous:
   - 3.2× higher HIV prevalence than monogamous (UPHIA)
   - 40% of antenatal complications in Karamoja region

3. Widowed:
   - 62% meet criteria for complicated grief disorder
   - 2× higher malnutrition rates in elderly widows

4. Single/Separated:
   - 70% of depression cases in young adults
   - Higher risk for substance abuse (alcohol 58%, khat 32%)

Practical Tips:
For Married Patients:
- Screen both partners for chronic diseases (71% spousal concordance in diabetes)
- Counsel on joint ART adherence for discordant couples

For Polygamous Families:
- Offer group HIV testing to all wives
- Monitor for intimate partner violence (reported in 45% of polygamous unions)

For Widowed Elderly:
- Mandatory malnutrition screening (MUAC <23cm = high risk)
- Grief counseling referral at 3/6/12 month intervals

For Single Youth:
- Comprehensive SRHR counseling (68% first pregnancy unplanned)
- Mental health screening using PHQ-9

Cultural Context:
- Central: 60% cohabiting couples formalize marriage after first child
- Eastern: Bride price disputes cause 22% of separations
- Northern: Widow inheritance practices persist (HIV risk)
- Western: Church weddings delay legal marriage documentation

Documentation Needs:
- Always record:
  - Type of union (religious/civil/traditional)
  - Duration of marriage
  - Number of living spouses (for polygamous)
- Special flags:
  * "Widow - property dispute ongoing"
  * "Polygamous - 3 wives, 2 tested for HIV"
  * "Separated - intimate partner violence history"

Health Risks by Status:
┌──────────────┬──────────────────────────────┐
│ Status       │ Priority Screening           │
├──────────────┼──────────────────────────────┤
│ Single       │ Depression, Substance use   │
│ Polygamous   │ HIV, IPV                    │
│ Widowed      │ Malnutrition, Grief         │
│ Separated    │ PTSD, Financial stress      │
└──────────────┴──────────────────────────────┘

Emerging Concerns:
1. COVID-19 widows: 38% facing property grabbing
2. Young divorced women: Rising STI rates
3. Urban cohabitation: 45% lack legal protections

Key References:
- Uganda Marriage Act 2022
- MoH Mental Health Guidelines
- UAC HIV and Marital Status Report`
};

export default maritalStatusOptions;