import React from 'react';
import '../PersonalInfo.css'; // Adjust path if CSS is in a different directory

const SelectField = ({ label, name, value, onChange, options, groupedOptions }) => (
  <div className="input-container">
    <label className="input-label">{label}</label>
    <select value={value || ''} onChange={onChange} className="input-select">
      <option value="">Select {label}</option>
      {options ? (
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))
      ) : (
        groupedOptions &&
        groupedOptions.map((group) => (
          <optgroup key={group.label} label={group.label}>
            {group.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </optgroup>
        ))
      )}
    </select>
  </div>
);

export default SelectField;