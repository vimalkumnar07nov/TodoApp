import { createSlice } from "@reduxjs/toolkit";

// Utility function to load todos from localStorage
const loadTodosFromLocalStorage = () => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  };

// Utility function to save todos to localStorage
const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

const initialState = {
    todos: loadTodosFromLocalStorage(),
    // todos: [{id: 1, text: 'hello word'}],
  };

  const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            state.todos.push({id: Date.now(), text: action.payload });
            saveTodosToLocalStorage(state.todos);
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload);
            saveTodosToLocalStorage(state.todos);
        }
    }
  });

  export const {addTodo,removeTodo}= todoSlice.actions;
  export default todoSlice.reducer;