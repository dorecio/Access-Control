import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { QUERY_VISITAS_GET } from "../../utils/queries";
import {
  Box,
  Button,
  ButtonGroup,
  CardContent,
  Card,
  Typography,
} from "@mui/material";

const Dashboard = () => {
  const { estatus } = useParams();
  const { loading, data } = useQuery(QUERY_VISITAS_GET);
  let visitas = data?.visitasGet || [];

  if (!loading) {
    if (Number(estatus) !== 0) {
      visitas = visitas.filter((item) => item.acceso === Number(estatus));
      console.log("nuevo arreglo :", visitas);
    }
  }

  return (
    <Box m="20px">
      <Box>
        {loading ? (
          <div>Cargando...</div>
        ) : (
          <h3>
            Lista de registro de visitas ({" "}
            {Number(estatus) === 0
              ? "Todos"
              : Number(estatus) === 1
              ? "Aceptados"
              : "Rechazados"}{" "}
            ){" "}
          </h3>
        )}
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button color="secondary">
            <Link style={{ textDecoration: "none" }} to={"/dashboard/0"}>
              Todos
            </Link>
          </Button>
          <Button color="secondary">
            <Link
              style={{ textDecoration: "none" }}
              color="inherit"
              to={"/dashboard/1"}
            >
              Aceptados
            </Link>
          </Button>
          <Button color="secondary">
            <Link style={{ textDecoration: "none" }} to={"/dashboard/2"}>
              Rechazados
            </Link>
          </Button>
        </ButtonGroup>
      </Box>

      <Box>
        {visitas &&
          visitas.map((visita) => (
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div" key={visita._key}>
                  Visitante: {visita.visitante}
                </Typography>
                <Typography>Motivo: {visita.motivo}</Typography>
                <Typography>
                  {visita.acceso === 1
                    ? "Aceptado"
                    : visita.acceso === 2
                    ? "Denegado"
                    : "Pendiente"}
                  - Estatus: {visita.acceso}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </Box>
    </Box>
  );
};
export default Dashboard;
