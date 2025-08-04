import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "I want to stay active on GitHub daily and push code." },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (newTodo) => newTodo.id !== action.payload
      );
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
