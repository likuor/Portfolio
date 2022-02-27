import styles from './SubCaption.module.css';
import TextSpan from './TextSpan';

const CaptionWithDate = (props) => {
  const { date, subCaption } = props;

  return (
    <p className={styles.subCaption}>
      {subCaption}
      <TextSpan contents={date} />
    </p>
  );
};

export default CaptionWithDate;
