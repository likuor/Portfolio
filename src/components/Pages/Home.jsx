import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section id='home'>
      <div className={styles.mainWrapper}>
        <div className={styles.contentsWrapper}>
          <h1 className={styles.titleH1}>Hi,</h1>
          <p>I'm Koki,</p>
          <p>a web developer</p>
          <h4 className={styles.titleH4}>
            &lt;p&gt; Front-end developer &lt;/p&gt;
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Home;
