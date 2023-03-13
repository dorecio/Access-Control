import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import Donaciones from "./scenes/donaciones";
import Acceso from "./scenes/acceso";
import Visita from "./scenes/visita";
import AccesoForm from "./components/AccesoForm";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard/:estatus" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/visita/:empleadoEmail" element={<Visita />} />
                <Route path="/acceso/:id/:acceso" element={<AccesoForm />} />
                <Route path="/acceso" element={<Acceso />} />
                <Route path="/donaciones" element={<Donaciones />} />
                <Route path="/acceso" element={<Donaciones />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
