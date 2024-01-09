//react
import { Route, Routes } from 'react-router-dom';
//pages
import { HomePage } from '@/pages/home';
import { AboutPage } from '@/pages/about';
import { ProfilePage } from '@/pages/profile';
//routes
import {
  getAboutRoute,
  getHomeRoute,
  getProfileRoute
} from '@/shared/libs/constants/routes';

export const RouteProvider = ({}) => {
  return (
    <Routes>
      <Route path={getHomeRoute()} element={<HomePage />} />
      <Route path={getProfileRoute()} element={<ProfilePage />} />
      <Route path={getAboutRoute()} element={<AboutPage />} />
    </Routes>
  );
};