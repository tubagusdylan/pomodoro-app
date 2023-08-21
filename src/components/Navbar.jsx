import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full px-6 py-2 bg-primary flex justify-center md:gap-10">
      <NavLink to="/" className="py-2 px-8 rounded-full hover:bg-white hover:bg-opacity-20 group">
        <i className="fi fi-rr-home text-white"></i>
      </NavLink>
      <NavLink to="/work" className="py-2 px-8 rounded-full hover:bg-white hover:bg-opacity-20 group">
        <i className="fi fi-rr-edit text-white"></i>
      </NavLink>
      <NavLink to="/track" className="py-2 px-8 rounded-full hover:bg-white hover:bg-opacity-20 group">
        <i className="fi fi-rr-chart-histogram text-white"></i>
      </NavLink>
      <NavLink to="/music" className="py-2 px-8 rounded-full hover:bg-white hover:bg-opacity-20 group">
        <i className="fi fi-rr-list-music text-white"></i>
      </NavLink>
    </div>
  );
};
