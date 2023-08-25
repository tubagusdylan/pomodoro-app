import { createSlice } from "@reduxjs/toolkit";

const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState: {
    isPlay: false,
    isPause: false,
    minute: 25,
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
    setMinute: (state, action) => {
      state.minute = action.payload.menit;
    },
    setMinutePlay: (state) => {
      state.minute--;
    },
  },
});

export const { play, pause, stop, setMinute, setMinutePlay } = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
