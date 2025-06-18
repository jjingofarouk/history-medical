import React from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import InputGroup from './InputGroup';
import prefixOptions from './options/PrefixOptions';
import genderOptions from './options/GenderOptions';
import occupationOptions from './options/OccupationOptions';
import maritalStatusOptions from './options/MaritalStatusOptions';
import kinRelationshipOptions from './options/KinRelationshipOptions';
import nationalityOptions from './options/NationalityOptions';
import tribeOptions from './options/TribeOptions';
import religionOptions from './options/ReligionOptions';
import districtOptions from './options/DistrictOptions';
import { Box, Card, CardHeader, CardContent, Typography, Grid } from '@mui/material';
import './PersonalInfo.css';

const PersonalInfo = ({ personalInfo, handleInputChange }) => {
  const handleChange = (section, field, value) => {
    handleInputChange(section, field, value);
  };

  const nameClinicalInfo = 'A patient’s full name is the cornerstone of accurate identification in Uganda’s overburdened health system. Misidentification risks mismanagement, such as incorrect antiretroviral dispensing in HIV clinics or errors in surgical scheduling, particularly in busy facilities like Mulago Hospital.';
  const dobClinicalInfo = 'Date of birth determines age-specific risks in Uganda. Neonates face sepsis, children under five are prone to malaria and malnutrition, and elders in rural areas like Luwero often present with untreated hypertension or cataracts. Precise age guides dosing and screening protocols.';
  const nokClinicalInfo = 'In Uganda, where sudden deaths from road accidents or severe malaria are common, the next of kin ensures rapid decision-making for unconscious patients. Rural families often rely on extended relatives, critical for consent in life-saving interventions like cesarean sections.';
  const phoneClinicalInfo = 'A reliable phone number is indispensable in Uganda’s fragmented healthcare system. It enables follow-up for defaulters on TB or HIV treatment, especially in remote districts like Arua, where patients travel far to access care and may miss appointments without reminders.';
  const ninClinicalInfo = 'The National ID number links patient records across Uganda’s health facilities, reducing duplication in HIV or immunization registries. Inaccurate NINs lead to fragmented care, particularly for mobile populations like traders in Kampala’s markets.';
  const emailClinicalInfo = 'Email, though less common in rural Uganda, is vital for urban patients receiving lab results or teleconsultations. It supports chronic disease management, such as diabetes monitoring, by enabling timely communication in resource-constrained settings like Jinja’s referral hospitals.';

  return (
    <Box className="personal-info-container">
      <Card className="personal-info-card" elevation={3}>
        <CardHeader
          title={<Typography variant="h5" className="card-title">Personal Information</Typography>}
          className="card-header"
        />
        <CardContent className="card-content">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <SelectField
                label="Prefix"
                name="prefix"
                value={personalInfo.prefix}
                onChange={(e) => handleChange('personalInfo', 'prefix', e.target.value)}
                options={prefixOptions.options}
                clinicalInfo={prefixOptions.clinicalInfo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                label="Full Name"
                name="name"
                value={personalInfo.name}
                onChange={(e) => handleChange('personalInfo', 'name', e.target.value)}
                placeholder="e.g., John Kagwa"
                clinicalInfo={nameClinicalInfo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                value={personalInfo.dateOfBirth}
                onChange={(e) => handleChange('personalInfo', 'dateOfBirth', e.target.value)}
                clinicalInfo={dobClinicalInfo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField
                label="Gender"
                name="gender"
                value={personalInfo.gender}
                onChange={(e) => handleChange('personalInfo', 'gender', e.target.value)}
                options={genderOptions.options}
                clinicalInfo={genderOptions.clinicalInfo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField
                label="Occupation"
                name="occupation"
                value={personalInfo.occupation}
                onChange={(e) => handleChange('personalInfo', 'occupation', e.target.value)}
                options={occupationOptions.options}
                clinicalInfo={occupationOptions.clinicalInfo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField
                label="Marital Status"
                name="maritalStatus"
                value={personalInfo.maritalStatus}
                onChange={(e) => handleChange('personalInfo', 'maritalStatus', e.target.value)}
                options={maritalStatusOptions.options}
                clinicalInfo={maritalStatusOptions.clinicalInfo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                label="Next of Kin"
                name="nok"
                value={personalInfo.nok}
                onChange={(e) => handleChange('personalInfo', 'nok', e.target.value)}
                placeholder="e.g., Jane Nakato"
                clinicalInfo={nokClinicalInfo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField
                label="Relationship to Kin"
                name="kinRelationship"
                value={personalInfo.kinRelationship}
                onChange={(e) => handleChange('personalInfo', 'kinRelationship', e.target.value)}
                options={kinRelationshipOptions.options}
                clinicalInfo={kinRelationshipOptions.clinicalInfo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField
                label="Nationality"
                name="nationality"
                value={personalInfo.nationality}
                onChange={(e) => handleChange('personalInfo', 'nationality', e.target.value)}
                options={nationalityOptions.options}
                clinicalInfo={nationalityOptions.clinicalInfo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField
                label="Ethnicity/Tribe"
                name="tribe"
                value={personalInfo.tribe}
                onChange={(e) => handleChange('personalInfo', 'tribe', e.target.value)}
                groupedOptions={tribeOptions.groupedOptions}
                clinicalInfo={tribeOptions.clinicalInfo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField
                label="Religion"
                name="religion"
                value={personalInfo.religion}
                onChange={(e) => handleChange('personalInfo', 'religion', e.target.value)}
                groupedOptions={religionOptions.groupedOptions}
                clinicalInfo={religionOptions.clinicalInfo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField
                label="District of Residence"
                name="address"
                value={personalInfo.address}
                onChange={(e) => handleChange('personalInfo', 'address', e.target.value)}
                groupedOptions={districtOptions.groupedOptions}
                clinicalInfo={districtOptions.clinicalInfo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                label="Phone Number"
                name="phone"
                value={personalInfo.phone}
                onChange={(e) => handleChange('personalInfo', 'phone', e.target.value)}
                placeholder="e.g., +256 712 345 678"
                clinicalInfo={phoneClinicalInfo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                label="NIN (National ID No.)"
                name="nin"
                value={personalInfo.nin}
                onChange={(e) => handleChange('personalInfo', 'nin', e.target.value)}
                placeholder="e.g., CM123456789ABCDE"
                clinicalInfo={ninClinicalInfo}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Email Address"
                name="email"
                type="email"
                value={personalInfo.email}
                onChange={(e) => handleChange('personalInfo', 'email', e.target.value)}
                placeholder="e.g., patient@example.com"
                clinicalInfo={emailClinicalInfo}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PersonalInfo;