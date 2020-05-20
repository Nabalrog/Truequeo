import React from 'react'
import './Curso.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import fotoperfil from '../../assets/FOTOPERFIL.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



const Curso = () => {
    return (
        <div>

            <div className="titulocurso">
                <p>CURSO DE DESARROLLO WEB</p>
            </div>
            {/* 
<!-- FIN TITULO DE CURSO -->
<!-- 16:9 aspect ratio VIDEO --> */}
            <div className="videos">

                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/137857207" allowfullscreen></iframe>
                </div>

            </div>

            <div className="textos1">
                <p className="creadortxt">CREADOR: TOMAS JIMENEZ</p>




                <p className="textoestrellas">VALORACION:</p>

                <div className="imagenstar">

                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />

                </div>




            </div>

            <div className="textos2">


                <p className="comentariostxt">COMENTARIOS:</p>

            </div>

            <div className="comentarios1">

                <img src={fotoperfil} alt="" />


                <p className="comentariostxt">

                    <ul className="imagenstar">

                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </ul>



                    <span>"MUY BUEN CURSO"
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, voluptate corporis. Nulla vitae tempore ducimus non velit sed nostrum modi, autem optio quae illum, a officiis repudiandae excepturi unde atque.</span>


                </p>


            </div>
        </div>
    )
}

export default Curso
