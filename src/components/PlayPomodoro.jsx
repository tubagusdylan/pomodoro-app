/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import { play, pause, stop } from "../features/pomodoroSlice";

export const PlayPomodoro = () => {
  const { isPlay, isPause } = useSelector((state) => state.pomodoro);
  const dispatch = useDispatch();

  return (
    <div className="w-[200px] mx-auto mt-10 py-6 ">
      {isPlay ? (
        <>
          <button className="w-full text-primary border border-primary flex justify-center items-center gap-2 py-2 mb-2  rounded-full active:bg-teal-800" onClick={() => dispatch(pause())}>
            <i className="fi fi-rr-pause"></i>
            <span>{isPause ? "Continue" : "Pause"}</span>
          </button>
          <button className="w-full bg-primary text-white flex justify-center items-center gap-2 py-2 rounded-full hover:bg-teal-500 hover:bg-opacity-50 active:bg-teal-800" onClick={() => dispatch(stop())}>
            <i className="fi fi-rr-stop"></i>
            <span>Stop</span>
          </button>
        </>
      ) : (
        <button className="w-full bg-primary text-white flex justify-center items-center gap-2 py-2 rounded-full hover:bg-teal-500 hover:bg-opacity-50 active:bg-teal-800" onClick={() => dispatch(play())}>
          <i className="fi fi-rr-play"></i>
          <span>Start to focus</span>
        </button>
      )}
    </div>
  );
};
