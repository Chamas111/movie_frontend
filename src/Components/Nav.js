import React from "react";
import { NavLink } from "react-router-dom";
import { Person } from "react-bootstrap-icons";

import logo from "./logo.png";
const Nav = () => {
  return (
    <>
      <div id="main-header">
        <img id="main-logo" src={logo} alt="logo" />
        <nav id="main-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies/new">Add Movie</NavLink>
        </nav>
        <button id="main-btn">
          <Person /> Login
        </button>
      </div>
    </>
  );
};

export default Nav;
