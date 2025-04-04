import s from './Button.module.css';

const Button = ({ type = 'button', children, ...rest }) => {
  return (
    <button type={type} className={s.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
