import React from 'react';
import Card from './Card';

/*
TA1
const App = () => {
  return (
    <div>
      <Card 
        titulo="Diseño" 
        descripcion="Diseñar la interfaz de la aplicación" 
        asignado="Clara" 
        fechaInicio="2023-10-01" 
        fechaFin="2023-10-15" 
      />
      <Card 
        titulo="Metodo buscar" 
        descripcion="Elaborar el método de búsqueda de la aplicación" 
        asignado="Federico" 
        fechaInicio="2023-10-05" 
        fechaFin="2023-10-20" 
      />
      <Card 
        titulo="Metodo agregar" 
        descripcion="Elaborar el metodo de agregar de la aplicación" 
        asignado="Gaspar" 
        fechaInicio="2023-10-10" 
        fechaFin="2023-10-25" 
      />
    </div>
  );
};
*/

/*TA2*/
const App = () => {
  return (
    <div>
      <Card>
        <h2>Diseño</h2>
        <p>Diseñar la interfaz de la aplicación</p>
        <p><strong>Persona asignada:</strong> Clara</p>
        <p><strong>Fecha de inicio:</strong> 2023-10-01</p>
        <p><strong>Fecha de fin:</strong> 2023-10-15</p>
      </Card>

      <Card>
        <h2>Metodo buscar</h2>
        <p>Elaborar el método de búsqueda de la aplicación</p>
        <p><strong>Persona asignada:</strong> Federico</p>
        <p><strong>Fecha de inicio:</strong> 2023-10-05</p>
        <p><strong>Fecha de fin:</strong> 2023-10-20</p>
      </Card>

      <Card>
        <h2>Metodo agregar</h2>
        <p>Elaborar el metodo de agregar de la aplicación</p>
        <p><strong>Persona asignada:</strong> Gaspar</p>
        <p><strong>Fecha de inicio:</strong> 2023-10-10</p>
        <p><strong>Fecha de fin:</strong> 2023-10-25</p>
      </Card>
    </div>

  );
}

export default App;


