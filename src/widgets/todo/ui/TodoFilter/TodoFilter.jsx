//react
import { useState, useEffect } from 'react';
import {
  MdFilterListOff,
  MdCheckBox,
  MdOutlineCheckBoxOutlineBlank
} from 'react-icons/md';
//styles
import styles from './TodoFilter.module.scss';
//shared ui
import { TodoTaskList } from '../TodoTaskList/TodoTaskList';
//hook
import { useTodoContext } from '@/shared/libs/hooks/useTodoContext';

export const TodoFilter = ({}) => {
  const { todos } = useTodoContext();
const [filteredTodos, setFilteredTodos] = useState(todos)

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const todoFilter = (switchFilter) => {
    if (switchFilter === null) {
      setFilteredTodos(todos);
    }
    if (switchFilter === true) {
      const completedTodos = todos.filter((todo) => todo.completed);
      setFilteredTodos(completedTodos);
    }
    if (switchFilter === false) {
      const unCompletedTodos = todos.filter((todo) => !todo.completed);
      setFilteredTodos(unCompletedTodos);
    }
  };

  return (
    <>
      {todos.length > 0 && (
        <div className={styles.TodoFilter}>
          <MdFilterListOff
            className={styles.checkbox}
            onClick={() => {todoFilter(null)}}
          />
          <MdCheckBox
            className={styles.checkbox}
            onClick={() => {todoFilter(true)}}
          />
          <MdOutlineCheckBoxOutlineBlank
            className={styles.checkbox}
            onClick={() => {todoFilter(false)}}
          />
        </div>
      )}
      <TodoTaskList filteredTodos={filteredTodos} />
    </>
  );
};
