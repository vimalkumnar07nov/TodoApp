import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: 1, text: 'hello todo' }]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action) => { 
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
         },
        remove: (state, action) => { 
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
         },
    }
});

export const { add, remove } = todoSlice.actions;
export default todoSlice.reducer;