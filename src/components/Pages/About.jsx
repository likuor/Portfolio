import React from 'react';
import {
  FaReact,
  FaLaravel,
  FaBirthdayCake,
  FaJs,
  FaPhp,
  FaPython,
  FaHtml5,
  FaCss3,
  FaDatabase,
  FaGithub,
  FaWordpress,
  FaTrophy,
} from 'react-icons/fa';
import Icon from './Img/ProfileImg.jpg';
import styles from './About.module.css';

const About = () => {
  return (
    <section id='about'>
      <div className={styles.mainWrapper}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutMeCol}>
            <h2 className={styles.titleH2}>About me</h2>
            <p className={styles.descriptionHighlight}>
              I'm Koki Sakai, a Japanese Front-end developer, currently living
              in Vancouver, Canada.
            </p>
            <div className={styles.imgContainer}>
              <img
                src={Icon}
                alt='ProfileImage'
                className={styles.profileImg}
              />
            </div>
          </div>
          <div className={styles.aboutOthersCol}>
            <div className={styles.othersColContainer}>
              <h2 className={styles.titleH2}>Skills</h2>
              <p className={styles.descriptionHighlight}>
                React.js, Laravel, CakePHP, JavaScript, PHP, Python, HTML5,
                CSS3, MySQL, WordPress, Git
              </p>
              <div className={styles.iconsContainer}>
                <ul className={styles.skillsIcons}>
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
                    <FaPython />
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
              </div>
            </div>
            <div className={styles.othersColContainer}>
              <h2 className={styles.titleH2}>Education</h2>
              <p className={styles.descriptionHighlight}>
                Web & Mobile App Development Co-Op Diploma
              </p>
              <p className={styles.descriptionHighlight}>
                Cornerstone International Community College of Canada(CICCC)
              </p>
              <p className={styles.descriptionWeak}>
                (Jan. 2022 - Jan. 2023 / Vancouver, Canada)
              </p>
            </div>
            <div className={styles.othersColContainer}>
              <h2 className={styles.titleH2}>Awards</h2>
              <p className={styles.descriptionHighlight}>
                <FaTrophy className={styles.iconInSentence} />
                Award of NoCode Japan in NoCode Click Hackathon
              </p>
              <p className={styles.descriptionWeak}>(Jun. 2021)</p>
              <p className={styles.descriptionHighlight}>
                Got an pleasant award of making a internet forum app, the app
                content rating, and writing comment functions for food delivery
                drivers from scratch. They can share their favorite places to
                wait until they got orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
