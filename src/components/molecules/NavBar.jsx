import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#inicio" className="navbar-link">Inicio</a>
        </li>
        <li className="navbar-item">
          <a href="#explorar" className="navbar-link">Explorar</a>
        </li>
        <li className="navbar-item">
          <a href="#contacto" className="navbar-link">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
