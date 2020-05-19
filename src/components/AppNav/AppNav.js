import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppNav.css'


const AppNav = () => {
    return (


        <nav class="navegacion">

            <div class="logo">
                <img src="./assets/logo-truequeo.png" alt="" />
            </div>


            <div id="navegacion" className="secciones">
                <a href="index.html">HOME</a>
                <a href="./miperfil.html">MI PERFIL</a>
                <a href="./categorias.html">CATEGORIAS</a>
            </div>

            <div id="navegacion" className="lupa">
                <a href="./categorias.html"><img src="./assets/lupa.png" alt="" /></a>
            </div>


            <div id="navegacion" className="buscador">
                <input type="text" placeholder="¿Que quieres truequear hoy?" />
            </div>

            <div id="navegacion" className="iniciosesion">
                <a href="login.html">Iniciar sesion</a>
            </div>



        </nav>
    )
}

export default AppNav
