//provider
import { TodoProvider } from '@/app/providers/context/todo/TodoProvider';
//styles
import styles from './Todo.module.scss';
//ui todo
import { TodoAdd } from '../AddTodo/TodoAdd';
import { TodoFilter } from '../TodoFilter/TodoFilter';

export const Todo = ({}) => {
  return (
    <TodoProvider>
      <div className={styles.todo}>
        <TodoAdd />
        <TodoFilter />
      </div>
    </TodoProvider>
  );
};
