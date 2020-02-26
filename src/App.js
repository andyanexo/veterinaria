import React, { Component } from "react";
import Header from "./components/Header/Header";
import NuevaCita from "./components/NuevaCita/NuevaCita";
import ListaCitas from "./components/ListaCitas/ListaCitas";
import "./bootstrap.min.css";

class App extends Component {
  state = { citas: [] };

  //cuando la aplicacion carga
  componentDidMount() {
    const citasLS = localStorage.getItem("citas");
    //en caso de que existan citas en local Storage, lo pasamos al estado
    if (citasLS) {
      this.setState({ citas: JSON.parse(citasLS) });
    }
  }

  //Al editar algo en la aplicacion
  componentDidUpdate() {
    localStorage.setItem("citas", JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    const citas = [...this.state.citas, datos];
    this.setState({ citas });
  };

  eliminarCita = id => {
    //tomar copia de state
    const citasActuales = [...this.state.citas];
    //utiliza filter
    const citasFiltradas = citasActuales.filter(cita => cita.id !== id);
    //actulizar state
    this.setState({ ...this.state, citas: citasFiltradas });
  };

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador de Clientes de Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
