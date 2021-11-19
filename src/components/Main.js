import React from "react";

export default class Main extends React.Component {
  render() {
    return (
      <main className="principal">
        <a href="/">
          <img className="logo" src="" />
        </a>
        <nav className="navegacao">
          <h2>Navegar por categoria</h2>
          <a>Github</a>
          <a>Video</a>
          <a>Portfólio</a>
          <a>Contato</a>
        </nav>
      </main>
    );
  }
}