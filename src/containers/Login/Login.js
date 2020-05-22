import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './assets/logo-truequeo.png'
import lupa from './assets/lupa.png'



const Login = () => {
    return (

        <formularioLogin>
            <div className="formularioimg">
                <img src={logo} alt="" />
            </div>

            <div className="usuario">
                <p>Usuario / Correo Electronico</p>
            </div>

            <div className="usuarioinput">
                <input type="text" />
            </div>

            <div className="contraseña">
                <p>Contraseña:</p>
            </div>

            <div className="contraseñainput">
                <input type="text" />
            </div>

            <div className="olvidastecontraseña">
                <p>¿Olvidaste tu usuario o contraseña?</p>
            </div>

            <div className="botoniniciosesion">
                <NavLink to="/miperfil">INICIAR SESION</NavLink>
            </div>

            <br>
                <a href="./registrar.html">Crear tu cuenta</a>
            </br>

        </formularioLogin>

    );
}

export default Login
