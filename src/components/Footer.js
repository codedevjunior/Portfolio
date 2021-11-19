import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="rodape">
        <a href="mailton:code.devjunior@outlook.com.br">code.devjunior@outlook.com.br</a>
        <br />
        <nav className="redes-sociais">
          <a href="">YouTube</a>
          <a href="">Instagram</a>
          <a href="">Discord</a>
          <a href="">Github</a>
        </nav>
      </footer>
    );
  }
}