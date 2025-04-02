import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => clsx(s.link, { [s.active]: isActive });
  return (
    <nav>
      <NavLink to="/" end className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/rental-cars" end className={buildLinkClass}>
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
