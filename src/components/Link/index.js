import "./Link.css"
import { NavLink } from "react-router-dom";

function Link({ children, href, active = false }) {
  const activeClass = active ? ' active' : ''
  return <NavLink className={`Link${activeClass}`} to={href}>{children}</NavLink>
}

export default Link;
