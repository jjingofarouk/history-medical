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
  clinicalInfo: `Religion-Specific Healthcare Considerations in Uganda

Legal/Ethical Notes:
- Faith healing: Must document if delaying medical care (especially for children)
- Ramadan: Fasting exceptions for diabetic patients require counseling
- Blood transfusions: Jehovah's Witnesses require special consent forms

Clinical Relevance:
1. Pentecostal/Born Again:
   - 62% first seek church healing for epilepsy
   - Vaccine hesitancy in 38% of members
   - Higher rates of antidepressant discontinuation

2. Muslims:
   - 78% of women prefer female providers for OB/GYN care
   - Fasting impacts diabetes control (HbA1c spikes post-Ramadan)
   - Circumcision reduces HIV risk by 60%

3. Seventh-Day Adventists:
   - Lower rates of lifestyle diseases (vegetarian diet)
   - Higher health literacy but may refuse certain medications

4. Traditional Religion:
   - Herbal use interacts with ARVs in 45% of cases
   - 80% of mental illness cases first visit traditional healers
   - Scarification risks (tetanus, HIV transmission)

Practical Tips:
For Pentecostal Patients:
- Acknowledge faith while emphasizing medical care
- Screen for: 
  - Delayed vaccine schedules
  - Abrupt medication cessation
  - Faith-related trauma disorders

For Muslim Patients:
- Schedule procedures outside prayer times
- Provide private spaces for worship
- Monitor diabetics closely during Ramadan

For Traditional Believers:
- Ask specific herbal use questions
- Offer parallel care with traditional healers
- Check for heavy metal poisoning (some remedies)

For Non-Religious:
- Address potential stigma in rural areas
- Provide secular counseling options
- Document carefully (legal protections)

Cultural Context:
- Central: Catholic missions dominate healthcare
- Eastern: Strong Islamic influence on nutrition
- Northern: Traditional healing for war trauma
- Western: SDA health messages well-received

Documentation Needs:
- Record:
  - Specific denomination (not just "Christian")
  - Religious practices affecting care
  - Any faith-based treatment delays
- Special notes:
  * "Uses herbal enemas - monitor liver function"
  * "Fasts Ramadan - adjust medication timing"
  * "Faith healing only - child welfare risk"

Medication Considerations:
┌────────────────┬──────────────────────────────┐
│ Religion       │ Key Considerations          │
├────────────────┼──────────────────────────────┤
│ Pentecostal    │ May stop "unholy" meds      │
│ Muslim         │ Alcohol-containing drugs    │
│ SDA            │ Caffeine restrictions       │
│ Traditional    │ Herb-drug interactions      │
└────────────────┴──────────────────────────────┘

Emerging Issues:
1. Evangelical opposition to contraception
2. Muslim youth challenging gender norms
3. Traditional healer/HIV program collaborations

Key References:
- Uganda Inter-Religious Council Guidelines
- MoH Traditional Medicine Policy
- WHO Religion and Health Toolkit`
};

export default religionOptions;