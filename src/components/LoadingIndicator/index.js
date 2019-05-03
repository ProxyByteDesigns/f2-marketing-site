import React from 'react';
import icon from './Spinner-1s-200px.svg';
import './LoadingIndicator.css';

function LoadingIndicator() {
  return (
    <div className="loading-indicator">
      <img src={icon} alt="loading indicator" />
    </div>
  );
}

export default LoadingIndicator;
