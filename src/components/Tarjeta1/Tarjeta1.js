import React, { useState } from 'react'
import './Tarjeta1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Usuario from '../Usuario/Usuario';



const Tarjeta1 = ({ Nombre, Password, Correo, Telefono} ) => {


   

    return (
        <div>

            <div className="col-md" >
                <div className="card" >


                    <div className="card-body">
                        <h5 className="card-title">Mi usuario</h5>


                        <p>Nombre: {Nombre}</p>
                        <p>Password: {Password}</p>
                        <p>Telefono: {Telefono}</p>
                        <p>Correo: {Correo}</p>






                    </div>
                </div>
            </div>


        </div>
    )
}

export default Tarjeta1
