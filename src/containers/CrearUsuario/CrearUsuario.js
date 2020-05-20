import React, { useState } from 'react'
import "./CrearUsuario.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'



const CrearUsuario = () => {


    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [telefono, setTelefono] = useState('null');
    const [correo, setCorreo] = useState('');

    const handlenombre = (e) => {
        setNombre(e.target.value);
    }
    const handlepassword = (e) => {
        setPassword(e.target.value);
    }
    const handletelefono = (e) => {
        setTelefono(e.target.value);
    }
    const handlecorreo = (e) => {
        setCorreo(e.target.value);
    }




    const crearUsuarionuevo = () => {


        const body = {
            nombre: nombre,
            password: password,
            telefono: telefono,
            correo: correo,
        }

        axios.post('https://truequeoweb.firebaseio.com/usuarios.json', body);
    };




    return (

        <div className="container my-3 mx-auto">
            <div className="row mx-5">
                <div className="col mb-3 shadow-sm p-3 bg-white rounded">
                    <h2>Cuenta TruqueO</h2>
                    <p className="text-muted">Crea tu cuenta TruqueO para empezar a compartir conocimiento.</p>

                    <div className="form-group">
                        <label htmlfor="">Nombre:</label>
                        <input className="form-control" onChange={handlenombre} value={nombre} placeholder="Ingrese Nombre" id="nomb" type="text" />
                    </div>
                    <div className="form-group" htmlfor="">
                        <label>Password:</label>
                        <input className="form-control" onChange={handlepassword} value={password} placeholder="Ingrese Password" type="password" id="pwd" type="text" />
                    </div>
                    <div className="form-group" htmlfor="">
                        <label>Teléfono:</label>
                        <input className="form-control" onChange={handletelefono} value={telefono} placeholder="Ingrese Teléfono" id="telefono" type="number" />
                    </div>
                    <div className="form-group" htmlfor="">
                        <label>Correo:</label>
                        <input className="form-control" onChange={handlecorreo} value={correo} placeholder="Ingrese Correo" id="correo" type="text" />
                    </div>


                    <button onClick={() => crearUsuarionuevo()} type="submit" className="btn btn-primary">Crear Usuario</button>


                </div>
            </div>
        </div>



    )
}

export default CrearUsuario;
