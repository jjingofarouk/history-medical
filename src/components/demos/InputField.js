import React from 'react';
import FieldWrapper from './FieldWrapper';
import './PersonalInfo.css';

const InputField = ({ label, name, type = 'text', value, onChange, placeholder, clinicalInfo }) => (
  <FieldWrapper label={label} clinicalInfo={clinicalInfo}>
    <input
      type={type}
      className="input-text"
      placeholder={placeholder}
      value={value || ''}
      onChange={onChange}
    />
  </FieldWrapper>
);

export default InputField;