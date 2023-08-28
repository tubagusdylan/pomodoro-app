/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Music } from "./pages/Music";
import { Tracking } from "./pages/Tracking";
import { Navbar } from "./components/Navbar";
import { useEffect } from "react";
import { useCountdown } from "./hooks/useCountdown";
import { useDispatch, useSelector } from "react-redux";
import { setMenitPause, setDetikPause } from "./features/pomodoroSlice";

function App() {
  const { isPlay, isPause, defaultMenit, menitPause, detikPause } = useSelector((state) => state.pomodoro);
  const { menit, detik, start } = useCountdown(); // udah reduxState
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isPlay) {
      start(defaultMenit, 0);
      return;
    }
    if (isPause) {
      return;
    }

    start(menitPause, detikPause);
  }, [isPlay, isPause]);

  // timer tetap berjalan walupun pindah page
  useEffect(() => {
    dispatch(setDetikPause(detik));
    dispatch(setMenitPause(menit));
  }, [detik, menit, dispatch]);

  return (
    <div className="relative bg-slate-200">
      <BrowserRouter>
        <div className="w-full lg:w-[600px] mx-auto fixed bottom-0 left-0 lg:left-1/2 lg:-translate-x-1/2">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/track" element={<Tracking />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
