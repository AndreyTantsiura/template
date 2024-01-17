//react
import { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
//hooks
import { useTodoContext } from '@/shared/libs/hooks';
//shared ui
import { Input } from '@/shared/ui/Input';
//styles
import styles from './TodoTask.module.scss';

export const TodoTask = ({ completed, id, text }) => {
  const { deleteTodo, updateTodo } = useTodoContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const isEditedText = !editedText.trim();

  const onEditCheckClick = () => {
    setIsEditing(true);
  };

  const onDeleteClick = () => {
    deleteTodo(id);
  };

  const onEditedTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const onUpdateTodoClick = () => {
    const todo = {
      id: id,
      completed: isEditing,
      text: editedText
    };

    updateTodo(todo);

    setIsEditing(false);
  };

  return (
    <div className={styles.TodoTask}>
      {!isEditing ? (
        <>
          <div>{text}</div>
          <div className={styles.icons}>
            {!completed ? (
              <MdEdit className={styles.editIcon} onClick={onEditCheckClick} />
            ) : (
              <FaCheck className={styles.completed} />
            )}
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
