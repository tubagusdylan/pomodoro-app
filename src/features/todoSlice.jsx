import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    createTodo: (state, action) => {
      state.push({ ...action.payload });
    },
  },
});

export const { createTodo } = todoSlice.actions;
export default todoSlice.reducer;
