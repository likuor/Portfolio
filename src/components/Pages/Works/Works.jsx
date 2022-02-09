import React from 'react';
import styles from './Works.module.css';
import { WorksData } from './WorksData/WorksData';
import WorksImg from './WorksImg/Restarea.jpg';

const Works = () => {
  return (
    <section id='works'>
      <div className={styles.mainWrapper}>
        <div className={styles.titleContainer}>
          <h1 className={styles.titleH1}>Works</h1>
          <h4 className={styles.titleH4}>&lt;p&gt; Here's my art &lt;/p&gt;</h4>
        </div>
        <div className={styles.worksContainer}>
          {WorksData.map((val, index) => {
            return (
              <a
                key={index}
                href={val.link}
                rel='noopener noreferrer'
                target='_blank'
              >
                <div className={styles.eachWorks}>
                  <img src={WorksImg} alt='worksImage' />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
