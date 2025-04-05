import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => clsx(s.link, { [s.active]: isActive });

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/rental-cars" className={buildLinkClass}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
