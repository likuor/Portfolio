import Title from '../../components/Texts/Title';
import Caption from '../../components/Texts/Caption';
import styles from '../Layout.module.css';

const NoMatch = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.contentsWrapper}>
        <Title title='404' />
        <Title title='Page not found' />
        <Caption caption='&lt;p&gt; Oops... &lt;/p&gt;' />
      </div>
    </section>
  );
};

export default NoMatch;
