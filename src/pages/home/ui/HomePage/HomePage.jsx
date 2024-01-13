//ui todo
import { Todo } from '@/widgets/todo';
//styles
import styles from './HomePage.module.scss';

export const HomePage = ({}) => {
  return (
    <div className={styles.HomePage}>
      <Todo />
    </div>
  );
};
