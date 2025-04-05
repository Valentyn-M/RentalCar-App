import s from './AppBar.module.scss';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const AppBar = () => {
  const svgIcon = '/sprite.svg';

  return (
    <div className={clsx(s.navWrap, 'container')}>
      <nav className={s.navHome}>
        <NavLink to="/" className={s.linkHome}>
          <svg className={s.iconLogo}>
            <use href={`${svgIcon}#icon-RentalCar`} />
          </svg>
        </NavLink>
      </nav>
      <Navigation />
    </div>
  );
};

export default AppBar;
