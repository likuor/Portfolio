import styles from './Layout.module.css';

const Caption = (props) => {
  return <p className={styles.caption}>{props.caption}</p>;
};

export default Caption;
