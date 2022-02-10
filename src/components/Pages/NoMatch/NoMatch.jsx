import React from 'react';
import styles from './NoMatch.module.css';

const NoMatch = () => {
  return (
    <section id='home'>
      <div className={styles.mainWrapper}>
        <div className={styles.contentsWrapper}>
          <h1 className={styles.eoorNumber}>404</h1>
          <h1 className={styles.titleH1}>Page not found</h1>
          <h4 className={styles.titleH4}>&lt;p&gt; Oops... &lt;/p&gt;</h4>
        </div>
      </div>
    </section>
  );
};

export default NoMatch;
