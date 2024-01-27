//react-redux
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo?.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.list = state.list.map((todo) =>
        todo.id === action.payload.id ? { ...action.payload } : todo
      );
    }
  }
});

const { actions, reducer } = todoSlice;
export const { addTodo, deleteTodo, updateTodo } = actions;
export default reducer;
