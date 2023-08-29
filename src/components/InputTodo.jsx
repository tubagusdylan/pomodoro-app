import { useDispatch } from "react-redux";
import { createTodo } from "../features/todoSlice";
import { useState } from "react";

export const InputToDo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleTodo = (e) => {
    e.preventDefault();
    if (!task) {
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 100),
      activity: task,
      done: false,
    };

    dispatch(createTodo(newTodo));
    setTask("");
  };

  return (
    <div className="bg-slate-50 px-4 rounded-sm">
      <form onSubmit={handleTodo} noValidate>
        <i className="fi fi-rr-plus lg:w-[10%] text-primary"></i>
        <input type="text" className="bg-slate-50 px-5 py-2 w-[95%] outline-none text-primary" placeholder="Add Task..." value={task} onChange={(e) => setTask(e.target.value)} required />
      </form>
    </div>
  );
};
