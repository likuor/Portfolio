import EveryWorks from './EveryWorks';
import styles from './Works.module.css';

const Works = (props) => {
  const { sectionWrapper, contentsWrapper, worksWrapper } = styles;

  return (
    <section id={props.id} className={sectionWrapper}>
      <div className={contentsWrapper}>
        <h1 className={styles.title}>Works</h1>
        <p className={styles.caption}>&lt;p&gt; Here's my works &lt;/p&gt;</p>
        <div className={worksWrapper}>
          <EveryWorks />
        </div>
      </div>
    </section>
  );
};

export default Works;
