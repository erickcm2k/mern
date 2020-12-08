import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li onClick={props.closeDrawer}>
        <NavLink exact to="/">
          All Users
        </NavLink>
      </li>
      <li onClick={props.closeDrawer}>
        <NavLink exact to="/u1/places">
          My Places
        </NavLink>
      </li>
      <li onClick={props.closeDrawer}>
        <NavLink exact to="/places/new">
          Add Place
        </NavLink>
      </li>
      <li onClick={props.closeDrawer}>
        <NavLink exact to="/auth">
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
