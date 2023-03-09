import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import {body_email} from '../utils/helpers';

import { ADD_VISITA } from '../utils/mutations';

const VisitaForm = () => {
    const {empleadoId }  = useParams();
    console.log("id Parametro:", empleadoId);
    const [formState, setFormState] = useState({
        emailText:'',
        motivoText: '',
        visitanteText:''
        });
    
    const [addVisita , { error } ] = useMutation ( ADD_VISITA );

    const handleFormSubmit = async ( event ) =>{
        event.preventDefault();
        try {
             const { data } = await addVisita ({
              variables: { ...formState },
            });
            console.log('Nueva cita:', data);

            //Enviar correo de aviso
            const payload = body_email(formState.emailText, 'Solicitud de acceso.',formState.visitanteText, formState.motivoText);

            var response = await fetch("http://localhost:3001/api/sendemail",{
                //mode: "no-cors",
                method:"POST",
                body:payload,
                headers:{
                  "Content-Type":"application/json"
                }
              });
              const result = await response.json();
              console.log("envio de correo :", result);        
              
            setFormState({
                emailText:'',
                motivoText: '',
                visitanteText:''
            });

          } 
          catch (err) {
            console.error(err);
          }        
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
          setFormState({ ...formState, [name]: value });
    };

    
    
    return (
        <div>
          <h3>Registro de Visitante</h3>
    
          <p
            className={`m-0 ${
              error ? 'text-danger' : ''
            }`}
          >
            {error && <span className="ml-2">Something went wrong...</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >

            <div className="col-12 col-lg-9">
              <input
                name="emailText"
                placeholder="Correo del empleado..."
                value={formState.emailText}
                className="form-input w-100"
                onChange={handleChange}
              />
            </div>

            <div className="col-12 col-lg-9">
              <input
                name="motivoText"
                placeholder="Capturar el motivode su visita..."
                value={formState.motivoText}
                className="form-input w-100"
                onChange={handleChange}
              />
            </div>
            
            <div className="col-12 col-lg-9">
              <input
                name="visitanteText"
                placeholder="Capturar el nombre del visitante..."
                value={formState.visitanteText}
                className="form-input w-100"
                onChange={handleChange}
              />
            </div>


            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Enviar Aviso
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

export default VisitaForm;