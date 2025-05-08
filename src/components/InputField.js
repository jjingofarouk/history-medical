import React from 'react';
import '../PersonalInfo.css'; // Adjust path if CSS is in a different directory

const InputField = ({ label, name, type = 'text', value, onChange, placeholder }) => (
  <div className="input-container">
    <label className="input-label">{label}</label>
    <input
      type={type}
      className="input-text"
      placeholder={placeholder}
      value={value || ''}
      onChange={onChange}
    />
  </div>
);

export default InputField;