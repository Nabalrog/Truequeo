import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MainContainer.css"
import CardCurso from '../../components/CardCurso/CardCurso'
import truequeoimg from '../../assets/TRUEQUEOIMG.png'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/testimonio3.jpg'
import img4 from '../../assets/testimonio1.jpg'
import img5 from '../../assets/testimonio2.jpg'
import img6 from '../../assets/diseñoweb1.png'

const MainContainer = () => {
    return (

        <div>
            <div>
                <header >

                    <div class="recuadroinformacion" styles={{ backgroundImage: (img2) }}>
                        <div class="recuadrogris">
                            <div >
                                <img src={truequeoimg} alt="" />
                                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam commodi tempore deserunt eum perferendis assumenda cupiditate. Cum consequatur distinctio rerum placeat! Earum ratione molestias quidem modi laboriosam? Obcaecati, possimus expedita! Lorem ipsum, dolor sit amet consectetur adipisicing elit. In tempore iure enim voluptas? Libero temporibus, provident, illo voluptate perspiciatis, est tempore quia nam esse porro ipsa tenetur omnis repudiandae labore.</p>
                            </div>
                        </div>
                    </div>



                    <div class="masinformacion" >
                        <a href="./assets/CATEGORIA-4.jpg">¿COMO FUNCIONA?</a>
                    </div>

                </header>



                <section class="categoriastitulos">
                    <p>DESARROLLO WEB</p>
                    <p>DISEÑO</p>
                    <p>FOTOGRAFIA</p>
                    <p>MARKETING</p>
                </section>



                <section>
                    <div class="cursoscategoriasimg">

                        <div class="diseñoweb1" >


                            <CardCurso
                                imagen={img6}
                                texto="Este es un curso de Javascript" />
                        </div>

                        <div class="diseñoweb2">

                            <CardCurso 
                            imagen={img6}
                            texto="Este es un curso de Javascript"/>
                        </div>

                        <div class="diseñoweb3">

                            <CardCurso
                            imagen={img6}
                            texto="Este es un curso de Javascript" />
                        </div>

                    </div>



                    <div class="cursoscategoriasbotones">

                        <div class="boton1">
                            <a href="./curso.html">Truequea</a>
                        </div>

                        <div class="boton2">
                            <a href="./curso.html">Truequea</a>
                        </div>

                        <div class="boton3">
                            <a href="./curso.html">Truequea</a>
                        </div>

                    </div>

                </section>

                <section>


                    <div class="testimoniostxt">
                        <p>TESTIMONIOS</p>
                    </div>

                    <div class="testimonios">
                        <div class="testimonio1">
                            <div class="testimonioimg1"><img src={img3} alt="" /></div>
                            <div class="testimonio1titulo"><p>Roberto Morales</p></div>
                            <div class="linea1"></div>
                            <div class="testimoniotxt1"><p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita blanditiis error voluptatum qui. Eum, rem rerum dolore odio, labore assumenda quam mollitia iste temporibus deleniti ullam ex dolor quia."</p></div>
                        </div>


                        <div class="testimonio2">
                            <div class="testimonioimg2"><img src={img4} alt="" /></div>
                            <div class="testimonio2titulo"><p>Luisa López</p></div>
                            <div class="linea2"></div>
                            <div class="testimoniotxt2"><p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita blanditiis error voluptatum qui. Eum, rem rerum dolore odio, labore assumenda quam mollitia iste temporibus deleniti ullam ex dolor quia."</p></div>
                        </div>

                        <div class="testimonio3">
                            <div class="testimonioimg2"><img src={img5} alt="" /></div>
                            <div class="testimonio3titulo"><p>Federico Garcia</p></div>
                            <div class="linea3"></div>
                            <div class="testimoniotxt3"><p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita blanditiis error voluptatum qui. Eum, rem rerum dolore odio, labore assumenda quam mollitia iste temporibus deleniti ullam ex dolor quia."</p></div>
                        </div>

                    </div>


                </section>


                <footer class="footer">
                    <p>DERECHOS RESERVADOS DE TRUEQUEO</p>
                </footer>

            </div>
        </div>
    )
}

export default MainContainer



