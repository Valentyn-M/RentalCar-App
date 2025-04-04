import { forwardRef } from 'react';
import s from './Button.module.css';

const Button = forwardRef(({ type, children, ...rest }, ref) => {
  return (
    <button type={type} className={s.button} ref={ref} {...rest}>
      {children}
    </button>
  );
});

export default Button;
