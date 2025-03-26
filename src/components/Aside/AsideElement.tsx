import { NavLink } from "react-router-dom";
import { AsideElementScheme } from "../../helpers/types";

export const AsideElement: React.FC<AsideElementScheme> = ({ to, icon }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-3 hover:bg-primary text-gray-900 rounded-full group ${
          isActive ? "bg-primary shadow-[0px_0px_20px_-3px] shadow-white" : ""
        }`
      }
    >
      {icon}
    </NavLink>
  );
};
