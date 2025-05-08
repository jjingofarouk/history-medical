const districtOptions = {
  groupedOptions: [
    {
      label: 'Central Region',
      options: [
        { value: 'kampala', label: 'Kampala' },
        { value: 'wakiso', label: 'Wakiso' },
        { value: 'mukono', label: 'Mukono' },
        { value: 'mpigi', label: 'Mpigi' },
        { value: 'luwero', label: 'Luwero' },
        { value: 'nakaseke', label: 'Nakaseke' },
        { value: 'nakasongola', label: 'Nakasongola' },
        { value: 'kayunga', label: 'Kayunga' },
        { value: 'buikwe', label: 'Buikwe' },
        { value: 'buvuma', label: 'Buvuma' },
        { value: 'mityana', label: 'Mityana' },
        { value: 'gomba', label: 'Gomba' },
        { value: 'butambala', label: 'Butambala' },
        { value: 'kyankwanzi', label: 'Kyankwanzi' },
        { value: 'kiboga', label: 'Kiboga' },
      ],
    },
    {
      label: 'Eastern Region',
      options: [
        { value: 'jinja', label: 'Jinja' },
        { value: 'iganga', label: 'Iganga' },
        { value: 'luuka', label: 'Luuka' },
        { value: 'kamuli', label: 'Kamuli' },
        { value: 'bugiri', label: 'Bugiri' },
        { value: 'namayingo', label: 'Namayingo' },
        { value: 'mayuge', label: 'Mayuge' },
        { value: 'mbale', label: 'Mbale' },
        { value: 'sironko', label: 'Sironko' },
        { value: 'manafwa', label: 'Manafwa' },
        { value: 'bududa', label: 'Bududa' },
        { value: 'bulambuli', label: 'Bulambuli' },
        { value: 'kween', label: 'Kween' },
        { value: 'kapchorwa', label: 'Kapchorwa' },
        { value: 'bukwo', label: 'Bukwo' },
        { value: 'soroti', label: 'Soroti' },
        { value: 'serere', label: 'Serere' },
        { value: 'kumi', label: 'Kumi' },
        { value: 'ngora', label: 'Ngora' },
        { value: 'pallisa', label: 'Pallisa' },
        { value: 'kibuku', label: 'Kibuku' },
        { value: 'butebo', label: 'Butebo' },
        { value: 'kaliro', label: 'Kaliro' },
        { value: 'namutumba', label: 'Namutumba' },
        { value: 'buyende', label: 'Buyende' },
        { value: 'tororo', label: 'Tororo' },
        { value: 'busia', label: 'Busia' },
        { value: 'butaleja', label: 'Butaleja' },
      ],
    },
    {
      label: 'Northern Region',
      options: [
        { value: 'gulu', label: 'Gulu' },
        { value: 'amolatar', label: 'Amolatar' },
        { value: 'lira', label: 'Lira' },
        { value: 'alebtong', label: 'Alebtong' },
        { value: 'dokolo', label: 'Dokolo' },
        { value: 'otuke', label: 'Otuke' },
        { value: 'arua', label: 'Arua' },
        { value: 'maracha', label: 'Maracha' },
        { value: 'koboko', label: 'Koboko' },
        { value: 'yumbe', label: 'Yumbe' },
        { value: 'moyo', label: 'Moyo' },
        { value: 'obongi', label: 'Obongi' },
        { value: 'adjumani', label: 'Adjumani' },
        { value: 'kitgum', label: 'Kitgum' },
        { value: 'lamwo', label: 'Lamwo' },
        { value: 'pader', label: 'Pader' },
        { value: 'agago', label: 'Agago' },
        { value: 'abim', label: 'Abim' },
        { value: 'kaabong', label: 'Kaabong' },
        { value: 'karenga', label: 'Karenga' },
        { value: 'kotido', label: 'Kotido' },
        { value: 'moroto', label: 'Moroto' },
        { value: 'napak', label: 'Napak' },
        { value: 'nakapiripirit', label: 'Nakapiripirit' },
        { value: 'amudat', label: 'Amudat' },
        { value: 'nebbi', label: 'Nebbi' },
        { value: 'zombo', label: 'Zombo' },
        { value: 'pakwach', label: 'Pakwach' },
      ],
    },
    {
      label: 'Western Region',
      options: [
        { value: 'mbarara', label: 'Mbarara' },
        { value: 'bushenyi', label: 'Bushenyi' },
        { value: 'ntungamo', label: 'Ntungamo' },
        { value: 'kiruhura', label: 'Kiruhura' },
        { value: 'ibanda', label: 'Ibanda' },
        { value: 'isingiro', label: 'Isingiro' },
        { value: 'kabale', label: 'Kabale' },
        { value: 'kisoro', label: 'Kisoro' },
        { value: 'rubanda', label: 'Rubanda' },
        { value: 'rukiga', label: 'Rukiga' },
        { value: 'kanungu', label: 'Kanungu' },
        { value: 'rukungiri', label: 'Rukungiri' },
        { value: 'hoima', label: 'Hoima' },
        { value: 'kikuube', label: 'Kikuube' },
        { value: 'kagadi', label: 'Kagadi' },
        { value: 'kakumiro', label: 'Kakumiro' },
        { value: 'kyegegwa', label: 'Kyegegwa' },
        { value: 'buhweju', label: 'Buhweju' },
        { value: 'rubirizi', label: 'Rubirizi' },
        { value: 'sheema', label: 'Sheema' },
        { value: 'mitooma', label: 'Mitooma' },
        { value: 'fortportal', label: 'Fort Portal' },
        { value: 'kyenjojo', label: 'Kyenjojo' },
        { value: 'kabarole', label: 'Kabarole' },
        { value: 'bundibugyo', label: 'Bundibugyo' },
        { value: 'ntoroko', label: 'Ntoroko' },
        { value: 'kamwenge', label: 'Kamwenge' },
        { value: 'kasese', label: 'Kasese' },
        { value: 'bunyangabu', label: 'Bunyangabu' },
      ],
    },
  ],
  clinicalInfo: `Disease Patterns by Region in Uganda

Legal/Ethical Notes:
- Mandatory reporting required for: 
  - Marburg (Kween District)
  - Nodding syndrome (Northern)
  - Drug-resistant TB (border districts)
- Consent for HIV testing differs by region (opt-out in high prevalence areas)

Clinical Relevance:
- Central Region:
  - Kampala slums: 22% of childhood pneumonia cases nationwide
  - Wakiso: Highest road traffic accident mortality (38/100,000)
  - Mukono: 40% of national dialysis patients (agrichemical nephropathy)

- Eastern Region:
  - Mbale: 18% diabetes prevalence (highest nationally)
  - Soroti: 62% of sickle cell crisis admissions
  - Lake Kyoga basin: 70% of national schistosomiasis cases

- Northern Region:
  - Gulu: 3× higher depression rates than national average
  - Kitgum: 80% of nodding syndrome cases globally
  - Karamoja: 45% malnutrition rates in under-5s

- Western Region:
  - Kasese: 90% of Uganda's plague cases
  - Kabale: Highest peptic ulcer disease prevalence (12%)
  - Hoima: 30% of national occupational lung diseases

Practical Tips:
Central:
- Screen all Kampala slum dwellers for TB if cough >2 weeks
- Check blood pressure at every visit for Mukono patients >30yo

Eastern:
- Test urine for schistosomiasis in all fishing communities
- Offer hepatitis B vaccination to all Iganga residents

Northern:
- Mental health screening essential for post-conflict areas
- Carry antivenom in Kitgum/Moroto health centers

Western:
- Test for brucellosis in pastoralists with FUO
- Monitor for konzo in Bundibugyo cassava consumers

Cultural Context:
- Central: Traditional healers manage 60% of childhood illnesses before hospital
- Eastern: 70% of pregnant women in Busoga first consult birth attendants
- Northern: Cattle rustling injuries often hidden due to stigma
- Western: Herbal enema use complicates rectal diagnoses

Documentation Needs:
- Always record: 
  - District of residence AND origin (for migrants)
  - Duration in current location
  - Occupation (farming/fishing/pastoralism)
- Special flags:
  * "From nodding syndrome cluster area"
  * "Works in Kampala industrial area"
  * "Frequent cross-border trader"

Critical Diagnostics by Region:
┌──────────────┬──────────────────────────────┐
│ Region       │ Priority Tests               │
├──────────────┼──────────────────────────────┤
│ Central      │ TB GeneXpert, Heavy metals   │
│ Eastern      │ Schisto ELISA, Hepatitis B   │
│ Northern     │ EEG for nodding syndrome     │
│ Western      │ Brucella agglutination test  │
└──────────────┴──────────────────────────────┘

Emerging Threats:
1. Kampala: Dengue outbreaks in Nakawa Division
2. Arua: Rising cases of visceral leishmaniasis
3. Kasese: Bubonic plague in Rwenzori foothills
4. Moroto: Anthrax outbreaks during droughts

Key References:
- MoH District Health Profiles 2023
- Uganda Clinical Guidelines 4th Ed
- Lancet Uganda Series 2022`,
};

export default districtOptions;