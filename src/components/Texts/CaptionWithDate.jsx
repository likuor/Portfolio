import styles from './SubCaption.module.css';
import TextSpan from './TextSpan';

const CaptionWithDate = ({ date, subCaption }) => {
  return (
    <p className={styles.subCaption}>
      {subCaption}
      <TextSpan contents={date} />
    </p>
  );
};

export default CaptionWithDate;
