import React from 'react';
import './Input.css';

const Input = ({ id, placeholder, value, onChange }) => (
  <input
    id={id}
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="input-field"
  />
);

export default Input;