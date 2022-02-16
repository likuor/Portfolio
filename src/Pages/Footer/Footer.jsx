import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <h1 className={styles.copyRight}>
          © 2022 Koki Sakai, All Rights Reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
