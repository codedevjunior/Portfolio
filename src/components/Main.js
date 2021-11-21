import React from "react";
import apresentacao from "./icons/apresentacao.svg";
import falecomigo from "./icons/btn-falecomigo.svg";

export default class Main extends React.Component {
  render() {
    return (
      <div className="apresentacao">
        <img src={apresentacao} />
        <a href="https://api.whatsapp.com/send?phone=5542991349149&text=Entre%20em%20contato%20comigo!" target="_blank"><br />
          <img src={falecomigo} />
        </a>
      </div>
    );
  }
}