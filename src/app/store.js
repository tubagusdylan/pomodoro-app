import { configureStore } from "@reduxjs/toolkit";
import pomodoroReducer from "../features/pomodoroSlice";

export const store = configureStore({
  reducer: {
    pomodoro: pomodoroReducer,
  },
});
