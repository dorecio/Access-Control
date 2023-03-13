import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EMPLEADO } from "../utils/mutations";
import { Box, Button, TextField, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const EmpleadoForm = () => {
  const [formState, setFormState] = useState({
    nameText: "",
  });
  const [characterCount, setCharacterCount] = useState(0);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [addEmpleado, { error }] = useMutation(ADD_EMPLEADO);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addEmpleado({
        variables: { ...formState },
      });

      //ENVIAR EL CORREO DE PRUEBA

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "nameText" && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== "thoughtText") {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <Box m="20px">
      <h3>Qué empleado desea visitar?</h3>

      <form onSubmit={handleFormSubmit}>
        <Box>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nombre del empleado"
            variant="outlined"
            name="nameText"
            placeholder="Nombre del empleado"
            value={formState.nameText}
            onChange={handleChange}
          ></TextField>
        </Box>

        <Box m="10px">
          <Button variant="contained" disableElevation type="submit">
            Buscar Empleado
          </Button>
        </Box>
        {error && <Typography>Empleado no encontrado</Typography>}
      </form>
    </Box>
  );
};

export default EmpleadoForm;

