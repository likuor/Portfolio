import buttonStyles from './Button.module.css';

const Caption = (props) => {
  const { url, message } = props;
  const { btn, contentsBtn } = buttonStyles;

  return (
    <div className={contentsBtn}>
      <a href={url} target='_blank' rel='noopener noreferrer' className={btn}>
        {message}
      </a>
    </div>
  );
};

export default Caption;
