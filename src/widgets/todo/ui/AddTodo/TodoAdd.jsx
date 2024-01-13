//react
import { useState } from 'react';
//libs
import { v4 as createId } from 'uuid';
//hooks
import { useTodoContext } from '@/shared/libs/hooks/useTodoContext';
//styles
import styles from './TodoAdd.module.scss';
//shared ui
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export const TodoAdd = ({}) => {
  const [todoText, setTodoText] = useState('');
  const { addTodo } = useTodoContext();

  const onTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  const onAddClickTodo = () => {
    const todo = {
      id: createId(),
      text: todoText,
      completed: false
    };

    addTodo(todo);

    setTodoText('');
  };

  return (
    <div className={styles.TodoAdd}>
      <Input
        type='text'
        onChange={onTodoTextChange}
        value={todoText}
        placeholder='write todo'
      />
      <Button onClick={onAddClickTodo}>Add Todo</Button>
    </div>
  );
};
