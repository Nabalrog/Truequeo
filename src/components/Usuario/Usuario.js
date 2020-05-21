import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Tarjeta1 from '../Tarjeta1/Tarjeta1';


const Usuario = () => {

    const [usuario, setUsuario] = useState({})


    const id = '-M7oZWTQ4ZgT5D4v1hrA'
    

    const getUsuario = () => {
        
        axios.get(`https://truequeoweb.firebaseio.com/usuarios.json`)
            .then(( {data} ) => setUsuario(data[id]));


        
    }

    useEffect(() => {
        getUsuario();
    },[])

console.log(usuario)


    return (
        <div className="card">
            <div className="Card-body">
                <h5 className="card-title">MI USUARIO</h5>

                {Object.keys(usuario).map((id) =>
                    <Tarjeta1
                        key={id}
                        Nombre={usuario.nombre}
                        Telefono={usuario.telefono}
                        Password={usuario.password}
                        Correo={usuario.correo}
                        getUsuario={getUsuario}

                    />)}
            </div>
        </div>
    )
}

export default Usuario;
