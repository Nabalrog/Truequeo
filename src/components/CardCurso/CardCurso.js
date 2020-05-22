import React from 'react'
import './CardCurso.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


import diseñoweb1 from '../../assets/diseñoweb1.png'

const CardCurso = ({imagen, texto}) => {
    return (


        <div className="col-md" >
            <div className="card" >
                <img className="card-img-top" src={imagen} alt="" />
                <div className="card-body">
                    <h5 className="card-title">CURSO DE FRONT-END</h5>
                    <p className="card-text">{texto}</p>
                    
                    <NavLink to="./curso" className="btn btn-success botonesc">Ir al curso</NavLink>
                </div>
            </div>
        </div>


    )
}

export default CardCurso
