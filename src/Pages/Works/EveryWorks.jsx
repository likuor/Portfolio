import { WorksData } from './WorksData/WorksData';
import styles from './EveryWorks.module.css';

const EveryWorks = () => {
  return (
    <ul>
      {WorksData.map((val, index) => {
        return (
          <div className={styles.eachWorksWrapper} key={index}>
            <li>
              <a href={val.link} rel='noopener noreferrer' target='_blank'>
                <div className={styles.imgWrapper}>
                  <img src={val.img} alt={val.alt} />
                </div>
              </a>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default EveryWorks;
