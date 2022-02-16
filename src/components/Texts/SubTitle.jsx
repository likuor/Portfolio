import styles from './subTitle.module.css';

const SubTitle = (props) => {
  return <h1 className={styles.subTitle}>{props.subTitle}</h1>;
};

export default SubTitle;
