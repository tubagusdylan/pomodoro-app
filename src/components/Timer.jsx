/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useCountdown } from "../hooks/useCountdown";

export const Timer = () => {
  const { isPlay, isPause } = useSelector((state) => state.pomodoro);
  const [isEdit, setIsEdit] = useState(false);
  const { menit, detik, start } = useCountdown(); // udah reduxState
  const [defaultMinute, setDefaultMinute] = useState(30);
  const [menitLocal, setMenitLocal] = useState(defaultMinute);
  const [detikLocal, setDetikLocal] = useState(0);

  const saveMinute = (e) => {
    if (e.target.value <= 0 || e.target.value > 60) {
      return;
    }
    setMenitLocal(e.target.value);
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

    start(menitLocal, detikLocal);
  }, [isPlay, isPause]);

  useEffect(() => {
    setDetikLocal(detik);
    setMenitLocal(menit);
  }, [menit, detik]);

  return (
    <div className="w-[200px] md:w-[300px] mx-auto mt-16 py-6">
      <div className="w-[200px] md:w-[300px] aspect-square border-4 border-primary mx-auto flex justify-center items-center rounded-full group">
        {isEdit ? (
          <div>
            <input autoFocus min={1} max={60} type="number" name="minute" className="bg-transparent w-20 text-6xl md:text-7xl text-right font-semibold remove-arrow focus:outline-none" value={menit} onChange={saveMinute} />
            <span className="text-6xl md:text-7xl font-semibold group-hover:cursor-pointer" onClick={() => setIsEdit(false)}>
              :{`0${detik}`}
            </span>
          </div>
        ) : (
          <span className="text-6xl md:text-7xl font-semibold group-hover:cursor-pointer" onClick={() => setIsEdit(true)}>
            {menit < 10 ? `0${menit}` : menit}:{detik < 10 ? `0${detik}` : detik}
          </span>
        )}
      </div>
    </div>
  );
};
