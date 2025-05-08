import React, { useState } from 'react';
import './PersonalInfo.css';

const InfoIcon = ({ clinicalInfo }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const toggleTooltip = () => {
    setTooltipVisible(!isTooltipVisible);
  };

  return (
    <span className="info-icon-container">
      <span className="info-icon" onClick={toggleTooltip}>
        i
      </span>
      <div className={`tooltip ${isTooltipVisible ? '' : 'hidden'}`}>
        {clinicalInfo}
      </div>
    </span>
  );
};

export default InfoIcon;