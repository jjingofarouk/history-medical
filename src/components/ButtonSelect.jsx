import React, { useState } from 'react';
import Input from './Input';
import './ButtonSelect.css';

const ButtonSelect = ({ options, value, onChange, placeholder }) => {
  const [otherText, setOtherText] = useState('');

  const handleButtonClick = (option) => {
    if (option === 'Other') {
      onChange('Other');
    } else {
      onChange(option);
      setOtherText('');
    }
  };

  return (
    <div className="button-select">
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${value === option ? 'active' : ''}`}
            onClick={() => handleButtonClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {value === 'Other' && (
        <Input
          className="other-input"
          placeholder={placeholder}
          value={otherText}
          onChange={(e) => {
            setOtherText(e.target.value);
            onChange(`Other: ${e.target.value}`);
          }}
        />
      )}
    </div>
  );
};

export default ButtonSelect;