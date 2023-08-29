import { useSelector, useDispatch } from "react-redux";
import { doneTodo } from "../features/todoSlice";

export const TodoListContainer = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="mt-6 rounded-sm">
      {todos.map((todo, index) => {
        return (
          <div key={index} className="px-4 py-3 bg-slate-50 mb-1 rounded-sm">
            <input type="checkbox" name="done" id="done" className="custom-checkbox" checked={todo.done} onChange={() => dispatch(doneTodo(todo.id))} />
            {todo.done ? <span className="font-semibold text-slate-400 line-through">{todo.activity}</span> : <span className="font-semibold">{todo.activity}</span>}
          </div>
        );
      })}
    </div>
  );
};
