import React from "react";
import Cita from "../Cita/Cita";

const listaCitas = props => {
  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">Admnistrar citas</h2>

        <div className="lista-citas">
          {props.citas.map(cita => (
            <Cita key={cita.id} cita={cita}></Cita>
          ))}
        </div>
      </div>
    </div>
  );
};

export default listaCitas;
