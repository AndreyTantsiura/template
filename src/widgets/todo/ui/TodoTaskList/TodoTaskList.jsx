//styles
import styles from './TodoTaskList.module.scss';
//ui todo
import { TodoTask } from '../TodoTask/TodoTask';

export const TodoTaskList = ({ filteredTodos }) => {
  return (
    <div className={styles.TodoTaskList}>
      {filteredTodos.map((todo) => (
        <TodoTask
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          text={todo.text}
        />
      ))}
    </div>
  );
};
