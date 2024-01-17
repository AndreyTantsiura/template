//react
import { useState } from 'react';
//context
import { TodoContext } from './TodoContext';

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const todosWithNewTodo = [...todos, todo];
    setTodos(todosWithNewTodo);
  };

  const deleteTodo = (id) => {
    const todosWithoutTodo = todos.filter((todo) => todo.id != id);
    setTodos(todosWithoutTodo);
  };

  const updateTodo = (updatedTodo) => {
    const todosWithUpdateTodod = todos.map((todo) => {
      return todo.id === updatedTodo.id ? { ...updatedTodo } : todo;
    });
    setTodos(todosWithUpdateTodod);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
