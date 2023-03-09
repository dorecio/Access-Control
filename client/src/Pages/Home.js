import React from 'react';
import { useQuery } from '@apollo/client';

import EmpleadoList from '../components/EmpleadoList';
import EmpleadoForm from '../components/EmpleadoForm';

import { QUERY_EMPLEADOS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_EMPLEADOS);
  const empleados = data?.empleados || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
        <EmpleadoForm /> 
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <EmpleadoList
              empleados={empleados}
              title="Lista de Empleados..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
