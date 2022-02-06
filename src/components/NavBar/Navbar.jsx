import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import * as FaIcons from 'react-icons/fa';
import { NavbarData } from './NavbarData';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='nav-wrapper'>
      <Link to='/' className='navbar-logo'>
        Koki Sakai
      </Link>

      <div className='menu-icon' onClick={handleClick}>
        {click ? (
          <FaIcons.FaTimes className='fa-icons' />
        ) : (
          <FaIcons.FaBars className='fa-icons' />
        )}
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {NavbarData.map((val) => {
          return (
            <li className='nav-item'>
              <NavLink
                to={val.link}
                className='nav-links'
                activeClassName='active'
                onClick={closeMobileMenu}
              >
                {val.title}
              </NavLink>{' '}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
