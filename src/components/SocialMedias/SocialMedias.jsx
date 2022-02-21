import { SocialMediaData } from './SocialMediaData';
import styles from './SocialMedias.module.css';

const SocialMedias = () => {
  return (
    <div className={styles.socilalMediasWrapper}>
      <div className={styles.displayTableContents}>
        <ul className={styles.displayTable}>
          {SocialMediaData.map((val, index) => {
            return (
              <li key={index} className={styles.eachIcon}>
                <a
                  href={val.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.faIcons}
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
