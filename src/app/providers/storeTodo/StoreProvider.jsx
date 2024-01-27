//react-redux
import { Provider } from 'react-redux';
//store
import { store } from './store';

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
