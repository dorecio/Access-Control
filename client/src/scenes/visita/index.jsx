import React, { useState } from "react";
import { Box, Button, useTheme, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import VisitaForm from "../../components/VisitaForm";

function Visita() {
  return (
    <div>
      <Box>
        <Header title="Visita" subtitle="Solicitud de Visita" />
      </Box>
      <Box>
        <VisitaForm></VisitaForm>
      </Box>
    </div>
  );
}
export default Visita;
