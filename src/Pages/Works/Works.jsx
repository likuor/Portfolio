import Title from '../../components/Texts/Title';
import Caption from '../../components/Texts/Caption';
import EveryWorks from './EveryWorks';
import styles from './Works.module.css';

const Works = (props) => {
  const { sectionWrapper, contentsWrapper, worksWrapper } = styles;

  return (
    <section id={props.id} className={sectionWrapper}>
      <div className={contentsWrapper}>
        <Title title='Works' />
        <Caption caption="&lt;p&gt; Here's my works &lt;/p&gt;" />
        <div className={worksWrapper}>
          <EveryWorks />
        </div>
      </div>
    </section>
  );
};

export default Works;
