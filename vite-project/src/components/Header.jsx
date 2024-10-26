import React from 'react'
import './css/Header.css'
import icon from './images/icon.png'


const Header = ({ image, title }) => {
  return (
    <div className="Header">
        <img src={icon} alt = 'r' className= "Header-image" />
        <h1 className="header-title">{title}</h1>
        <h2>Select product</h2>

    </div>
  );
};

export default Header;