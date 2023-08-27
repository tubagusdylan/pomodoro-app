import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { stop, setMinute, setMinutePlay, setSecond, setSecondPlay } from "../features/pomodoroSlice";

export const useCountdown = () => {
  // const [second, setSecond] = useState(0);
  // const [minute, setMinute] = useState(0);
  const { isPlay, isPause, menit, detik } = useSelector((state) => state.pomodoro);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isPlay) {
      return;
    }
    if (isPause) {
      return;
    }

    const timeout = setTimeout(() => {
      dispatch(setSecondPlay());
    }, 1000);

    if (detik <= 0 && menit <= 0) {
      dispatch(stop());
    } else if (detik < 0) {
      const detik = 59;
      dispatch(setSecond({ detik }));
      dispatch(setMinutePlay());
    }

    return () => clearTimeout(timeout);
  }, [isPlay, isPause, detik, menit, dispatch]);

  function start(menit, detik) {
    dispatch(setSecond({ detik }));
    dispatch(setMinute({ menit }));
  }

  return { menit, detik, start };
};
