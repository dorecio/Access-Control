import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import {body_email} from '../utils/helpers';

import { ADD_VISITA } from '../utils/mutations';

const VisitaForm = () => {
    const {empleadoEmail }  = useParams();
    console.log("id Parametro:", empleadoEmail);
    const [formState, setFormState] = useState({
        emailText:empleadoEmail,
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
            console.log('Id Nueva cita:', data.addVisita._id);
            const idCita = data.addVisita._id;
            //Enviar correo de aviso
            if (idCita){
                const payload = body_email(formState.emailText, 'Solicitud de acceso.',formState.visitanteText, formState.motivoText,idCita);
                const usrSendMail = process.env.URL_SENDMAIL || "http://localhost:3001/api/sendemail"

                var response = await fetch( `${usrSendMail}`,{
                    //mode: "no-cors",
                    method:"POST",
                    body:payload,
                    headers:{
                      "Content-Type":"application/json"
                    }
                  });
                  const result = await response.json();
                  console.log("envio de correo :", result);            
            }
              
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
          <h3>What's on your techy mind?</h3>
    
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
                placeholder="Capturar el correo..."
                value={formState.emailText}
                className="form-input w-100"
                onChange={handleChange}
              />
            </div>

            <div className="col-12 col-lg-9">
              <input
                name="motivoText"
                placeholder="Capturar el motivo..."
                value={formState.motivoText}
                className="form-input w-100"
                onChange={handleChange}
              />
            </div>
            
            <div className="col-12 col-lg-9">
              <input
                name="visitanteText"
                placeholder="Capturar el visitante..."
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