import React from 'react';
import './FancyText.css';

const FancyText = ({ title, text }) => {
  return (
    <div className={title ? 'title-text' : 'regular-text'}>
      {title ? <h2>{text}</h2> : <p>{text}</p>}
    </div>
  );
};

export default FancyText;
