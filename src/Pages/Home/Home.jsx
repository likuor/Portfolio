import Layout from '../Layout';
import styles from './Home.module.css';

const Home = (props) => {
  return (
    <section id={props.id} className={styles.sectionWrapper}>
      <Layout
        title='Hi'
        name="I'm Koki,"
        content='a web developer'
        subTitle='&lt;p&gt; Front-end developer &lt;/p&gt;'
      />
    </section>
  );
};

export default Home;
