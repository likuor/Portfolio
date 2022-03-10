import styles from './TextSpan.module.css';

const TextSpan = ({ contents }) => {
  return <span className={styles.textSpan}>{contents}</span>;
};

export default TextSpan;
