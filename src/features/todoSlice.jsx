import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    createTodo: (state, action) => {
      state.todos.push({ ...action.payload });
    },
    doneTodo: (state, action) => {
      const index = state.todos.findIndex(({ id }) => {
        return id === action.payload;
      });
      state.todos[index].done = !state.todos[index].done;
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex(({ id }) => {
        return id === action.payload;
      });
      state.todos.splice(index, 1);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(({ id }) => {
        return id === action.payload.id;
      });

      state.todos.splice(index, 1, action.payload.newTodo);
    },
  },
});

export const { createTodo, doneTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
