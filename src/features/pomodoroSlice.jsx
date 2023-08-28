import { createSlice } from "@reduxjs/toolkit";

const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState: {
    isPlay: false,
    isPause: false,
    detik: 0,
    menit: 0,
    defaultMenit: 25,
    menitPause: 0,
    detikPause: 0,
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
    setDefaultMenit: (state, action) => {
      state.defaultMenit = action.payload;
    },
    setMenitPause: (state, action) => {
      state.menitPause = action.payload;
    },
    setDetikPause: (state, action) => {
      state.detikPause = action.payload;
    },
  },
});

export const { play, pause, stop, setMinute, setMinutePlay, setSecond, setSecondPlay, setDefaultMenit, setMenitPause, setDetikPause } = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
