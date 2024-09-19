import React from 'react';
import '../styles/IconText.css';

const IconText = ({ icon, text }) => {
  return (
    <div className="icon-text">
      <img src={icon} alt="icon" className="icon" />
      <span>{text}</span>
    </div>
  );
};

export default IconText;
