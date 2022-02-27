import { SocialMediaData } from './SocialMediaData';
import styles from './SocialMedias.module.css';

const SocialMedias = () => {
  const {
    displayTableContents,
    socilalMediasWrapper,
    displayTable,
    eachIcon,
    faIcons,
  } = styles;

  return (
    <div className={socilalMediasWrapper}>
      <div className={displayTableContents}>
        <ul className={displayTable}>
          {SocialMediaData.map((val, index) => {
            return (
              <li key={index} className={eachIcon}>
                <a
                  href={val.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={faIcons}
                >
                  {val.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SocialMedias;
