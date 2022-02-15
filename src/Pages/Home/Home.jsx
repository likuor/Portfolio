import Title from '../Title';
import Caption from '../Caption';
import styles from '../Layout.module.css';

const Home = (props) => {
  return (
    <section id={props.id} className={styles.sectionWrapper}>
      <div className={styles.contentsWrapper}>
        <Title title='Hi' />
        <Title title="I'm Koki," />
        <Title title='a web developer' />
        <Caption caption='&lt;p&gt; Front-end developer &lt;/p&gt;' />
      </div>
    </section>
  );
};

export default Home;
