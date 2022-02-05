import React from 'react';
import styles from './Works.module.css';

const Works = () => {
  return (
    <section id='works'>
      <div className={styles.mainWrapper}>
        <div className={styles.contentsWrapper}>
          <h1 className={styles.titleH1}>Works</h1>
          <h4 className={styles.titleH4}>&lt;p&gt; Here's my art &lt;/p&gt;</h4>
          <p>test</p>
        </div>
      </div>
    </section>
  );
};

export default Works;
