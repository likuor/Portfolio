import styles from './TextSpan.module.css';

const TextSpan = (props) => {
  return <span className={styles.textSpan}>{props.contents}</span>;
};

export default TextSpan;
