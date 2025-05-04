import React from 'react';
import './CustomSelect.css';

const CustomSelect = ({ options, selectedValue, onSelect }) => {
  const handleChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <div className="custom-select-wrapper">
      <select
        value={selectedValue}
        onChange={handleChange}
        className="custom-select"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;