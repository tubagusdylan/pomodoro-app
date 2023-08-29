import { InputToDo } from "../components/InputToDo";
import { TodoListContainer } from "../components/TodoListContainer";

export const Work = () => {
  return (
    <div className="w-full px-6 py-4 lg:w-[600px] mx-auto bg-secondary bg-opacity-40 min-h-screen">
      <header className="py-2 px-2 flex justify-between">
        <h1 className="font-semibold text-sm md:text-lg text-primary">Hari</h1>
        <h1 className="font-semibold text-sm md:text-lg text-primary">Tanggal</h1>
      </header>
      <div className="mt-4 px-2">
        <InputToDo />
        <TodoListContainer />
      </div>
    </div>
  );
};
