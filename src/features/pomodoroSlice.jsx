import { createSlice } from "@reduxjs/toolkit";

const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState: {
    isPlay: false,
    isPause: false,
  },
  reducers: {
    play: (state) => {
      state.isPlay = true;
    },
    pause: (state) => {
      state.isPause = !state.isPause;
    },
    stop: (state) => {
      state.isPlay = false;
    },
  },
});

export const { play, pause, stop } = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
