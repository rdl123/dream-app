import React from 'react';
import '../styles/Header.css';
import {LOGO_ICON} from '../constants/imageConstants';
const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={LOGO_ICON} alt="Logo" />
      </div>
      <button className="hamburger-btn" aria-label="Menu">
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
    </header>
  );
};

export default Header;
