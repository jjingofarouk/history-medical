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
  clinicalInfo: `Geographic history is crucial in Ugandan clinical practice due to marked regional variations in disease epidemiology. The 2016 Uganda Demographic and Health Survey reveals striking disparities: under-5 mortality ranges from 53/1000 in Central to 96/1000 in Northern regions, reflecting differential access to care and disease burden.

Central Region (especially Kampala's informal settlements): 
- Cholera incidence reaches 12.7/1000 during outbreaks (MoH 2019)
- TB prevalence is 3× higher than rural areas (498 vs 162/100,000)
- Air pollution (PM2.5 5× WHO limits) drives COPD prevalence to 18.7% in adults >30 (CHAKA study 2021)

Eastern Region (Lake Kyoga basin):
- Schistosomiasis affects 43% of lakeside communities (MOH 2020)
- Podoconiosis prevalence reaches 5.2% in barefoot farming populations (Neglected Trop Dis 2018)
- Hepatitis B surface antigen positivity 8.9% vs national 4.3% (Uganda Cancer Inst)

Northern Region (post-conflict):
- PTSD affects 27% of adults in Gulu district (JAMA 2012)
- Nodding syndrome clusters in Kitgum/Pader (WHO 2017)
- Snakebite mortality 4.2/100,000 (3× national avg) due to delayed care

Western Region:
- HIV prevalence varies from 6.1% (Kigezi) to 13.8% (Ankole) (UPHIA 2020)
- Brucellosis seroprevalence 17% in pastoral communities (BMC Infect Dis)
- Konzo (cassava-associated paralysis) in Bundibugyo (Trop Med Int Health)

Emerging patterns:
1. Urbanization is creating dual burdens - Kampala shows rising NCDs (hypertension 26.4%) alongside persistent infections
2. Climate-sensitive diseases: Malaria transmission periods have increased by 8 weeks in Hoima district since 2000
3. Antimicrobial resistance: MDR-TB is 2.4× more common in border districts (Uganda TB Survey 2021)

Practical implications:
- A patient from Mayuge with hematuria needs schisto ELISA
- Psychotic symptoms in Gulu warrant trauma history
- Unresponsive seizures in Kitgum should prompt nodding syndrome evaluation
- Non-healing ulcers in Kasese may be Buruli ulcer

This geographic lens enables efficient differential diagnosis and targeted testing, particularly crucial in resource-limited settings where exhaustive testing isn't feasible. Always update knowledge - new foci emerge (e.g., 2023 Marburg in Kween).`,
};

export default districtOptions;