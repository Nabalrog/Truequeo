import React from 'react'
import './Tarjeta4.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import diseñoweb1 from '../../assets/diseñoweb1.png'

const Tarjeta4 = () => {
    return (
        <div>
            <div className="col-md" >
                <div className="card" >
                    <img className="card-img-top" src={diseñoweb1} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">TARJETA4</h5>
                        <p className="card-text">ESTE ES UN EJEMPLO DE LA CUARTA TARJETA</p>
                        <a href="./curso.html" className="btn btn-success botonesc">Ir al curso</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tarjeta4
