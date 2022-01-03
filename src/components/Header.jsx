import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

export const Header = () => {
  return (
    <header>
      <div className='whole-wrapper'>
        <div className='introduce-wrapper'>
          <h1 className='intro-title'>Hi, I'm Koki Sakai</h1>
          <h1 className='intro-title'>Web developer</h1>
        </div>
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
      </div>
    </header>
  );
};
