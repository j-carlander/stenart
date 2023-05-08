import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

export function Nav() {
  return (
    <nav className="page-nav">
      <Link to="/">Start</Link>
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
