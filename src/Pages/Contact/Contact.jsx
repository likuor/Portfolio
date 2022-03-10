import Title from '../../components/Texts/Title';
import Caption from '../../components/Texts/Caption';
import Button from '../../components/Button/Button';
import styles from './Contact.module.css';
import Map from '../../components/Map/Map';

const Contact = (props) => {
  const { sectionWrapper, contentsWrapper, eachContentsWrapper } = styles;

  return (
    <section id={props.id} className={sectionWrapper}>
      <div className={contentsWrapper}>
        <div className={eachContentsWrapper}>
          <Title title='Get in touch' />
          <Caption caption="&lt;p&gt; Don't hesitate to DM! &lt;/p&gt;" />
          <Button message='Contact' href='mailto:soloexkokisakai@gmail.com' />
        </div>
        <div className={eachContentsWrapper}>
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Contact;
