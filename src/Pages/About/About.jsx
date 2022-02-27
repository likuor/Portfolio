import ProfileImg from './Img/ProfileImg.jpg';
import SkillIcons from '../../components/SkillIcons/SkillIcons';
import Typing from '../../components/Typing/Typing.jsx';
import SubTitle from '../../components/Texts/SubTitle';
import SubCaption from '../../components/Texts/SubCaption';
import CaptionWithDate from '../../components/Texts/CaptionWithDate';
import Button from '../../components/Button/Button';
import styles from './About.module.css';

const About = (props) => {
  const {
    sectionWrapper,
    contentsWrapper,
    eachContentsWrapper,
    imgContainer,
    imgSize,
    btnWrapper,
    linkColor,
  } = styles;

  return (
    <section id={props.id}>
      <div className={sectionWrapper}>
        <div className={contentsWrapper}>
          <div className={eachContentsWrapper}>
            <SubTitle subTitle={<Typing />} />
            <SubCaption subCaption="I'm Koki Sakai, a Japanese Front-end developer, currently living in Vancouver, Canada." />
            <div className={imgContainer}>
              <img src={ProfileImg} alt='ProfileImage' className={imgSize} />
            </div>
            <div className={btnWrapper}>
              <Button
                message='Resume'
                url='https://drive.google.com/file/d/1xoy35zCP6fVfVwsUAzQrL3SGAiXtQ2LS/view?usp=sharing'
              />
            </div>
          </div>
          <div className={eachContentsWrapper}>
            <div className={eachContentsWrapper}>
              <SubTitle subTitle='Skills' />
              <SubCaption subCaption='Mainly work with React.js for front-end in these days but I do work with also Laravel as back-end too' />
              <SkillIcons />
            </div>
            <div className={eachContentsWrapper}>
              <SubTitle subTitle='Education' />
              <CaptionWithDate
                subCaption='Web & Mobile App Development Co-Op Diploma'
                date='(Jan. 2022 - present, Canada)'
              />
              <SubCaption subCaption='Cornerstone International Community College of Canada' />
            </div>
            <div className={eachContentsWrapper}>
              <SubTitle subTitle='Awards' />
              <a
                className={linkColor}
                href='https://nocodejapan.org/media/click-hackathon-result-01/#NoCode_Japan_shangRestarea_jiu_jing_huang_guisan'
                rel='noopener noreferrer'
                target='_blank'
              >
                <CaptionWithDate
                  subCaption='Award of NoCode Japan in NoCode Click Hackathon'
                  date='(Jun. 2021, Japan)'
                />
              </a>
              <SubCaption subCaption=' Got a pleasant award of making an internet forum app, the app content rating, and writing comment functions for food delivery drivers from scratch. They can share their favorite places to wait until they got orders.'></SubCaption>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
