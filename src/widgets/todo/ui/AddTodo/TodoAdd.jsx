//react
import { useState } from 'react';
//react-redux
import { useDispatch } from 'react-redux';
//actions
import { addTodo } from '@/entities/todo/model/slice';
//libs
import { v4 as createId } from 'uuid';
//styles
import styles from './TodoAdd.module.scss';
//shared ui
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';


export const TodoAdd = ({}) => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const isAddTodoButtonDisabled = !todoText.trim();

  const onTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  const onAddClickTodo = () => {
    const todo = {
      id: createId(),
      text: todoText,
      completed: false
    };

    dispatch(addTodo(todo));

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
      <Button onClick={onAddClickTodo} disabled={isAddTodoButtonDisabled}>
        Add Todo
      </Button>
    </div>
  );
};
