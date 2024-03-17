import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "Feed Tiger dinner", completed: false },
    { id: 2, text: "Clean out fridge", completed: false },
    { id: 3, text: "Do laundry", completed: false },
  ],
  appTitle: "Katherine's Todo List",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToTodos: (state, action) => {
      const newTodo = action.payload;
      state.todos.push(newTodo);
    },
    toggleToDo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
});

export const { addToTodos, toggleToDo } = todoSlice.actions;
export default todoSlice.reducer;
