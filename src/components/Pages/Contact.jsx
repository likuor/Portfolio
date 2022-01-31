import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id='contact'>
      <div className={styles.mainWrapper}>
        <div className={styles.contentsWrapper}>
          <h1 className={styles.titleH1}>Contact me</h1>
          <h4 className={styles.titleH4}>
            &lt;p&gt; Don't hesitate to DM! &lt;/p&gt;
          </h4>
          <div className={styles.contentsBtn}>
            <a
              href='https://twitter.com/le_pereza'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.btn}
            >
              Welcome
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
