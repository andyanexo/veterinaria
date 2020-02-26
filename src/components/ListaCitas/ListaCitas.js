import React from "react";
import Cita from "../Cita/Cita";
import PropTypes from "prop-types";

const listaCitas = props => {
  const mensaje =
    Object.keys(props.citas).length === 0
      ? "Sin citas Registradas"
      : "Administrar citas";

  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">{mensaje}</h2>

        <div className="lista-citas">
          {props.citas.map(cita => (
            <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={() => props.eliminarCita(cita.id)}
            ></Cita>
          ))}
        </div>
      </div>
    </div>
  );
};

listaCitas.propTypes = {
  citas: PropTypes.array.isRequired,
  eliminarCita: PropTypes.func.isRequired
};

export default listaCitas;
