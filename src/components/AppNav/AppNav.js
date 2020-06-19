import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './AppNav.css'
import logo from "../../assets/TRUEQUEOIMG.png"


const Navigation = () => {
    const { isAuth, user } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const publicNavbar = () => {
        return (<Navbar
            className="navegacion"
            // style={{ backgroundColor: "black", color: "red" }}
            expand="md">
            <NavbarBrand tag={Link} to="/">TRUEQUEO
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />  <div className="logo">
                <img src={logo} alt="" />

            </div>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="" navbar>

                    <NavItem id="navegacion" className="secciones mr-5">
                        <NavLink tag={Link} to="/">HOME</NavLink>
                        <NavLink tag={Link} to="/MiPerfil">MI PERFIL</NavLink>
                        <NavLink tag={Link} to="/Categorias">CATEGORIAS</NavLink>
                    </NavItem>

                    <NavItem id="navegacion" className="iniciosesion mr-1">
                        <NavLink tag={Link} to="/login">Iniciar sesion</NavLink>
                    </NavItem>


                    <NavItem>
                        <NavLink tag={Link} to="/CrearUsuario">Crear Usuario</NavLink>
                    </NavItem>

                </Nav>
            </Collapse>
        </Navbar>)
    }

    const authNavbar = () => {
        return (<Navbar
            className="navbar navbar-dark bg-dark"
            // style={{ backgroundColor: "black", color: "red" }}
            expand="md">
            <NavbarBrand tag={Link} to="/">¡Hola {user.first_name}!</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/users">Usuarios</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/logout">Logout</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>)
    }

    return (
        <React.Fragment>
            {isAuth ? authNavbar() : publicNavbar()}
        </React.Fragment>
    );
}

export default Navigation;