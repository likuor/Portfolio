import React from 'react';
import {
  FaReact,
  FaLaravel,
  FaBirthdayCake,
  FaJs,
  FaPhp,
  FaHtml5,
  FaCss3,
  FaDatabase,
  FaGithub,
  FaWordpress,
} from 'react-icons/fa';
import Icon from './Img/ProfileImg.jpg';

const About = () => {
  return (
    <section>
      <div className='main-wrapper'>
        <div className='about-container'>
          <div className='about-me-col'>
            <h2 className='title-h2'>About me</h2>
            <p className='description-highlight'>
              I'm Koki Sakai, a Japanese Front-end developer, currently living
              in Vancouver, Canada.
            </p>
            <div className='img-container'>
              <img src={Icon} alt='ProfileImage' className='profile-img' />
            </div>
          </div>
          <div className='about-others-col'>
            <div className='flex-items'>
              <h2 className='title-h2'>Skills</h2>
              <p className='description-highlight'>
                React.js, Laravel, CakePHP, JavaScript, PHP, HTML5, CSS3, MySQL,
                WordPress, Git
              </p>
              <p>
                <ul className='skills-icons'>
                  <li>
                    <FaReact />
                  </li>
                  <li>
                    <FaLaravel />
                  </li>
                  <li>
                    <FaBirthdayCake />
                  </li>
                  <li>
                    <FaJs />
                  </li>
                  <li>
                    <FaPhp />
                  </li>
                  <li>
                    <FaHtml5 />
                  </li>
                  <li>
                    <FaCss3 />
                  </li>
                  <li>
                    <FaDatabase />
                  </li>
                  <li>
                    <FaWordpress />
                  </li>
                  <li>
                    <FaGithub />
                  </li>
                </ul>
              </p>
            </div>
            <div className='flex-items'>
              <h2 className='title-h2'>Education</h2>
              <p className='description-highlight'>
                Web & Mobile App Development Co-Op Diploma
              </p>
              <p className='description-highlight'>
                Cornerstone International Community College of Canada(CICCC)
              </p>
              <p className='description-weak'>
                (Jan. 2022 ~ Jan. 2023 / Vancouver, Canada)
              </p>
            </div>
            <div className='flex-items'>
              <h2 className='title-h2'>Leisure</h2>
              <p className='description-highlight'>
                I love shooting photographs, playing soccer and ukulele, as well
                as coding and programming
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
