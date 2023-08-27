/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useCountdown } from "../hooks/useCountdown";

export const Timer = () => {
  const { isPlay, isPause } = useSelector((state) => state.pomodoro);
  const [isEdit, setIsEdit] = useState(false);
  const { minute, second, start } = useCountdown();
  const [defaultMinute, setDefaultMinute] = useState(25);
  const [menit, setMenit] = useState(defaultMinute);
  const [detik, setDetik] = useState(0);

  const saveMinute = (e) => {
    if (e.target.value <= 0 || e.target.value > 60) {
      return;
    }
    setMenit(e.target.value);
    setDefaultMinute(e.target.value);
    start(e.target.value, 0);
  };

  useEffect(() => {
    if (!isPlay) {
      start(defaultMinute, 0);
      return;
    }
    if (isPause) {
      return;
    }

    start(menit, detik);
  }, [isPlay, isPause]);

  useEffect(() => {
    setDetik(second);
    setMenit(minute);
  }, [minute, second]);

  return (
    <div className="w-[200px] md:w-[300px] mx-auto mt-16 py-6">
      <div className="w-[200px] md:w-[300px] aspect-square border-4 border-primary mx-auto flex justify-center items-center rounded-full group">
        {isEdit ? (
          <div>
            <input autoFocus min={1} max={60} type="number" name="minute" className="bg-transparent w-20 text-6xl md:text-7xl text-right font-semibold remove-arrow focus:outline-none" value={menit} onChange={saveMinute} />
            <span className="text-6xl md:text-7xl font-semibold group-hover:cursor-pointer" onClick={() => setIsEdit(false)}>
              :{`0${second}`}
            </span>
          </div>
        ) : (
          <span className="text-6xl md:text-7xl font-semibold group-hover:cursor-pointer" onClick={() => setIsEdit(true)}>
            {minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second}` : second}
          </span>
        )}
      </div>
    </div>
  );
};
