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
                <option value="Dr.">Dr.</option>
                <option value="Prof.">Prof.</option>
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
                <option value="farmer">Farmer</option>
                <option value="teacher">Teacher</option>
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
                <option value="betrothed">Betrothed</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <div className="input-container">
              <label className="input-label">Next of Kin</label>
              <input
                type="text"
                className="input-text"
                placeholder="e.g., John Kagwa"
                value={personalInfo.nok || ''}
                onChange={(e) => handleInputChange('personalInfo', 'nok', e.target.value)}
              />
            </div>
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
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <div className="input-container">
              <label className="input-label">Tribe</label>
              <select
                value={personalInfo.tribe || ''}
                onChange={(e) => handleInputChange('personalInfo', 'tribe', e.target.value)}
                className="input-select"
              >
                <option value="">Select Tribe</option>
                <option value="muganda">Muganda</option>
                <option value="musongora">Musongora</option>
                <option value="munyarwanda">Munyarwanda</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input-container">
              <label className="input-label">Religion</label>
              <select
                value={personalInfo.religion || ''}
                onChange={(e) => handleInputChange('personalInfo', 'religion', e.target.value)}
                className="input-select"
              >
                <option value="">Select Religion</option>
                <option value="catholic">Catholic</option>
                <option value="anglican">Anglican</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <div className="input-container">
              <label className="input-label">District</label>
              <select
                value={personalInfo.address || ''}
                onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                className="input-select"
              >
                <option value="">Select District</option>
                <option value="abim">Abim</option>
                <option value="adjumani">Adjumani</option>
                <option value="agago">Agago</option>
                <option value="zombo">Zombo</option>
              </select>
            </div>
            <div className="input-container">
              <label className="input-label">Phone Number</label>
              <input
                type="text"
                className="input-text"
                placeholder="e.g., +256 123 456 789"
                value={personalInfo.phone || ''}
                onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
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