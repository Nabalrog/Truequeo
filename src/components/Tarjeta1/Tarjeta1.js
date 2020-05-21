import React from 'react'
import './Tarjeta1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import diseñoweb1 from '../../assets/diseñoweb1.png'

const Tarjeta1 = () => {
    return (
        <div>
            <div className="col-md" >
                <div className="card" >
                    <img className="card-img-top" src={diseñoweb1} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">TARJETA1</h5>
                        <p className="card-text">Curso completo de desarrollo web Front-end y...</p>
                        <a href="./curso.html" className="btn btn-success botonesc">Ir al curso</a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Tarjeta1
