import React from "react";

const cita = props => {
  return (
    <div className="media mt-3">
      <div className="media-body">
        <h3 className="mt-0">{props.cita.paciente}</h3>
        <p>
          <span>Nombre Dueño:</span> {props.cita.propietario}
        </p>
        <p>
          <span>Fecha Cita:</span> {props.cita.fecha}
        </p>
        <p>
          <span>Hora:</span> {props.cita.hora}
        </p>
        <p>
          <span>Sintomas:</span>
        </p>
        <p>{props.cita.sintomas} </p>
      </div>
    </div>
  );
};

export default cita;
