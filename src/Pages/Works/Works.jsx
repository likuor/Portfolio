import Title from '../../components/Texts/Title';
import Caption from '../../components/Texts/Caption';

import styles from './Works.module.css';
import { WorksData } from './WorksData/WorksData';

const Works = (props) => {
  return (
    <section id={props.id} className={styles.sectionWrapper}>
      <div className={styles.contentsWrapper}>
        <Title title='Works' />
        <Caption caption="&lt;p&gt; Here's my works &lt;/p&gt;" />
        <div className={styles.worksWrapper}>
          <ul>
            {WorksData.map((val, index) => {
              return (
                <div className={styles.eachWorksWrapper} key={index}>
                  <li>
                    <a
                      href={val.link}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <div className={styles.imgWrapper}>
                        <img src={val.img} alt={val.alt} />
                      </div>
                    </a>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Works;
