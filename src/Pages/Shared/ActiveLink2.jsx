import { NavLink } from "react-router-dom";
const ActiveLink2 = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "duration-300 opacity-95 " : " duration-300 opacity-0"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink2;
