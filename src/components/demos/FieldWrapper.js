import React from 'react';
import InfoIcon from './InfoIcon';
import '../PersonalInfo.css';

const FieldWrapper = ({ label, children, clinicalInfo }) => (
  <div className="input-container">
    <div className="field-wrapper">
      <label className="input-label">{label}</label>
      <InfoIcon clinicalInfo={clinicalInfo} />
    </div>
    {children}
  </div>
);

export default FieldWrapper;