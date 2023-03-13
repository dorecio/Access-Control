import React, { useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useGetAgregar } from "../../state/api";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { body_email } from "../../utils/helpers";
import { ADD_VISITA } from "../../utils/mutations";
import { ADD_EMPLEADO } from "../../utils/mutations";
import EmpleadoForm from "../../components/EmpleadoForm";
import EmpleadoList from "../../components/EmpleadoList";
import { QUERY_EMPLEADOS } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const Acceso = () => {
  const { loading, data } = useQuery(QUERY_EMPLEADOS);
  const empleados = data?.empleados || [];

  return (
    <div>
      <Box>
        <Header title="Acceso" subtitle="Solicitud de acceso" />
        <Box>
          <EmpleadoForm />
        </Box>
        <Box>
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
        </Box>
      </Box>
    </div>
  );
};

export default Acceso;
