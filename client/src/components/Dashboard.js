import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_VISITAS_GET } from '../utils/queries';

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_VISITAS_GET);
    const visitas = data?.visitasGet || [];

    return (

        <div>
            <div>
                {loading ? (<div>Cargando...</div>) : (<h3>Lista de registro de visitas</h3>)}
            </div>
            
            {visitas &&
            visitas.map((visita) => (
                <div key={visita._id} className="card mb-3">
                <h4 className="card-header bg-primary text-light p-2 m-0">
                    Visitante: {visita.visitante} <br />
                </h4>
                <div className="card-body bg-light p-2">
                    Motivo: {visita.motivo}
                </div>
                <div className="card-footer bg-light p-2">
                    {visita.acceso === 1 ?  "Aceptado" : visita.acceso === 2 ? "Denegado" : "Pendiente"}
                     - Estatus: {visita.acceso}
                </div>
                </div>
            ))}
        </div>
    );


};
export default Dashboard;