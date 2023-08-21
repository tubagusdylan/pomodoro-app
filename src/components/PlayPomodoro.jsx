export const PlayPomodoro = () => {
  return (
    <div className="w-[200px] mx-auto mt-10 py-6 ">
      <button className="w-full bg-primary text-white flex justify-center items-center gap-2 py-2 rounded-full hover:bg-teal-500 hover:bg-opacity-50 active:bg-teal-800">
        <i className="fi fi-rr-play"></i>
        <span>Start to focus</span>
      </button>
    </div>
  );
};
