import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import * as FaIcons from 'react-icons/fa';
import { Link as Scroll } from 'react-scroll';

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
          <FaIcons.FaBars className='faIcons' />
        )}
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
            <Scroll to='home'>Home</Scroll>
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' className='nav-links' onClick={closeMobileMenu}>
            <Scroll to='about'>About</Scroll>
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/works' className='nav-links' onClick={closeMobileMenu}>
            <Scroll to='works'>Works</Scroll>
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/contact'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            <Scroll to='contact'>Contact</Scroll>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
