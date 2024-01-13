//styles
import styles from './TodoTask.module.scss';

export const TodoTask = ({ completed, id, text }) => {
  return <div className={styles.TodoTask}>{text}</div>;
};
