const tribeOptions = {
  groupedOptions: [
    {
      label: 'Bantu Groups',
      options: [
        { value: 'baganda', label: 'Baganda' },
        { value: 'banyankole', label: 'Banyankole' },
        { value: 'bakiga', label: 'Bakiga' },
        { value: 'basoga', label: 'Basoga' },
        { value: 'bagisu', label: 'Bagisu' },
        { value: 'banyoro', label: 'Banyoro' },
        { value: 'batooro', label: 'Batooro' },
        { value: 'banyarwanda', label: 'Banyarwanda' },
        { value: 'bakonjo', label: 'Bakonjo' },
      ],
    },
    {
      label: 'Nilotic Groups',
      options: [
        { value: 'acholi', label: 'Acholi' },
        { value: 'langi', label: 'Langi' },
        { value: 'alur', label: 'Alur' },
        { value: 'jopadhola', label: 'Jopadhola' },
        { value: 'iteso', label: 'Iteso' },
        { value: 'kumam', label: 'Kumam' },
      ],
    },
    {
      label: 'Other Groups',
      options: [
        { value: 'lugbara', label: 'Lugbara' },
        { value: 'madi', label: 'Madi' },
        { value: 'kakwa', label: 'Kakwa' },
        { value: 'other', label: 'Other' },
      ],
    },
  ],
  clinicalInfo: `Tribe-Specific Health Considerations in Uganda

Genetic Risks:
1. Bantu Groups:
   - Baganda: 22% sickle cell trait prevalence (screen all newborns)
   - Basoga: High G6PD deficiency (avoid primaquine)
   - Bakiga: 3× higher esophageal cancer rates
   - Bagisu: Male circumcision reduces HIV risk by 60%

2. Nilotic Groups:
   - Acholi: 80% of nodding syndrome cases
   - Langi: Elevated PTSD rates from conflict
   - Iteso: High brucellosis in cattle keepers

3. Other Groups:
   - Lugbara: Unique herbal nephrotoxicity risks
   - Madi: Elevated hypertension prevalence
   - Karamojong: 45% malnutrition in under-5s

Cultural Practices:
- Bagisu: Circumcision season injuries (July-August)
- Banyankole: High-fat diet links to cardiovascular disease
- Bakonjo: Cannabis use in traditional rituals
- Acholi: Stigma around mental health treatment

Practical Screening:
For Bantu Patients:
- Baganda: Newborn sickle cell test
- Basoga: G6PD test before antimalarials
- Bakiga: Endoscopy for chronic heartburn

For Nilotic Patients:
- Acholi: Neurological exam for nodding syndrome
- Langi: Annual mental health screening
- Iteso: Brucella serology for FUO

For Other Groups:
- Lugbara: Renal function tests
- Madi: BP monitoring at every visit
- Karamojong: MUAC screening for children

Regional Variations:
┌──────────────┬──────────────────────────────┐
│ Region       │ Priority Health Concerns     │
├──────────────┼──────────────────────────────┤
│ Central      │ Sickle cell, Hypertension    │
│ Western      │ Esophageal cancer, Alcohol   │
│ Northern     │ Nodding syndrome, PTSD       │
│ Eastern      │ Brucellosis, Malaria         │
└──────────────┴──────────────────────────────┘

Documentation Essentials:
- Record:
  - Specific tribe (not just "Bantu")
  - Traditional practices affecting health
  - Genetic risk factors
- Special notes:
  * "Baganda - sickle cell screening needed"
  * "Acholi - monitor for nodding syndrome"
  * "Karamojong - severe malnutrition"

Emerging Concerns:
1. Urbanization: Tribal dietary changes causing NCDs
2. Intertribal marriages: New genetic patterns
3. Traditional practices: Some increasing HIV risk

Key References:
- Uganda Sickle Cell Surveillance Program
- MoH Tribal Health Profiles
- WHO Indigenous Health Guidelines`
};

export default tribeOptions;