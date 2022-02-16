import styles from './SubCaption.module.css';

const SubCaption = (props) => {
  return <p className={styles.subCaption}>{props.subCaption}</p>;
};

export default SubCaption;
