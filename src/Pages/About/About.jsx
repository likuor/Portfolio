// import { FaTrophy } from 'react-icons/fa';
import ProfileImg from './Img/ProfileImg.jpg';
import SkillIcons from '../../components/SkillIcons/SkillIcons';
import Typing from '../../components/Typing/Typing.jsx';
import SubTitle from '../../components/Texts/SubTitle';
import SubCaption from '../../components/Texts/SubCaption';
import TextSpan from '../../components/Texts/TextSpan';
import Button from '../../components/Button/Button';
import styles from './About.module.css';

const About = (props) => {
  return (
    <section id={props.id}>
      <div className={styles.sectionWrapper}>
        <div className={styles.contentsWrapper}>
          <div className={styles.eachContentsWrapper}>
            <SubTitle subTitle={<Typing />}></SubTitle>
            <SubCaption subCaption="I'm Koki Sakai, a Japanese Front-end developer, currently living in Vancouver, Canada."></SubCaption>
            <div className={styles.imgContainer}>
              <img
                src={ProfileImg}
                alt='ProfileImage'
                className={styles.imgSize}
              />
            </div>
            <div className={styles.btnWrapper}>
              <Button
                message='Resume'
                url='https://drive.google.com/file/d/1xoy35zCP6fVfVwsUAzQrL3SGAiXtQ2LS/view?usp=sharing'
              />
            </div>
          </div>
          <div className={styles.eachContentsWrapper}>
            <div className={styles.eachContentsWrapper}>
              <SubTitle subTitle='Skills'></SubTitle>
              <SubCaption subCaption='React.js, Node.js, Laravel, CakePHP, JavaScript, PHP, Python, Java, HTML5, CSS3, MySQL, WordPress, Git, Github, Figma' />
              <SkillIcons />
            </div>
            <div className={styles.eachContentsWrapper}>
              <SubTitle subTitle='Education'></SubTitle>
              <SubCaption subCaption='Web & Mobile App Development Co-Op Diploma' />
              <SubCaption subCaption='Cornerstone International Community College of Canada' />
              <TextSpan contents='(Jan. 2022 - / Canada)' />
            </div>
            <div className={styles.eachContentsWrapper}>
              <SubTitle subTitle='Awards'></SubTitle>
              <SubCaption subCaption='Award of NoCode Japan in NoCode Click Hackathon' />
              <TextSpan contents='(Jun. 2021, Japan)' />
              <SubCaption subCaption=' Got a pleasant award of making an internet forum app, the app content rating, and writing comment functions for food delivery drivers from scratch. They can share their favorite places to wait until they got orders.'></SubCaption>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
