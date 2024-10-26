import React from 'react'
import './css/Header.css'


const Header = (props) => {
  return (
    <div className="Header">
      <div className="header-row">
        <img src={props.icon} alt='header icon' className="header-icon" />
        <h1 className="header-title">{props.title}</h1>
      </div>
      <h2>Select product</h2>
    </div>
  )
}

export default Header