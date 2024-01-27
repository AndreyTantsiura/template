//redux
import { configureStore } from '@reduxjs/toolkit';
//reducer
import reducer from '@/entities/todo/model/slice/todoSlice';

const rootReducer = {
  todo: reducer
};

export const store = configureStore({
  reducer: rootReducer
});
