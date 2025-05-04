import React from 'react';
import './CustomSelect.css';

const CustomSelect = ({ options, selectedValue, onSelect }) => {
  const handleChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      className="custom-select"
    >
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;