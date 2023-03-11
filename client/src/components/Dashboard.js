import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { QUERY_VISITAS_GET } from '../utils/queries';

const Dashboard = () => {
    const {estatus}  = useParams();
    const { loading, data } = useQuery(QUERY_VISITAS_GET);
    let visitas = data?.visitasGet || [];

    if (!loading)
    {
        if (Number(estatus)!==0) {
            visitas = visitas.filter(item => item.acceso=== Number(estatus) );
            console.log("nuevo arreglo :", visitas)
        }
    }

    return (

        <div>
            <div>
                {loading ? (<div>Cargando...</div>) : (<h3>Lista de registro de visitas ( {Number(estatus)===0? "Todos" : Number(estatus)===1? "Aceptados" : "Rechazados"}  ) </h3>)}
                <Link to={"/dashboard/0"}>Todos</Link>
                <Link to={"/dashboard/1"}>Aceptados</Link>
                <Link to={"/dashboard/2"}>Rechazados</Link>
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