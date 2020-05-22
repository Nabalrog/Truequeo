import React from 'react'


const Login = () => {
    return (
        <navegacion> 

            <div class="navegacion">
                <div class="logo">
                    <div>
                    <img src="./assets/logo-truequeo.png" alt="">
                    </div>
                </div>

            </div>
            


            <div class="secciones">
            <a href="index.html">HOME</a>
                <a href="">MI PERFIL</a>
                <a href="">CATEGORIAS</a>

            </div>
                
            <div class="lupa">
              <img src="./assets/lupa.png" alt="">
            </div>


            <div class="buscador">
               <input type="text" placeholder= "¿Que quieres truequear hoy?" >
             </div>


          <div class="iniciosesion">
              <a href="./miperfil.html">MI PERFIL</a>
            </div>
  


          
                
        </navegacion>



        <formularioLogin>
            <div class="formularioimg">
                <img src="./assets/TRUEQUEOIMG.png" alt="">
            </div>

          <div class="usuario">
             <p>Usuario / Correo Electronico</p>
         </div>

            <div class="usuarioinput">
             <input type="text">
            </div>

            <div class="contraseña">
              <p>Contraseña:</p>
            </div>

            <div class="contraseñainput">
              <input type="text">
            </div>

            <div class="olvidastecontraseña">
             <p>¿Olvidaste tu usuario o contraseña?</p>
    
            </div>

            <div class="botoniniciosesion">
             <a href="./miperfil.html">INICIAR SESION</a>
            </div>  
            
            <br>  
             <a href="./registrar.html">Crear tu cuenta</a>
  
        </formularioLogin>

        <footer class="footer">
         <p>DERECHOS RESERVADOS DE TRUEQUEO</p>
        </footer>

    )
}

export default Login
