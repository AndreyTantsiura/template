//react
import { Outlet } from 'react-router-dom';
//widgets
import { Header } from '@/widgets/header';

export const HeaderLayout = ({}) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
