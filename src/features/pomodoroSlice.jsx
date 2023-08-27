import { createSlice } from "@reduxjs/toolkit";

const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState: {
    isPlay: false,
    isPause: false,
    detik: 0,
    menit: 0,
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
      state.menit = action.payload.menit;
    },
    setMinutePlay: (state) => {
      state.menit = state.menit - 1;
    },
    setSecond: (state, action) => {
      state.detik = action.payload.detik;
    },
    setSecondPlay: (state) => {
      state.detik = state.detik - 1;
    },
  },
});

export const { play, pause, stop, setMinute, setMinutePlay, setSecond, setSecondPlay } = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
