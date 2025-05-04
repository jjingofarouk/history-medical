import React from 'react';
import './TextArea.css';

const TextArea = ({ placeholder, value, onChange }) => (
  <textarea
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="textarea-field"
  />
);

export default TextArea;