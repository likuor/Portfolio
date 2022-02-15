import styles from './Home.module.css';

const Home = (props) => {
  return (
    <section id={props.id}>
      <div className={styles.mainWrapper}>
        <div className={styles.contentsWrapper}>
          <h1 className={styles.titleH1}>{props.title}</h1>
          <p>{props.name}</p>
          <p>{props.content}</p>
          <h4 className={styles.titleH4}>{props.subTitle}</h4>
        </div>
      </div>
    </section>
  );
};

export default Home;
