import React from 'react'
import './css/Header.css'
import icon from './images/icon.png'


const Header = ({ title }) => {
  return (
    <div className="Header">
      <div className="header-row">
        <img src={icon} alt='header icon' className="header-icon" />
        <h1 className="header-title">{title}</h1>
      </div>
      <h2>Select product</h2>
    </div>
  )
}

export default Header