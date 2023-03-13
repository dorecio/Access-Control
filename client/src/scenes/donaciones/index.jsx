import React, { useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useGetDonacionesQuery } from "../../state/api";
import Header from "../../components/Header";
import Donacion from "../../components/Donacion";

function Donaciones() {
  return (
    <Box>
      <Header title="DONACIONES" subtitle="Tus donaciones nos ayudan" />
      <Box m="15px">
        <Typography variant="h2" fontWeight="bold" sx={{ mb: "5px" }}>
          Ayudanos con un donativo
        </Typography>
      </Box>
      <Box m="15px">
        <Typography variant="h5" sx={{ mb: "5px" }}>
          Somos una empresa de desarrolladores independientes. Con tus
          donaciones nos ayudas a continuar<br></br> creando contenido y
          software libre. Utilicemos tecnología para hacer que el mundo sea un
          mejor lugar.
        </Typography>
      </Box>
      <Box sx={{ "& button": { m: 1 } }}>
        <div>
          <Donacion></Donacion>
        </div>
      </Box>
    </Box>
  );
}

export default Donaciones;
