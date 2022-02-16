import buttonStyles from './Button.module.css';

const Caption = (props) => {
  return (
    <div className={buttonStyles.contentsBtn}>
      <a
        href={props.url}
        target='_blank'
        rel='noopener noreferrer'
        className={buttonStyles.btn}
      >
        {props.message}
      </a>
    </div>
  );
};

export default Caption;
