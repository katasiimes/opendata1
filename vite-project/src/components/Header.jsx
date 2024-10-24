import React from 'react';
import './css/Header.css';

export const Header = ({image, title}) => {
  return (
    <div classname="Header">
        <img src={image} alt="Header" className= "Header-image" />
        <h1 className="header-title">{title}</h1>

    </div>
  );
};
