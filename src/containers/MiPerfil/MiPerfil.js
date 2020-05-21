import React, { useState } from 'react'
import Tarjeta1 from "../../components/Tarjeta1/Tarjeta1"
import Tarjeta2 from "../../components/Tarjeta2/Tarjeta2"
import Tarjeta3 from "../../components/Tarjeta3/Tarjeta3"
import Tarjeta4 from "../../components/Tarjeta4/Tarjeta4"
import "./MiPerfil.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const MiPerfil = () => {

    const [card1, setcard1] = useState(false)
    const [card2, setcard2] = useState(false)
    const [card3, setcard3] = useState(false)
    const [card4, setcard4] = useState(false)

    const boton1 = () => {
        setcard1(true)
        setcard2(false)
        setcard3(false)
        setcard4(false)

    }
    const boton2 = () => {
        setcard1(false)
        setcard2(true)
        setcard3(false)
        setcard4(false)


    }
    const boton3 = () => {
        setcard1(false)
        setcard2(false)
        setcard3(true)
        setcard4(false)

    }
    const boton4 = () => {
        setcard1(false)
        setcard2(false)
        setcard3(false)
        setcard4(true)

    }

    


    return (
        <div>


            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="display-2 mb-3">Mi Perfil</h1>
                        <div className="row">
                            <div className="display-4 col d-flex flex-column align-items-start">

                                <button onClick={() => boton1()} className=" datos badge badge-light my-2">Mis datos</button>

                                <button onClick={() => boton2()} className="puntaje badge badge-light my-2">Mi puntaje</button>

                                <button onClick={() => boton3()} className="historial badge badge-light my-2">Mi Historial</button>

                                <button onClick={() => boton4()} className="colaboracion badge badge-light my-2" >Mi colaboracion</button>
                            </div>
                        </div>
                        <div className="row my-5 mx-5">
                            <div className="col">
                                <NavLink to="./Categorias" className="botonP">Explorar</NavLink>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div id="customCard" className="customCard card">
                            <h5 id="col2Titulo" className="card-header">Featured</h5>
                            <div className="card-body">
                                <h5 id="col2Sub1" className="card-title"></h5>
                                <p id="col2Text1" className="card-text"></p>
                                {card1 && <div><Tarjeta1 /></div>}

                                <h5 id="col2Sub2" className="card-title"></h5>
                                <p id="col2Text2" className="card-text"></p>
                                {card2 && <div><Tarjeta2 /></div>}
                                <h5 id="col2Sub3" className="card-title"></h5>
                                <p id="col2Text3" className="card-text"></p>
                                {card3 && <div><Tarjeta3 /></div>}
                                <h5 id="col2Sub3" className="card-title"></h5>
                                <p id="col2Text3" className="card-text"></p>
                                {card4 && <div><Tarjeta4 /></div>}

                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default MiPerfil
