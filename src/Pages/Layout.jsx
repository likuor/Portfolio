import styles from './Home/Home.module.css';

const Layout = (props) => {
  return (
    <div className={styles.contentsWrapper}>
      <h1 className={styles.titleH1}>{props.title}</h1>
      <p>{props.name}</p>
      <p>{props.content}</p>
      <h4 className={styles.titleH4}>{props.subTitle}</h4>
    </div>
  );
};

export default Layout;
