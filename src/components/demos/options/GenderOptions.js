const genderOptions = {
  options: [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'intersex', label: 'Intersex' },
    { value: 'non_binary', label: 'Non-binary' },
    { value: 'prefer_not_to_say', label: 'Prefer not to say' },
  ],
  clinicalInfo: `**Critical Gender-Specific Clinical Considerations:**

**For Biological Females:**
▶︎ Cervical Cancer: 80% present at Stage III/IV (avg. survival <1yr without treatment)
▶︎ Pregnancy Risks: 336 maternal deaths/100,000 births (Pre-eclampsia #1 cause)
▶︎ Autoimmune: 3× higher lupus rates than men, often diagnosed late
▶︎ Medication: Need 30% lower dose of zolpidem (higher sedation risk)

**For Biological Males:**
▶︎ Trauma: 89% of RTAs involve males (40% alcohol-related)
▶︎ Silent MIs: 50% present with "atypical" symptoms (fatigue, not chest pain)
▶︎ Prostate: PSA >10ng/ml in 18% of men >50 in Kampala (Jinja Hosp Study)
▶︎ Mental Health: 75% of suicides are male (most untreated depression)

**Intersex Patients:**
▶︎ 1 in 1,500 births in Uganda (often hidden)
▶︎ High risk for: 
   - Adrenal crises (check electrolytes urgently if vomiting)
   - Gonadal tumors (ultrasound screening mandatory by age 15)
   - Osteoporosis (start DEXA scans at puberty)

**Non-Binary/Gender Diverse:**
▶︎ 62% delay healthcare due to stigma (UHRC 2023)
▶︎ Watch for: 
   - Self-harm scars (assess suicide risk at every visit)
   - Hormone misuse (black market testosterone injections causing liver damage)
   - STI reinfection (due to avoidance of follow-up)

**Must-Do Clinical Actions:**
1. FEMALES: 
   - Visual Inspection with Acetic Acid (VIA) starting at 25yo
   - Hemoglobin check at every ANC visit (58% are anemic)
   - Screen for domestic violence (1 in 3 experience it)

2. MALES:
   - AUDIT-C alcohol screening at every visit
   - Teach "silent MI" symptoms
   - Digital rectal exam starting at 40 for high-risk groups

3. INTERSEX/NON-BINARY:
   - Use chosen name (reduces suicide risk by 56%)
   - Baseline bone density scan if on gender-affirming hormones
   - Screen for anal cancer if AMAB (assigned male at birth)

**Red Flags by Gender:**
♀️ Female: 
- Irregular bleeding → Rule out cervical CA first
- Chronic pelvic pain → 40% have untreated PID

♂️ Male: 
- New erectile dysfunction → Early sign of vascular disease
- Breast enlargement → Check liver function and estradiol

⚧️ Gender Diverse:
- Voice changes + acne → Likely unsupervised hormone use
- Injection site abscesses → Common with silicone misuse

**The Bottom Line:** 
Gender changes your differential diagnosis, screening priorities, and even medication doses. Getting it right isn't political - it's lifesaving clinical medicine.`,
};

export default genderOptions;