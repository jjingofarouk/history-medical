import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

// Main Card component with variant and animation support
const Card = ({ children, variant = 'primary', animated = true }) => (
  <div className={`card ${variant} ${animated ? 'card-animated' : ''}`}>
    {children}
  </div>
);

// CardHeader with optional icon support
const CardHeader = ({ children, icon }) => (
  <div className="card-header">
    {icon && <span className="card-header-icon">{icon}</span>}
    {children}
  </div>
);

// CardTitle with size customization
const CardTitle = ({ children, size = 'medium' }) => (
  <h2 className={`card-title card-title-${size}`}>{children}</h2>
);

// CardContent with optional padding control
const CardContent = ({ children, compact = false }) => (
  <div className={`card-content ${compact ? 'card-content-compact' : ''}`}>
    {children}
  </div>
);

// PropTypes for type checking
Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  animated: PropTypes.bool,
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  compact: PropTypes.bool,
};

export { Card, CardHeader, CardTitle, CardContent };