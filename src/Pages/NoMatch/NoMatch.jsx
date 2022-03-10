import styles from '../Layout.module.css';

const NoMatch = () => {
  const { sectionWrapper, contentsWrapper } = styles;

  return (
    <section className={sectionWrapper}>
      <div className={contentsWrapper}>
        <h1 className={styles.title}>404</h1>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.caption}>&lt;p&gt; Oops... &lt;/p&gt;</p>
      </div>
    </section>
  );
};

export default NoMatch;
