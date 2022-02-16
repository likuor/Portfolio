import { SkillIconsData } from './SkillIconsData';
import styles from './SkillIcons.module.css';

const SkillIcons = () => {
  return (
    <div className={styles.iconsContainer}>
      <ul className={styles.skillsIcons}>
        {SkillIconsData.map((val, index) => {
          return <li key={index}>{val.icon}</li>;
        })}
      </ul>
    </div>
  );
};

export default SkillIcons;
