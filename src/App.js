import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AppNav from './components/AppNav/AppNav';
import 'bootstrap/dist/css/bootstrap.css';
import MainContainer from "./containers/MainContainer/MainContainer";
import MiPerfil from "./containers/MiPerfil/MiPerfil";
import Categorias from "./containers/Categorias/Categorias";
// import Login from "./containers/Login/Login";
import NotFound from "./containers/NotFound/NotFound"
import PerfilVisitado from "./containers/PerfilVisitado/PerfilVisitado";
import Curso from "./containers/Curso/Curso";
import CrearUsuario from "./containers/CrearUsuario/CrearUsuario";

import Tarjeta1 from './components/Tarjeta1/Tarjeta1'

function App() {
  return (
    <BrowserRouter>
      <AppNav />
      <Switch>
        <Route exact path="/MainContainer" component={MainContainer} />
        <Route exact path="/MiPerfil" component={MiPerfil} />
        <Route exact path="/Categorias" component={Categorias}/>
        {/* <Route exact path="/Login" component={Login}/> */}
        <Route exact path="/PerfilVisitado" component={PerfilVisitado}/>
        <Route exact path="/Curso" component={Curso}/>
        <Route exact path="/CrearUsuario" component={CrearUsuario}/>
  
        <Route exact path="/Tarjeta1" component={Tarjeta1}/>

        {/* Siempre es el último */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
