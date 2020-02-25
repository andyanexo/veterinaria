import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  cita: { paciente: "", propietario: "", fecha: "", hora: "", sintomas: "" },
  error: false
};

class NuevaCita extends Component {
  state = { ...initialState };

  handleChange = event => {
    this.setState({
      cita: {
        ...this.state.cita,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    //traer valores del state
    const { paciente, propietario, fecha, hora, sintomas } = this.state.cita;
    //validar que campos esten llenos

    if (
      (paciente === "") |
      (propietario === "") |
      (fecha === "") |
      (hora === "") |
      (sintomas === "")
    ) {
      this.setState({ ...this.state, error: true });
      return;
    }

    //generar Objeto con la cita
    const nuevaCita = { ...this.state.cita };
    nuevaCita.id = uuidv4();

    //Agregar cita al App State

    this.props.crearNuevaCita(nuevaCita);
    this.setState({ ...initialState });
  };

  render() {
    let mensajeError = <div></div>;
    if (this.state.error) {
      mensajeError = (
        <div className="alert alert-danger mt-2 mb-5 text-center">
          Rellene todos los campos correctamente
        </div>
      );
    }

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Formulario para Nueva cita
          </h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Paciente
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="paciente"
                  onChange={this.handleChange}
                  value={this.state.cita.paciente}
                ></input>
              </div>
            </div>
            {/* form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Dueño"
                  name="propietario"
                  onChange={this.handleChange}
                  value={this.state.cita.propietario}
                ></input>
              </div>
            </div>
            {/* form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.cita.fecha}
                ></input>
              </div>
              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.cita.hora}
                ></input>
              </div>
            </div>

            {/* form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  placeholder="Describe los sintomas"
                  name="sintomas"
                  onChange={this.handleChange}
                  value={this.state.cita.sintomas}
                ></textarea>
              </div>
            </div>
            {mensajeError}
            {/* form-group */}
            <input
              type="submit"
              className="py-3 mt2 btn btn-success btn-block"
              value=" Agregar Nueva Cita"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NuevaCita;
