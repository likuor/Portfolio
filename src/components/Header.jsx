import CoverImage from '../images/coverImage.jpg';
import ProfileImage from '../images/profileImage.jpg';
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

export const Header = () => {
  return (
    <header
      className='main-cover'
      style={{ backgroundImage: `url(${CoverImage})` }}
    >
      <div className='overlay'></div>
      <div className='container'>
        <div className='display-table'>
          <div className='display-table-contents'>
            <div
              className='profile-thumb'
              style={{ backgroundImage: `url(${ProfileImage})` }}
            ></div>
            <h1 className='title-text'>Koki</h1>
            <h3 className='title-text'>Web Developer</h3>
            <ul className='social-icons'>
              <li className='icon-link'>
                <a href='https://www.instagram.com/le_pereza'>
                  <FaInstagram color='white' size='2rem' />
                </a>
              </li>
              <li className='icon-link'>
                <a href='https://www.facebook.com/sakai.kouki.1'>
                  <FaFacebook color='white' size='2rem' />
                </a>
                <li className='icon-link'>
                  <a href='https://github.com/likuor'>
                    <FaGithub color='white' size='2rem' />
                  </a>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
