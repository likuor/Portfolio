import React, { useState } from 'react';
import './Navbar.css';
import * as FaIcons from 'react-icons/fa';
import { NavbarData } from './NavbarData';
import { Link as Scroll } from 'react-scroll';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='nav-wrapper'>
      <Scroll to='/' className='navbar-logo' smooth={true}>
        Koki Sakai
      </Scroll>

      <div className='menu-icon' onClick={handleClick}>
        {click ? (
          <FaIcons.FaTimes className='fa-icons' />
        ) : (
          <FaIcons.FaBars className='fa-icons' />
        )}
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {NavbarData.map((val, index) => {
          return (
            <li key={index} className='nav-item'>
              <Scroll
                activeclassname='active'
                to={val.link}
                spy={true}
                smooth={true}
                className='nav-links'
                onClick={closeMobileMenu}
                duration={600}
              >
                {val.title}
              </Scroll>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
