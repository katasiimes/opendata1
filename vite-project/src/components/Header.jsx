import React from 'react';
import './css/Header.css';

const Header = ({ image, title }) => {
  return (
    <div className="Header">
        <img src={image} alt = 'r' className= "Header-image" />
        <h1 className="header-title">{title}</h1>
        <p>Select product</p>

    </div>
  );
};

export default Header;