import React from 'react';
import FieldWrapper from './FieldWrapper';
import './PersonalInfo.css';

const SelectField = ({ label, name, value, onChange, options, groupedOptions, clinicalInfo }) => (
  <FieldWrapper label={label} clinicalInfo={clinicalInfo}>
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
  </FieldWrapper>
);

export default SelectField;