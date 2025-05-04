import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import TextArea from './TextArea';
import { socratesFields } from './socratesFields';
import Input from './Input';
import './HistoryOfPresentIllness.css';

const HistoryOfPresentIllness = ({ historyOfPresentIllness, handleInputChange }) => (
  <Card>
    <CardHeader>
      <CardTitle>History of Presenting Complaints</CardTitle>
    </CardHeader>
    <CardContent>
      <TextArea
        placeholder="Detailed description of the current illness"
        value={historyOfPresentIllness || ''}
        onChange={(e) => handleInputChange('historyOfPresentIllness', '', e.target.value)}
      />
      {socratesFields.map(({ key, label, placeholder, options }) => (
        <div key={key} className="additional-field">
          <label htmlFor={key}>{label}:</label>
          {options ? (
            <select
              id={key}
              value={historyOfPresentIllness[key] || ''}
              onChange={(e) => handleInputChange('historyOfPresentIllness', key, e.target.value)}
              className="select-field"
            >
              <option value="">Select an option</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <Input
              id={key}
              placeholder={placeholder}
              value={historyOfPresentIllness[key] || ''}
              onChange={(e) => handleInputChange('historyOfPresentIllness', key, e.target.value)}
            />
          )}
        </div>
      ))}
    </CardContent>
  </Card>
);

export default HistoryOfPresentIllness;