import React from 'react';
import './PersonalInfo.css';

const PersonalInfo = ({ personalInfo, handleInputChange }) => {
  const handleDateSelect = (e) => {
    handleInputChange('personalInfo', 'dateOfBirth', e.target.value);
  };

  return (
    <div className="personal-info-container">
      <div className="personal-info-card">
        <div className="card-header">
          <h2 className="card-title">Personal Information</h2>
        </div>
        <div className="card-content">
          <div className="input-group">
            <div className="input-container">
              <label className="input-label">Prefix</label>
              <select
                value={personalInfo.prefix || ''}
                onChange={(e) => handleInputChange('personalInfo', 'prefix', e.target.value)}
                className="input-select"
              >
                <option value="">Select Prefix</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss">Miss</option>
                <option value="Ms.">Ms.</option>
                <option value="Dr.">Dr.</option>
                <option value="Prof.">Prof.</option>
                <option value="Rev.">Rev.</option>
                <option value="Hon.">Hon.</option>
              </select>
            </div>
            <div className="input-container">
              <label className="input-label">Full Name</label>
              <input
                type="text"
                className="input-text"
                placeholder="e.g., John Kagwa"
                value={personalInfo.name || ''}
                onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-container">
              <label className="input-label">Date of Birth</label>
              <input
                type="date"
                className="input-text"
                value={personalInfo.dateOfBirth || ''}
                onChange={handleDateSelect}
              />
            </div>
            <div className="input-container">
              <label className="input-label">Gender</label>
              <select
                value={personalInfo.gender || ''}
                onChange={(e) => handleInputChange('personalInfo', 'gender', e.target.value)}
                className="input-select"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="intersex">Intersex</option>
                <option value="non_binary">Non-binary</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <div className="input-container">
              <label className="input-label">Occupation</label>
              <select
                value={personalInfo.occupation || ''}
                onChange={(e) => handleInputChange('personalInfo', 'occupation', e.target.value)}
                className="input-select"
              >
                <option value="">Select Occupation</option>
                <option value="agriculture">Agriculture (Farmer, Fisher, etc.)</option>
                <option value="education">Education (Teacher, Lecturer, etc.)</option>
                <option value="health">Health (Doctor, Nurse, etc.)</option>
                <option value="business">Business (Trader, Entrepreneur, etc.)</option>
                <option value="civil_service">Civil Service (Government Employee)</option>
                <option value="student">Student</option>
                <option value="religious_leader">Religious Leader</option>
                <option value="unemployed">Unemployed</option>
                <option value="retired">Retired</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input-container">
              <label className="input-label">Marital Status</label>
              <select
                value={personalInfo.maritalStatus || ''}
                onChange={(e) => handleInputChange('personalInfo', 'maritalStatus', e.target.value)}
                className="input-select"
              >
                <option value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="cohabiting">Cohabiting</option>
                <option value="betrothed">Betrothed (Engaged)</option>
                <option value="married">Married (Civil/Religious)</option>
                <option value="separated">Separated</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
                <option value="polygamous">Polygamous Union</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <div className="input-container">
              <label className="input-label">Next of Kin</label>
              <input
                type="text"
                className="input-text"
                placeholder="e.g., Jane Nakato"
                value={personalInfo.nok || ''}
                onChange={(e) => handleInputChange('personalInfo', 'nok', e.target.value)}
              />
            </div>
            <div className="input-container">
              <label className="input-label">Relationship to Kin</label>
              <select
                value={personalInfo.kinRelationship || ''}
                onChange={(e) => handleInputChange('personalInfo', 'kinRelationship', e.target.value)}
                className="input-select"
              >
                <option value="">Select Relationship</option>
                <option value="spouse">Spouse</option>
                <option value="parent">Parent</option>
                <option value="child">Child</option>
                <option value="sibling">Sibling</option>
                <option value="relative">Other Relative</option>
                <option value="friend">Friend</option>
                <option value="guardian">Legal Guardian</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <div className="input-container">
              <label className="input-label">Nationality</label>
              <select
                value={personalInfo.nationality || ''}
                onChange={(e) => handleInputChange('personalInfo', 'nationality', e.target.value)}
                className="input-select"
              >
                <option value="">Select Nationality</option>
                <option value="Ugandan">Ugandan</option>
                <option value="Kenyan">Kenyan</option>
                <option value="Rwandan">Rwandan</option>
                <option value="Tanzanian">Tanzanian</option>
                <option value="South_Sudanese">South Sudanese</option>
                <option value="Congolese">Congolese (DRC)</option>
                <option value="Burundian">Burundian</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="input-container">
              <label className="input-label">Ethnicity/Tribe</label>
              <select
                value={personalInfo.tribe || ''}
                onChange={(e) => handleInputChange('personalInfo', 'tribe', e.target.value)}
                className="input-select"
              >
                <option value="">Select Tribe</option>
                <optgroup label="Bantu Groups">
                  <option value="baganda">Baganda</option>
                  <option value="banyankole">Banyankole</option>
                  <option value="bakiga">Bakiga</option>
                  <option value="basoga">Basoga</option>
                  <option value="bagisu">Bagisu</option>
                  <option value="banyoro">Banyoro</option>
                  <option value="batooro">Batooro</option>
                  <option value="banyarwanda">Banyarwanda</option>
                  <option value="bakonjo">Bakonjo</option>
                </optgroup>
                <optgroup label="Nilotic Groups">
                  <option value="acholi">Acholi</option>
                  <option value="langi">Langi</option>
                  <option value="alur">Alur</option>
                  <option value="jopadhola">Jopadhola</option>
                  <option value="iteso">Iteso</option>
                  <option value="kumam">Kumam</option>
                </optgroup>
                <optgroup label="Other Groups">
                  <option value="lugbara">Lugbara</option>
                  <option value="madi">Madi</option>
                  <option value="kakwa">Kakwa</option>
                  <option value="other">Other</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className="input-group">
            <div className="input-container">
              <label className="input-label">Religion</label>
              <select
                value={personalInfo.religion || ''}
                onChange={(e) => handleInputChange('personalInfo', 'religion', e.target.value)}
                className="input-select"
              >
                <option value="">Select Religion</option>
                <optgroup label="Christianity">
                  <option value="catholic">Roman Catholic</option>
                  <option value="anglican">Anglican (Church of Uganda)</option>
                  <option value="pentecostal">Pentecostal (Born Again)</option>
                  <option value="sda">Seventh-Day Adventist</option>
                  <option value="orthodox">Orthodox</option>
                  <option value="other_christian">Other Christian</option>
                </optgroup>
                <optgroup label="Islam">
                  <option value="sunni">Sunni Muslim</option>
                  <option value="shia">Shia Muslim</option>
                  <option value="ahmadiyya">Ahmadiyya Muslim</option>
                </optgroup>
                <optgroup label="Other">
                  <option value="traditional">African Traditional Religion</option>
                  <option value="bahai">Bahá'í Faith</option>
                  <option value="hindu">Hindu</option>
                  <option value="none">None (Atheist/Agnostic)</option>
                </optgroup>
              </select>
            </div>
            <div className="input-container">
              <label className="input-label">District of Residence</label>
              <select
                value={personalInfo.address || ''}
                onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                className="input-select"
              >
                <option value="">Select District</option>
                <optgroup label="Central Region">
                  <option value="kampala">Kampala</option>
                  <option value="wakiso">Wakiso</option>
                  <option value="mukono">Mukono</option>
                  <option value="mpigi">Mpigi</option>
                  <option value="luwero">Luwero</option>
                </optgroup>
                <optgroup label="Eastern Region">
                  <option value="jinja">Jinja</option>
                  <option value="iganga">Iganga</option>
                  <option value="mbale">Mbale</option>
                  <option value="soroti">Soroti</option>
                </optgroup>
                <optgroup label="Northern Region">
                  <option value="gulu">Gulu</option>
                  <option value="lira">Lira</option>
                  <option value="arua">Arua</option>
                  <option value="kitgum">Kitgum</option>
                </optgroup>
                <optgroup label="Western Region">
                  <option value="mbarara">Mbarara</option>
                  <option value="kabale">Kabale</option>
                  <option value="hoima">Hoima</option>
                  <option value="fortportal">Fort Portal</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className="input-group">
            <div className="input-container">
              <label className="input-label">Phone Number</label>
              <input
                type="text"
                className="input-text"
                placeholder="e.g., +256 712 345 678"
                value={personalInfo.phone || ''}
                onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
              />
            </div>
            <div className="input-container">
              <label className="input-label">NIN (National ID No.)</label>
              <input
                type="text"
                className="input-text"
                placeholder="e.g., CM123456789ABCDE"
                value={personalInfo.nin || ''}
                onChange={(e) => handleInputChange('personalInfo', 'nin', e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-container full-width">
              <label className="input-label">Email Address</label>
              <input
                type="email"
                className="input-text"
                placeholder="e.g., patient@example.com"
                value={personalInfo.email || ''}
                onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;