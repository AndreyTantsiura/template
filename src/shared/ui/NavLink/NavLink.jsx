//react
import { NavLink as RouterNavLink } from 'react-router-dom';
//styles
import styles from './NavLink.module.scss';

export const NavLink = ({ to, text }) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) => (isActive ? styles.active : styles.unActive)}
    >
      {text}
    </RouterNavLink>
  );
};
