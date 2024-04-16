import "./Link.css"
import { NavLink } from "react-router-dom";

function Link({ children, href }) {
  return <NavLink className="Link" to={href}>{children}</NavLink>
}

export default Link;
