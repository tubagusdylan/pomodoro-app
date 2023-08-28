/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenitPause, setDefaultMenit, setMinute } from "../features/pomodoroSlice";

export const Timer = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { menit, detik } = useSelector((state) => state.pomodoro);
  const dispatch = useDispatch();

  const saveMinute = (e) => {
    if (e.target.value <= 0 || e.target.value > 60) {
      return;
    }
    const menit = e.target.value;
    dispatch(setMenitPause(e.target.value));
    dispatch(setDefaultMenit(e.target.value));
    dispatch(setMinute({ menit }));
  };

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
