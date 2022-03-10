import styles from './subTitle.module.css';

const SubTitle = ({ subTitle }) => {
  return <h1 className={styles.subTitle}>{subTitle}</h1>;
};

export default SubTitle;
