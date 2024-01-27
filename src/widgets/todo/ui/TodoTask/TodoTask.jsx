//react
import { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
//react-redux
import { useDispatch } from 'react-redux';
//selectors
import { deleteTodo, updateTodo } from '@/entities/todo/model/slice';
//shared ui
import { Input } from '@/shared/ui/Input';
import { Checkbox } from '@/shared/ui/Checkbox';
//styles
import styles from './TodoTask.module.scss';

export const TodoTask = ({ completed, id, text }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const isEditedText = !editedText.trim();

  const onEditCheckClick = () => {
    setIsEditing(true);
  };

  const onDeleteClick = () => {
    dispatch(deleteTodo(id));
  };

  const onEditedTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const onUpdateTodoClick = () => {
    const todo = {
      id: id,
      completed: completed,
      text: editedText
    };

    dispatch(updateTodo(todo));

    setIsEditing(false);
  };

  const onToggleCompleteTodo = () => {
    const todo = {
      id: id,
      text: text,
      completed: !completed
    };

    dispatch(updateTodo(todo));
  };

  return (
    <div className={styles.TodoTask}>
      {!isEditing ? (
        <>
          <div>{text}</div>
          <div className={styles.icons}>
            <Checkbox
              className={styles.checkbox}
              isChecked={completed}
              onChange={onToggleCompleteTodo}
            />
            <MdEdit className={styles.editIcon} onClick={onEditCheckClick} />
            <MdDelete className={styles.deleteIcon} onClick={onDeleteClick} />
          </div>
        </>
      ) : (
        <>
          <Input value={editedText} onChange={onEditedTextChange} type='text' />
          {!isEditedText && (
            <FaCheck className={styles.checkIcon} onClick={onUpdateTodoClick} />
          )}
        </>
      )}
    </div>
  );
};
