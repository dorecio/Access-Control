import React from 'react';

const EmpleadoList = ({ empleados, name}) => {
  if (!empleados.length) {
    return <h3>No existen empleados</h3>;
  }

  return (
    <div>
      <h3>{name}</h3>
      {empleados &&
        empleados.map((empleado) => (
          <div key={empleado._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {empleado.name} <br />
            </h4>
            <div className="card-body bg-light p-2">
              <p>{empleado.name}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EmpleadoList;
