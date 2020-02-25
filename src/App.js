import React, { Component } from "react";
import Header from "./components/Header/Header";
import NuevaCita from "./components/NuevaCita/NuevaCita";
import "./bootstrap.min.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Header titulo="Administrador de Clientes de Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
