import { NavLink } from "react-router-dom";
import home from "../assets/home.svg";
import edit from "../assets/edit.svg";
import stats from "../assets/chart-histogram.svg";
import music from "../assets/list-music.svg";

export const Navbar = () => {
  return (
    <div className="w-full px-6 py-2 bg-sky-300 flex justify-center gap-10">
      <NavLink to="/" className="py-2 px-6 rounded-full hover:bg-white">
        <img src={home} alt="home" width={20} />
      </NavLink>
    </div>
  );
};
