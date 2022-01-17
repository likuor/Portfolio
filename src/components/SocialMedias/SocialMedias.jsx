import React from 'react';
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import './SocialMedias.css';

const SocialMedias = () => {
  return (
    <div className='container'>
      <div className='display-table'>
        <div className='display-table-contents'>
          <ul className='social-icons'>
            <li className='icon-link'>
              <a
                href='https://www.instagram.com/le_pereza'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram color='black' size='2rem' />
              </a>
            </li>
            <li className='icon-link'>
              <a
                href='https://www.facebook.com/sakai.kouki.1'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook color='black' size='2rem' />
              </a>
            </li>
            <li className='icon-link'>
              <a
                href='https://github.com/likuor'
                target='_blank'
                rel='noopener noreferrer'
              >
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
