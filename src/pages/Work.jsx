import { useEffect, useState } from "react";
import { InputToDo } from "../components/InputToDo";
import { TodoListContainer } from "../components/TodoListContainer";

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const Work = () => {
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");

  const getDateNow = () => {
    const date = new Date();
    setDay(weekday[date.getDay()]);
    setDate(date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear());
  };

  useEffect(() => {
    getDateNow();
  }, []);

  return (
    <div className="w-full px-6 py-4 lg:w-[600px] mx-auto bg-secondary bg-opacity-40 min-h-screen">
      <header className="py-2 px-2 flex justify-between">
        <h1 className="font-semibold text-sm md:text-lg text-primary">{`${day}, ${date}`}</h1>
        <i className="fi fi-rr-sort text-primary"></i>
      </header>
      <div className="mt-4 px-2">
        <InputToDo />
        <TodoListContainer />
      </div>
    </div>
  );
};
