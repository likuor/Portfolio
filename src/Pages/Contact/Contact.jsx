import Title from '../../components/Texts/Title';
import Caption from '../../components/Texts/Caption';
import Button from '../../components/Button/Button';
import styles from '../Layout.module.css';

const Contact = (props) => {
  return (
    <section id='contact' className={styles.sectionWrapper}>
      <div className={styles.contentsWrapper}>
        <Title title='Get in touch' />
        <Caption caption="&lt;p&gt; Don't hesitate to DM! &lt;/p&gt;" />
        <Button message='Welcome' url='https://twitter.com/le_pereza' />
      </div>
    </section>
  );
};

export default Contact;
