import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        BookWorm
      </a>
      <Link className="navLink" to="/search">Search</Link>
        <Link className="navLink" to="/saved">Saved</Link>
    </nav>
  );
}

export default Nav;
