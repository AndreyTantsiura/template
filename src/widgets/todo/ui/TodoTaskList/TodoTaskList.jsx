//hook
import { useTodoContext } from '@/shared/libs/hooks/useTodoContext';
//styles
import styles from './TodoTaskList.module.scss';
//ui todo
import { TodoTask } from '../TodoTask/TodoTask';

export const TodoTaskList = ({}) => {
  const { todos } = useTodoContext();

  return (
    <div className={styles.TodoTaskList}>
      {todos.map((todo) => (
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
