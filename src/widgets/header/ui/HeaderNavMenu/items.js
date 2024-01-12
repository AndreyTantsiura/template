//routes
import {
  getAboutRoute,
  getHomeRoute,
  getProfileRoute
} from '@/shared/libs/constants/routes';

export const navMenuItems = [
  { to: getHomeRoute(), text: 'Home' },
  { to: getProfileRoute(), text: 'Profile' },
  { to: getAboutRoute(), text: 'About' }
];
