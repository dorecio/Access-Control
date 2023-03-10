import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {UPDATE_VISITA} from '../utils/mutations';

const AccesoForm = () => {
    const {id, acceso }  = useParams();

    const [updateVisita , { error } ] = useMutation ( UPDATE_VISITA );

    useEffect(function () {
        console.log('render!')
        handleFormSubmit();
      },[]);

    const handleFormSubmit = async (event) => {
        try {
            const { data } = await updateVisita ({variables: { id, acceso: Number(acceso)} });
            console.log('Update visita:', data);
        }
        catch (error)
        {
            console.log('Error : ', error);
        }
            
    }
    
    return (
        
        <div>
            <h3>Gracias por su confirmacion</h3>
{/*             <p> visita :{id}</p>
            <p> acceso :{acceso}</p>     */}
        </div>
      );

};
export default AccesoForm;