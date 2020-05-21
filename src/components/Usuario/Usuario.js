import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Tarjeta1 from '../Tarjeta1/Tarjeta1';


const Usuario = () => {

    const [user, setUser] = useState('')


    const id = '-M7oZWTQ4ZgT5D4v1hrA'
    

    const getUsuario = () => {
        
        axios.get(`https://truequeoweb.firebaseio.com/usuarios.json`)
            .then(( {data} ) => setUser(data[id]));


        
    }

    useEffect(() => {
        getUsuario();
    },[])




    return (
        <div className="card">
            <div className="Card-body">
                

                {Object.keys(user).map((id) =>
                    <Tarjeta1
                        key={id}
                        Nombre={user.nombre}
                        Telefono={user.telefono}
                        Password={user.password}
                        Correo={user.correo}
                        getUsuario={getUsuario}

                    />)}
            </div>
        </div>
    )
}

export default Usuario;
