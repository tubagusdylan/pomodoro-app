/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMinute, setMinutePlay } from "../features/pomodoroSlice";
import { useCountdown } from "../hooks/useCountdown";
import { useEffect } from "react";

export const Timer = () => {
  const { minute, isPlay } = useSelector((state) => state.pomodoro);
  const [menit, setMenit] = useState(minute);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const { second, start } = useCountdown();

  const saveMinute = () => {
    if (String(minute).length === 0) {
      return;
    }
    dispatch(setMinute({ menit }));
    setIsEdit(false);
  };

  useEffect(() => {
    if (!isPlay) {
      start(0);
      return;
    }
    if (second < 0) {
      dispatch(setMinutePlay());
    }
    start(59);
  }, [isPlay, minute, dispatch]);

  return (
    <div className="w-[200px] md:w-[300px] mx-auto mt-16 py-6">
      <div className="w-[200px] md:w-[300px] aspect-square border-4 border-primary mx-auto flex justify-center items-center rounded-full group">
        {isEdit ? (
          <div>
            <input autoFocus type="number" name="minute" className="bg-transparent w-20 text-6xl md:text-7xl text-right font-semibold remove-arrow focus:outline-none" value={menit} onChange={(e) => setMenit(e.target.value)} />
            <span className="text-6xl md:text-7xl font-semibold group-hover:cursor-pointer" onClick={saveMinute}>
              :{second}
            </span>
          </div>
        ) : (
          <span className="text-6xl md:text-7xl font-semibold group-hover:cursor-pointer" onClick={() => setIsEdit(true)}>
            {minute}:{second}
          </span>
        )}
      </div>
    </div>
  );
};
