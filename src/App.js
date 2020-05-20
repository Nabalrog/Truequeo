import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AppNav from './components/AppNav/AppNav';
import 'bootstrap/dist/css/bootstrap.css';
import MainContainer from "./containers/MainContainer/MainContainer";
import MiPerfil from "./containers/MiPerfil/MiPerfil";
import Categorias from "./containers/Categorias/Categorias";
import Login from "./containers/Login/Login";
import NotFound from "./containers/NotFound/NotFound"


function App() {
  return (
    <BrowserRouter>
      <AppNav />
      <Switch>
        <Route exact path="/MainContainer" component={MainContainer} />
        <Route exact path="/MiPerfil" component={MiPerfil} />
        <Route exact path="/Caregorias" component={Categorias}/>
        <Route exact path="/Login" component={Login}/>
        {/* Siempre es el último */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
