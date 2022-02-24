import Title from '../../components/Texts/Title';
import Caption from '../../components/Texts/Caption';
import styles from '../Layout.module.css';

const Home = (props) => {
  const { sectionWrapper, contentsWrapper } = styles;

  return (
    <section id={props.id} className={sectionWrapper}>
      <div className={contentsWrapper}>
        <Title title='Hi' />
        <Title title="I'm Koki," />
        <Title title='a web developer' />
        <Caption caption='&lt;p&gt; Front-end developer &lt;/p&gt;' />
      </div>
    </section>
  );
};

export default Home;
