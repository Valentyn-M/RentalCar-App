import { forwardRef } from 'react';
import s from './Button.module.scss';

const Button = forwardRef(({ type, children, ...rest }, ref) => {
  return (
    <button type={type} className={s.button} ref={ref} {...rest}>
      {children}
    </button>
  );
});

export default Button;
