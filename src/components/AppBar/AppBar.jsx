import s from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <div>
      <nav className={s.navHome}>
        <NavLink to="/" className={s.linkHome}>
          Rental<span className="primary-color">Car</span>
        </NavLink>
      </nav>
      <Navigation />
    </div>
  );
};

export default AppBar;
