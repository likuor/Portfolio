import React from 'react';
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import './SocialMedias.css';

const SocialMedias = () => {
  return (
    <div className='.main-wrapper'>
      <div className='display-table'>
        <div className='display-table-contents'>
          <ul className='social-icons'>
            <li className='icon-link'>
              <a
                href='https://www.instagram.com/le_pereza'
                target='_blank'
                rel='noopener noreferrer'
                className='fa-icons'
              >
                <FaInstagram className='fa-icons' />
              </a>
            </li>
            <li className='icon-link'>
              <a
                href='https://www.facebook.com/sakai.kouki.1'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook className='fa-icons' />
              </a>
            </li>
            <li className='icon-link'>
              <a
                href='https://github.com/likuor'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub className='fa-icons' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SocialMedias;
