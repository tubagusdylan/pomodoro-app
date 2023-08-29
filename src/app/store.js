import { configureStore } from "@reduxjs/toolkit";
import pomodoroReducer from "../features/pomodoroSlice";
import userReducer from "../features/userSlice";
import todoReducer from "../features/todoSlice";

export const store = configureStore({
  reducer: {
    pomodoro: pomodoroReducer,
    user: userReducer,
    todo: todoReducer,
  },
});
