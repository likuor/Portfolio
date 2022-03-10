import styles from './SubCaption.module.css';

const SubCaption = ({ subCaption }) => {
  return <p className={styles.subCaption}>{subCaption}</p>;
};

export default SubCaption;
