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
      console.log(index);
      state.todos[index].done = !state.todos[index].done;
    },
  },
});

export const { createTodo, doneTodo } = todoSlice.actions;
export default todoSlice.reducer;
