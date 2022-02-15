import styles from './Layout.module.css';

const Layout = (props) => {
  return <h1 className={styles.title}>{props.title}</h1>;
};

export default Layout;
