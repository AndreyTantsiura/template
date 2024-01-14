//react
import { Outlet } from 'react-router-dom';
//widgets
import { Header } from '@/widgets/header';
//styles
import styles from './HeaderLayout.module.scss';

export const HeaderLayout = ({}) => {
  return (
    <dic className={styles.HeaderLayout}>
      <Header />
      <Outlet />
    </dic>
  );
};
