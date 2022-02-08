import React from 'react';
import styles from './Works.module.css';
import worksImg from './WorksImg/Restarea.jpg';

const Works = () => {
  return (
    <section id='works'>
      <div className={styles.mainWrapper}>
        <div className={styles.titleContainer}>
          <h1 className={styles.titleH1}>Works</h1>
          <h4 className={styles.titleH4}>&lt;p&gt; Here's my art &lt;/p&gt;</h4>
        </div>
        <div className={styles.worksContainer}>
          <a
            href='https://share.click.gmbh/f1a1c182-89a2-44d8-920f-1da98e468eb8?locale=ja'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className={styles.eachWorks}>
              <img src={worksImg} alt='worksImage' />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;
