import React from "react";
import "./Navbar.css"

function Navbar() {
  return (
    <ul className="ul">
      <li className="li">
        <a class="active" href="#home">
          Home
        </a>
      </li>
      <li className="li">
        <a  className="a" href="#news">News</a>
      </li>
      <li className="li">
        <a className="a" href="#contact">Contact</a>
      </li>
      <li className="li" >
        <a className="a" href="#about">About</a>
      </li>
    </ul>
  );
}

export default Navbar;
