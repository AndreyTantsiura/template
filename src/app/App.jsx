//config
import { RouteProvider } from './config/routeConfig/ui/RouteProvider';
//styles
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <RouteProvider />
      </div>
    </div>
  );
};

export default App;
