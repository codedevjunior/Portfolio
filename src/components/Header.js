import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header className="cabecalho">
        <div className="sobremim">
          <img src="" />
          <h1 className="apresentacao">Hello, Eu sou Vilson Jesuino, desenvolvedor front-end.</h1>
        </div>
        <br />
        <p className="consideracoes">Sou estudante autodidata, sou apaixonado pela programação, entusiasta na area de TI</p>
        <br />
        <p className="trabalho">Quer me contratar</p>
        "Me chame no whatsapp!"
        <br />
        <a href="https://api.whatsapp.com/send?phone=5542991664128&text=Entre%20em%20contato%20comigo!">Contato</a>
      </header>
    );
  }
}