import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { body_email } from "../utils/helpers";

import { ADD_VISITA } from "../utils/mutations";
import { Box, Button, TextField, Typography } from "@mui/material";

const VisitaForm = () => {
  const { empleadoEmail } = useParams();
  console.log("id Parametro:", empleadoEmail);
  const [formState, setFormState] = useState({
    emailText: empleadoEmail,
    motivoText: "",
    visitanteText: "",
  });

  const [addVisita, { error }] = useMutation(ADD_VISITA);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addVisita({
        variables: { ...formState },
      });
      console.log("Id Nueva cita:", data.addVisita._id);
      const idCita = data.addVisita._id;
      //Enviar correo de aviso
      if (idCita) {
        const payload = body_email(
          formState.emailText,
          "Solicitud de acceso.",
          formState.visitanteText,
          formState.motivoText,
          idCita
        );
        const usrSendMail =
          process.env.URL_SENDMAIL || "http://localhost:3001/api/sendemail";

        var response = await fetch(`${usrSendMail}`, {
          //mode: "no-cors",
          method: "POST",
          body: payload,
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log("envio de correo :", result);
      }

      setFormState({
        emailText: "",
        motivoText: "",
        visitanteText: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <Box m="20px">
      <h3>Datos del visitante</h3>

      <p className={` ${error ? "text-danger" : ""}`}>
        {error && <span>Something went wrong...</span>}
      </p>
      <form onSubmit={handleFormSubmit}>
        <Box m="8px">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email del empleado"
            name="emailText"
            value={formState.emailText}
            onChange={handleChange}
          ></TextField>
        </Box>

        <Box m="8px">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Motivo de la visita"
            name="motivoText"
            value={formState.motivoText}
            onChange={handleChange}
          ></TextField>
        </Box>

        <Box m="8px">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nombre del visitante"
            name="visitanteText"
            value={formState.visitanteText}
            onChange={handleChange}
          ></TextField>
        </Box>

        <Box>
          <Button variant="contained" disableElevation type="submit">
            Enviar Aviso
          </Button>
        </Box>
        {error && <div>Something went wrong...</div>}
      </form>
    </Box>
  );
};

export default VisitaForm;