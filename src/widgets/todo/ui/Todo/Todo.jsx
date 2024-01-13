//provider
import {TodoProvider}from '@/app/providers/context/todo/TodoProvider'
//styles
import styles from './Todo.module.scss';
//ui todo
import { TodoAdd } from '../AddTodo/TodoAdd';
import { TodoTaskList } from '../TodoTaskList/TodoTaskList';

export const Todo = ({}) => {
  return (
    <TodoProvider>
      <div className = {styles.todo}>
        <TodoAdd/>
        <TodoTaskList/>
      </div>
    </TodoProvider>
  )
};
