import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='whole-wrapper'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
