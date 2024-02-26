import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "Feed Tiger dinner.", status: "incomplete" },
    { id: 2, text: "Clean out fridge.", status: "incomplete" },
    { id: 3, text: "Do laundry", status: "incomplete" },
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
    someOtherFunction: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { addToTodos, someOtherFunction } = todoSlice.actions;
export default todoSlice.reducer;
