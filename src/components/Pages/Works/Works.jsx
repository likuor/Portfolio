import React from 'react';
import styles from './Works.module.css';
import { WorksData } from './WorksData/WorksData';

const Works = () => {
  return (
    <section id='works'>
      <div className={styles.mainWrapper}>
        <div className={styles.titleContainer}>
          <h1 className={styles.titleH1}>Works</h1>
          <h4 className={styles.titleH4}>&lt;p&gt; Here's my art &lt;/p&gt;</h4>
        </div>
        <div className={styles.worksContainer}>
          <ul>
            {WorksData.map((val, index) => {
              return (
                <li className={styles.worksTest} key={index}>
                  <a
                    key={index}
                    href={val.link}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <div className={styles.eachWorks}>
                      <img src={val.img} alt='worksImage' />
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Works;
