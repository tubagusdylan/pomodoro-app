import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { stop } from "../features/pomodoroSlice";

export const useCountdown = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const { isPlay, isPause } = useSelector((state) => state.pomodoro);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isPlay) {
      return;
    }
    if (isPause) {
      return;
    }

    const timeout = setTimeout(() => {
      setSecond(second - 1);
    }, 1000);

    if (second <= 0 && minute <= 0) {
      dispatch(stop());
    } else if (second < 0) {
      setSecond(59);
      setMinute(minute - 1);
    }

    return () => clearTimeout(timeout);
  }, [isPlay, isPause, second, minute, dispatch]);

  function start(minute, second) {
    setSecond(second);
    setMinute(minute);
  }

  return { minute, second, start };
};
