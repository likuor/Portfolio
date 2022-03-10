import styles from '../Layout.module.css';

const Home = (props) => {
  const { sectionWrapper, contentsWrapper } = styles;

  return (
    <section id={props.id} className={sectionWrapper}>
      <div className={contentsWrapper}>
        <h1 className={styles.title}>Hi</h1>
        <h1 className={styles.title}>I'm Koki,</h1>
        <h1 className={styles.title}>web developer</h1>
        <p className={styles.caption}>
          &lt;p&gt; Front-end developer &lt;/p&gt;
        </p>
      </div>
    </section>
  );
};

export default Home;
