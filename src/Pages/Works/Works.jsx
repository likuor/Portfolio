import Title from '../../components/Texts/Title';
import Caption from '../../components/Texts/Caption';
import EveryWorks from './EveryWorks';
import styles from './Works.module.css';

const Works = (props) => {
  return (
    <section id={props.id} className={styles.sectionWrapper}>
      <div className={styles.contentsWrapper}>
        <Title title='Works' />
        <Caption caption="&lt;p&gt; Here's my works &lt;/p&gt;" />
        <div className={styles.worksWrapper}>
          <EveryWorks />
        </div>
      </div>
    </section>
  );
};

export default Works;
