import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          Elite <span>Rides</span>
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/cars" activeclassname="active">
              Car
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="buttons">
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
