import buttonStyles from './Button.module.css';

const Button = ({ href, message }) => {
  const { btn, contentsBtn } = buttonStyles;

  return (
    <div className={contentsBtn}>
      <a href={href} target='_blank' rel='noopener noreferrer' className={btn}>
        {message}
      </a>
    </div>
  );
};

export default Button;
