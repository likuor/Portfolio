import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import * as FaIcons from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='nav-wrapper'>
      <NavLink to={'/'} className='navbar-logo'>
        KokiSakai
      </NavLink>
      <div className='menu-icon' onClick={handleClick}>
        {click ? (
          <FaIcons.FaTimes className='fa-icons' />
        ) : (
          <FaIcons.FaBars className='fa-icons' />
        )}
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' className='nav-links' onClick={closeMobileMenu}>
            About
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/works' className='nav-links' onClick={closeMobileMenu}>
            Works
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/contact'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
