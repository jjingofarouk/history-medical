import React from 'react';
import './PersonalInfo.css';

const PersonalInfo = ({ personalInfo, handleInputChange }) => {
  const handleDateSelect = (e) => {
    handleInputChange('personalInfo', 'dateOfBirth', e.target.value);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Personal Information</h2>
      </div>
      <div className="card-content">
        <div className="row">
          <div className="input-container">
            <label className="label">Prefix</label>
            <select
              value={personalInfo.prefix || ''}
              onChange={(e) => handleInputChange('personalInfo', 'prefix', e.target.value)}
              className="picker"
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
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="e.g., John Kagwa"
              value={personalInfo.name || ''}
              onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-container">
            <label className="label">Date of Birth</label>
            <input
              type="date"
              className="input"
              value={personalInfo.dateOfBirth || ''}
              onChange={handleDateSelect}
            />
          </div>
          <div className="input-container">
            <label className="label">Gender</label>
            <select
              value={personalInfo.gender || ''}
              onChange={(e) => handleInputChange('personalInfo', 'gender', e.target.value)}
              className="picker"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="intersex">Intersex</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>
        </div>

        <hr className="separator" />

        <div className="input-container">
          <label className="label">Occupation</label>
          <select
            value={personalInfo.occupation || ''}
            onChange={(e) => handleInputChange('personalInfo', 'occupation', e.target.value)}
            className="picker"
          >
            <option value="">Select Occupation</option>
            <option value="farmer">Farmer</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <div className="row">
          <div className="input-container">
            <label className="label">Marital Status</label>
            <select
              value={personalInfo.maritalStatus || ''}
              onChange={(e) => handleInputChange('personalInfo', 'maritalStatus', e.target.value)}
              className="picker"
            >
              <option value="">Select Marital Status</option>
              <option value="single">Single</option>
              <option value="betrothed">Betrothed</option>
            </select>
          </div>
          <div className="input-container">
            <label className="label">Full Name of Next of Kin</label>
            <input
              type="text"
              className="input"
              placeholder="e.g., John Kagwa"
              value={personalInfo.nok || ''}
              onChange={(e) => handleInputChange('personalInfo', 'nok', e.target.value)}
            />
          </div>
        </div>

        <div className="input-container">
          <label className="label">Nationality</label>
          <select
            value={personalInfo.nationality || ''}
            onChange={(e) => handleInputChange('personalInfo', 'nationality', e.target.value)}
            className="picker"
          >
            <option value="">Select Nationality</option>
            <option value="Ugandan">Ugandan</option>
            <option value="Kenyan">Kenyan</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="input-container">
          <label className="label">Tribe</label>
          <select
            value={personalInfo.tribe || ''}
            onChange={(e) => handleInputChange('personalInfo', 'tribe', e.target.value)}
            className="picker"
          >
            <option value="">Select Tribe</option>
            <option value="muganda">Muganda</option>
            <option value="musongora">Musongora</option>
            <option value="munyarwanda">Munyarwanda</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="input-container">
          <label className="label">Religion</label>
          <select
            value={personalInfo.religion || ''}
            onChange={(e) => handleInputChange('personalInfo', 'religion', e.target.value)}
            className="picker"
          >
            <option value="">Select Religion</option>
            <option value="catholic">Catholic</option>
            <option value="anglican">Anglican</option>
            <option value="other">Other</option>
          </select>
        </div>

        <hr className="separator" />

        <div className="input-container">
          <label className="label">Address</label>
          <select
            value={personalInfo.address || ''}
            onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
            className="picker"
          >
            <option value="">Select Patient's District</option>
            <option value="abim">Abim</option>
            <option value="adjumani">Adjumani</option>
            <option value="agago">Agago</option>
            <option value="zombo">Zombo</option>
          </select>
        </div>

        <div className="row">
          <div className="input-container">
            <label className="label">Phone Number</label>
            <input
              type="text"
              className="input"
              placeholder="e.g., +256 123 456 789"
              value={personalInfo.phone || ''}
              onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
            />
          </div>
          <div className="input-container">
            <label className="label">Email Address</label>
            <input
              type="email"
              className="input"
              placeholder="e.g., patient@example.com"
              value={personalInfo.email || ''}
              onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;