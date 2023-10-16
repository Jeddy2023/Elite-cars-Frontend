import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [content, setContent] = useState("H");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (content === "H"){
      setContent("C")
    }  else {
      setContent("H")
    }
  };

  return (
    <div className="mainnav">
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
        <div
          className={`harmburger ${
            isMenuOpen ? "nav__toggle-open" : "harmburger"
          }`}
          onClick={toggleMenu}
        >
          <h1>{content}</h1>
        </div>
      </nav>
      <div className={`menubar ${isMenuOpen ? "show-menu" : "menubar"}`}>
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
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
