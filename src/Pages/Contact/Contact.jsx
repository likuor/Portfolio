import Button from '../../components/Button/Button';
import styles from './Contact.module.css';
import Map from '../../components/Map/Map';

const Contact = (props) => {
  const { sectionWrapper, contentsWrapper, eachContentsWrapper } = styles;

  return (
    <section id={props.id} className={sectionWrapper}>
      <div className={contentsWrapper}>
        <div className={eachContentsWrapper}>
          <h1 className={styles.title}>Get in touch</h1>
          <p className={styles.caption}>
            &lt;p&gt; Don't hesitate to DM! &lt;/p&gt;
          </p>
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
