import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './Pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import VisitaForm  from './components/VisitaForm';
import AccesoForm from './components/AccesoForm';
import Dasboard from './components/Dashboard';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });


  function App() {
    return (
      <ApolloProvider client={client}>
        <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
          <Routes>
            <Route exact path="/" element={<Home/>}/> 
            <Route
                path='/visita/:empleadoEmail'
                element={<VisitaForm/>}
              />
              <Route
                path='/acceso/:id/:acceso'
                element={<AccesoForm/>}
              />            
            <Route exact path="/dashboard/" element={<Dasboard/>}/> 
          </Routes>
          </div>
          <Footer />
        </div>
        </Router>
      </ApolloProvider>
    );
  }
  
  export default App;  