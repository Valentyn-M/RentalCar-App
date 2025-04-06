import s from './LoaderWheel.module.scss';
import { GiCarWheel } from 'react-icons/gi';

const LoaderWheel = ({ size = 64, color = 'var(--button)', speed = 1 }) => {
  return (
    <GiCarWheel
      size={size}
      className={s.loaderWheel}
      style={{
        color,
        animationDuration: `${speed}s`,
      }}
    />
  );
};

export default LoaderWheel;
