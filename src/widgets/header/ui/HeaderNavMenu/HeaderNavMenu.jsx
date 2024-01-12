//shared ui
import { NavLink } from '@/shared/ui/NavLink';
//items
import { navMenuItems } from './items';
//styles
import styles from './HeaderNavMenu.module.scss';

export const HeaderNavMenu = ({}) => {
  return (
    <div className={styles.HeaderNavMenu}>
      {navMenuItems.map((item) => (
        <NavLink key={item.to} to={item.to} text={item.text} />
      ))}
    </div>
  );
};
