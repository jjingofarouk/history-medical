import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

// Main Card component with simplified variant and animation
const Card = ({ children, variant = 'primary' }) => (
  <div className={`card card-${variant}`}>
    {children}
  </div>
);

// CardHeader with streamlined design
const CardHeader = ({ children }) => (
  <div className="card-header">
    {children}
  </div>
);

// CardTitle with single size
const CardTitle = ({ children }) => (
  <h2 className="card-title">{children}</h2>
);

// CardContent with consistent padding
const CardContent = ({ children }) => (
  <div className="card-content">
    {children}
  </div>
);

// PropTypes for type checking
Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Card, CardHeader, CardTitle, CardContent };