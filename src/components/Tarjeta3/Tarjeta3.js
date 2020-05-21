import React from 'react'
import './Tarjeta3.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import diseñoweb1 from '../../assets/diseñoweb1.png'

const Tarjeta3 = () => {
    return (
        <div>
            <div className="col-md" >
                <div className="card" >
                    
                    <div className="card-body">
                        <h5 className="card-title">TARJETA3</h5>
                        <p className="card-text">ESTE ES UN EJEMPLO DE LA TERCERA TARJETA</p>
                        <a href="./curso.html" className="btn btn-success botonesc">Ir al curso</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tarjeta3
