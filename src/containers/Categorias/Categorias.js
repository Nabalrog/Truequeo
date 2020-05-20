import React from 'react'
import CardCurso from "../../components/CardCurso/CardCurso";
import "./Categorias.css"

const Categorias = () => {
    return (
        <div>
            <div className="container seccioncursos2">
                <div className="row fila1">
                    <CardCurso />
                    <CardCurso />
                    <CardCurso />
                </div>
            </div>
            <div className="container seccioncursos2">
                <div className="row fila2">
                    <CardCurso />
                    <CardCurso />
                    <CardCurso />
                </div>
            </div>
            </div>
    )
}

export default Categorias
