import { configureStore } from "@reduxjs/toolkit";
import pomodoroReducer from "../features/pomodoroSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    pomodoro: pomodoroReducer,
    user: userReducer,
  },
});
