import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserPlus } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <div className="container">
      <a routerLink="/" className="navbar-brand">
          Libreta de Contactos
        </a>
        <button
          className="navbar-toggler"
          data-togler="collapse"
          data-target="#navbarcollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse" id="navbarCollap">
        <ul className="navbar-nav">
          <li className="nav-item px-2">
            <a routerLink="/" className="nav-link">
              <FontAwesomeIcon icon={faUserPlus} color= "white" />
            </a>
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item px-2">
            <a href="#" className="nav-link dropdown-toggle">
              <i className="fas fa-user"> Bienvenido</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
