import styles from './SubCaption.module.css';
import TextSpan from './TextSpan';

const CaptionWithDate = (props) => {
  return (
    <p className={styles.subCaption}>
      {props.subCaption}
      <TextSpan contents={props.date} />
    </p>
  );
};

export default CaptionWithDate;
