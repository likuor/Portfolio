import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaBirthdayCake,
  FaJs,
  FaPhp,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaWordpress,
  FaTrophy,
} from 'react-icons/fa';
import Icon from './Img/ProfileImg.jpg';
import styles from './About.module.css';
import Typing from '../Typing/Typing.jsx';

const About = () => {
  return (
    <section id='about'>
      <div className={styles.mainWrapper}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutMeCol}>
            <h2 className={styles.titleH2}>
              <Typing />
            </h2>
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
              <div className={styles.contentsBtn}>
                <a
                  href='https://drive.google.com/file/d/16Swvf2l9q8p43umaMAT6-OClpemF8dOh/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.btn}
                >
                  See Resume
                </a>
              </div>
            </div>
          </div>
          <div className={styles.aboutOthersCol}>
            <div className={styles.othersColContainer}>
              <h2 className={styles.titleH2}>Skills</h2>
              <p className={styles.descriptionHighlight}>
                React.js, Node.js, Laravel, CakePHP, JavaScript, PHP, Python,
                Java, HTML5, CSS3, MySQL, WordPress, Git, Github, Figma
              </p>
              <div className={styles.iconsContainer}>
                <ul className={styles.skillsIcons}>
                  <li>
                    <FaReact />
                  </li>
                  <li>
                    <FaNodeJs />
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
                    <FaJava />
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
                    <FaGitAlt />
                  </li>
                  <li>
                    <FaGithub />
                  </li>
                  <li>
                    <FaFigma />
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
