import React from 'react';
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const SocialMedias = () => {
  return (
    <div className='container'>
      <div className='display-table'>
        <div className='display-table-contents'>
          <ul className='social-icons'>
            <li className='icon-link'>
              <a href='https://www.instagram.com/le_pereza'>
                <FaInstagram color='black' size='2rem' />
              </a>
            </li>
            <li className='icon-link'>
              <a href='https://www.facebook.com/sakai.kouki.1'>
                <FaFacebook color='black' size='2rem' />
              </a>
            </li>
            <li className='icon-link'>
              <a href='https://github.com/likuor'>
                <FaGithub color='black' size='2rem' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SocialMedias;
