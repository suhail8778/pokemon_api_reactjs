import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar bg-body-tertiary bg-danger">
      <div className="container-fluid">
        <div className="navbar-brand logo-conn" href="#">
          <NavLink to={"/"} className="image-container">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg"
              alt="Circular Image"
            />
          </NavLink>
          <NavLink to={"/"} className="text-primary">
            <b>Pokemen</b>
          </NavLink>
          <button>
            <NavLink to="/catch">
              <b>Catch</b>
            </NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
}
