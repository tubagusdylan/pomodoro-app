import { PlayPomodoro } from "../components/PlayPomodoro";
import { Timer } from "../components/Timer";

export const Home = () => {
  return (
    <div className="w-full px-6 py-4 lg:w-[600px] mx-auto bg-secondary bg-opacity-40 min-h-screen">
      <header className="w-full flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-primary text-lg">
            Hello, <span className="font-bold">name</span>
          </h1>
        </div>
        <button className="border border-primary group px-3 rounded-full py-1 text-primary hover:bg-primary hover:text-white">
          <img src="" alt="" id="profile-picture" className="group-hover:cursor-pointer" />
          Sign In
        </button>
      </header>
      <section>
        <Timer />
      </section>
      <section>
        <PlayPomodoro />
      </section>
    </div>
  );
};
