import React from 'react';
import './Well.css';

function Well({ children, title }) {
  return (
    <div className="hero">
      <div className="well">
        <h1 className="pink">{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default Well;
