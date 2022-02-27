import { WorksData } from './WorksData/WorksData';
import styles from './EveryWorks.module.css';

const EveryWorks = () => {
  const { eachWorksWrapper, liWrapper, imgWrapper } = styles;

  return (
    <ul>
      {WorksData.map((val, index) => {
        return (
          <div className={eachWorksWrapper} key={index}>
            <li className={liWrapper}>
              <a href={val.link} rel='noopener noreferrer' target='_blank'>
                <div className={imgWrapper}>
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
