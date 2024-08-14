import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../Feature/todos/todoSlice';

export const store = configureStore({
    reducer: todoSlice,
});