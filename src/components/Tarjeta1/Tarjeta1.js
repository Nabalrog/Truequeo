import React, { useState } from 'react'
import './Tarjeta1.css';
import 'bootstrap/dist/css/bootstrap.min.css';




const Tarjeta1 = ({ Nombre, Password, Correo, Telefono }) => {



    return (
        <div>

            <div className="col-md" >
                <div className="card" >


                    <div className="card-body">
                        <h5 className="card-title">Mi usuario</h5>


                        <p>nombre={Nombre}</p>
                        <p>password={Password}</p>
                        <p>telefono={Telefono}</p>
                        <p>correo={Correo}</p>






                    </div>
                </div>
            </div>


        </div>
    )
}

export default Tarjeta1
