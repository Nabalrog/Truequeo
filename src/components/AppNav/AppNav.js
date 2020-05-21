import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppNav.css'

import { NavLink } from 'react-router-dom';


const AppNav = () => {
    return (


        <nav class="navegacion">

            <div class="logo">
                <img src="./assets/logo-truequeo.png" alt="" />
            </div>


            <div id="navegacion" className="secciones">
                <NavLink to="/MainContainer">HOME</NavLink>
                <NavLink to="/MiPerfil">MI PERFIL</NavLink>
                <NavLink to="/Categorias">CATEGORIAS</NavLink>
            </div>

            <div id="navegacion" className="lupa">
            
            </div>


            <div id="navegacion" className="buscador">
                <input type="text" placeholder="¿Que quieres truequear hoy?" />
            </div>

            <div id="navegacion" className="iniciosesion">
            <NavLink to="/login">Iniciar sesion</NavLink>
            </div>
            <div id="navegacion" className="iniciosesion">
            <NavLink to="/CrearUsuario">Crear Usuario</NavLink>
            </div>



        </nav>
    )
}

export default AppNav
