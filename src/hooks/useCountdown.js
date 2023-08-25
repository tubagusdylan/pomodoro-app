import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useCountdown = () => {
  const [second, setSecond] = useState(0);
  const { isPlay } = useSelector((state) => state.pomodoro);

  useEffect(() => {
    if (!isPlay) {
      return;
    }
    const timeout = setTimeout(() => {
      setSecond(second - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isPlay, second]);

  function start(second) {
    setSecond(second);
  }

  return { second, start };
};
