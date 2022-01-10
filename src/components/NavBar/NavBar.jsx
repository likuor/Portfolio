import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
      <h1 className='nav-logo'>
        Koki Sakai <i className='fab fa-react'></i>
      </h1>
      <div className='menu-icon'>
        <i className='fas fa-times'></i>
      </div>
      <ul className='nav-menu'>
        <li className='nav-links'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='nav-links'>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li className='nav-links'>
          <NavLink to='/works'>Works</NavLink>
        </li>
        <li className='nav-links'>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
