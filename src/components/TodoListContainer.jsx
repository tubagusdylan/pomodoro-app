import { useSelector, useDispatch } from "react-redux";
import { doneTodo, deleteTodo, updateTodo } from "../features/todoSlice";

import { TodoPopup } from "./TodoPopup";
import { useState } from "react";

export const TodoListContainer = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [currentIndex, setCurrenIndex] = useState(0);
  const [currentId, setCurrentId] = useState(0);
  const [currentActivity, setCurrentActivity] = useState("");
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleOpenPopup = (id, activity, index) => {
    setOpenPopup(true);
    setCurrentId(id);
    setCurrentActivity(activity);
    setCurrenIndex(index);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setCurrentId(0);
  };

  const handleDeleteTodo = () => {
    setOpenPopup(false);
    dispatch(deleteTodo(currentId));
    setCurrentId(0);
  };

  const handleUpdateTodo = () => {
    setOpenPopup(false);
    const newTodo = {
      ...todos[currentIndex],
      activity: currentActivity,
    };

    const id = currentId;
    dispatch(updateTodo({ id, newTodo }));
  };

  const handleNewTodo = (e) => {
    setCurrentActivity(e.target.value);
  };

  return (
    <div className="mt-6 rounded-sm">
      <TodoPopup openPopup={openPopup} handleClosePopup={handleClosePopup} handleDeleteTodo={handleDeleteTodo} currentActivity={currentActivity} handleUpdateTodo={handleUpdateTodo} handleNewTodo={handleNewTodo} />
      {todos.map((todo, index) => {
        return (
          <div key={index} className="px-4 py-3 bg-slate-50 mb-1 rounded-sm flex justify-between">
            <div>
              <input type="checkbox" name="done" id="done" className="custom-checkbox" checked={todo.done} onChange={() => dispatch(doneTodo(todo.id))} />
              {todo.done ? <span className="font-semibold text-slate-400 line-through">{todo.activity}</span> : <span className="font-semibold">{todo.activity}</span>}
            </div>
            <i className="fi fi-rr-settings-sliders text-right text-primary cursor-pointer" onClick={() => handleOpenPopup(todo.id, todo.activity, index)}></i>
          </div>
        );
      })}
    </div>
  );
};
