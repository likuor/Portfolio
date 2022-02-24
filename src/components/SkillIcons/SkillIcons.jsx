import { SkillIconsData } from './SkillIconsData';
import styles from './SkillIcons.module.css';

const SkillIcons = () => {
  const { skillsIcons, iconsContainer } = styles;

  return (
    <div className={iconsContainer}>
      <ul className={skillsIcons}>
        {SkillIconsData.map((val, index) => {
          return <li key={index}>{val.icon}</li>;
        })}
      </ul>
    </div>
  );
};

export default SkillIcons;
