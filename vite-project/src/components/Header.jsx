import React from 'react';
import './css/Header.css';

const Header = ({image, title}) => {
  return (
    <div className="Header">
        <img src={image} alt="Header" className= "Header-image" />
        <h1 className="header-title">'Welcome'</h1>

    </div>
  );
};

export default Header;