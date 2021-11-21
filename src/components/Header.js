import React from "react";
import logo from "./icons/logo.svg";
import instagram from "./icons/instagram.svg";
import linkdin from "./icons/linkedin.svg";
import github from "./icons/github.svg";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="logo">
            <a href="/">
              <img src={logo} />
            </a>
          </div>
          <nav className="menu">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Skills</a></li>
              <li><a href="">Portfólio</a></li>
              <li><a href="">Contact</a></li>
            </ul>
            <div className="redes-sociais">
              <a href="https://www.instagram.com/vilsonjesuino/" target="_blank">
                <img src={instagram} />
              </a>
              <a href="https://www.linkedin.com/in/vilson-jesuino-de-lima-junior-92773a1b8/" target="_blank">
                <img src={linkdin} />
              </a>
              <a href="https://github.com/codedevjunior" target="_blank">
                <img src={github} />
              </a>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}