import React from 'react';
import './Card.css';


/*
TA1
const Card = ({ titulo, descripcion, asignado, fechaInicio, fechaFin }) => {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <p><strong>Persona asignada:</strong> {asignado}</p>
      <p><strong>Fecha de inicio:</strong> {fechaInicio}</p>
      <p><strong>Fecha de fin: </strong> {fechaFin}</p>
    </div>
  );
};
*/

/*TA2*/
const Card =({children}) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default Card;