import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './PerfilVisitado.css';
import testimonio2 from '../../assets/testimonio2.jpg'
import diseñoweb1 from '../../assets/diseñoweb1.png'
import diseñoweb2 from '../../assets/diseñoweb2.png'
import diseñoweb3 from '../../assets/diseñoweb3.png'


const PerfilVisitado = () => {
    return (
        <div>

<div className="container seccionperfil">

<div className="row">
    <div className="col-6">
    <div className="textoabout">About me
        Can I help you learn a new skill?
        
        Since 2012, I have been teaching people like you everything I know. Through my online learning business, Video School Online, I create courses that teach you how to creatively share your story through photography, video, design, and marketing.
        
        Don’t just take my word for it
        
        Over one million students have enrolled in and learned new skills with my courses. I pride myself on creating high quality courses from real world experience. 
        
        
    
        
     
        
        


    </div>
</div>




<div className="container-sm col-sm-4 ml-auto">


    <div className="card">
        <div className="card-body">
          <img src={testimonio2} className="card-img-top fotoperfil" alt="imagen7" />
          <h5 className="card-title nombreperfiltxt">ARGEMIRO PANDA</h5>
        
        </div>
     
    </div>
    
        <div className="card">
            <div className="card-body">
              <a href="https://www.facebook.com" className="card-title"><h5>FACEBOOK</h5></a>
            
            </div>
        
        </div>
    
        <div className="card">
            <div className="card-body">
              <a href="https://www.linkedin.com" className="card-title"><h5>LINKEDIN</h5></a>
             
            </div>
         
        </div>
  
        <div className="card">
            <div className="card-body">
              <a href="https://www.INSTAGRAM.com" className="card-title"><h5>INSTAGRAM</h5></a>
            
            </div>
        
        </div>
</div>
        

</div>
</div>



{/* 
<!-- INICIO PERFIL DE VIDEOS --> */}

<p className="miscursos">MIS CURSOS</p>


<div className="container seccioncursos2">
<div className="row">
<div className="col-md" >
    <div className="card" >
        <img className="card-img-top" src={diseñoweb1} alt="img"/>
        <div className="card-body">
          <h5 className="card-title">CURSO DE FRONT-END</h5>
          <p className="card-text">Curso completo de desarrollo web Front-end y...</p>
          <a href="./curso.html" className="btn btn-success botonesc">Ir al curso</a>
        </div>
      </div>
    </div>

<div className="col-md" >
    <div className="card" >
        <img className="card-img-top" src={diseñoweb2} alt="img2"/>
        <div className="card-body">
          <h5 className="card-title">CURSO DE FRONT-END</h5>
          <p className="card-text">Curso completo de desarrollo web Front-end y...</p>
          <a href="./curso.html" className="btn btn-success botonesc">Ir al curso</a>
        </div>
      </div>
    </div>

    <div className="col-md" >
    <div className="card">
        <img className="card-img-top" src={diseñoweb3} alt="img3"/>
        <div className="card-body">
          <h5 className="card-title">CURSO DE FRONT-END</h5>
          <p className="card-text">Curso completo de desarrollo web Front-end y...</p>
          <a href="./curso.html" className="btn btn-success botonesc">Ir al curso</a>
        </div>
    </div>    
</div> 





</div>


</div>

<div className="container seccioncursos2">
<div className="row">
<div className="col-md" >
    <div className="card">
        <img className="card-img-top" src={diseñoweb1} alt="img4"/>
        <div className="card-body">
          <h5 className="card-title">CURSO DE FRONT-END</h5>
          <p className="card-text">Curso completo de desarrollo web Front-end y...</p>
          <a href="./curso.html" className="btn btn-success botonesc">Ir al curso</a>
        </div>
      </div>
    </div>

<div className="col-md" >
    <div className="card">
        <img className="card-img-top" src={diseñoweb2} alt="img5"/>
        <div className="card-body">
          <h5 className="card-title">CURSO DE FRONT-END</h5>
          <p className="card-text">Curso completo de desarrollo web Front-end y...</p>
          <a href="./curso.html" className="btn btn-success botonesc">Ir al curso</a>
        </div>
      </div>
    </div>

    <div className="col-md" >
    <div className="card" >
        <img className="card-img-top" src={diseñoweb3} alt="img6"/>
        <div className="card-body">
          <h5 className="card-title">CURSO DE FRONT-END</h5>
          <p className="card-text">Curso completo de desarrollo web Front-end y...</p>
          <a href="./curso.html" className="btn btn-success botonesc">Ir al curso</a>
        </div>
    </div>    
</div> 





</div>

</div>
            
        </div>
    )
}

export default PerfilVisitado
