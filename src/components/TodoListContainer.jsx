import { useSelector, useDispatch } from "react-redux";
import { doneTodo } from "../features/todoSlice";
import { TodoPopup } from "./TodoPopup";
import { useState } from "react";

export const TodoListContainer = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div className="mt-6 rounded-sm">
      <TodoPopup openPopup={openPopup} handleClosePopup={handleClosePopup} />
      {todos.map((todo, index) => {
        return (
          <div key={index} className="px-4 py-3 bg-slate-50 mb-1 rounded-sm flex justify-between">
            <div>
              <input type="checkbox" name="done" id="done" className="custom-checkbox" checked={todo.done} onChange={() => dispatch(doneTodo(todo.id))} />
              {todo.done ? <span className="font-semibold text-slate-400 line-through">{todo.activity}</span> : <span className="font-semibold">{todo.activity}</span>}
            </div>
            <i className="fi fi-rr-settings-sliders text-right text-primary cursor-pointer" onClick={handleOpenPopup}></i>
          </div>
        );
      })}
    </div>
  );
};
