import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="page-nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active-link" : "nav-link"
        }>
        Start
      </NavLink>
      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive ? "nav-link active-link" : "nav-link"
        }>
        Galleri
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "nav-link active-link" : "nav-link"
        }>
        Om mig
      </NavLink>
    </nav>
  );
}
