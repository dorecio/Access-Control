import React, { useState } from 'react';
//  TODO: Agregar código para importar el hook necesario desde Apollo Client
import { useMutation } from '@apollo/client';

import { ADD_EMPLEADO } from '../utils/mutations';

const EmpleadoForm = () => {
  const [formState, setFormState] = useState({
    nameText: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  //  TODO: Agregar código para configurar la mutación
const [addEmpleado, {error}] = useMutation(ADD_EMPLEADO);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      //  TODO: Agregar código para ejecutar la función de mutación asíncrona devuelta por el hook `useMutation()` y pasar el objeto `formState`
      const { data } = await addEmpleado({
        variables: { ...formState }
        
      })

      //ENVIAR EL CORREO DE PRUEBA
      

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'nameText' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'thoughtText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h3>Qué empleado desea visitar?</h3>

      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="nameText"
            placeholder="Here's a new thought..."
            value={formState.nameText}
            className="form-input w-100"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Empleado
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default EmpleadoForm;
