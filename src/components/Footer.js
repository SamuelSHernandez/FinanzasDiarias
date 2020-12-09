import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FDFooter from "../img/FD-titulo.png";
// Bootstrap styling inspired by https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/

export default class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <img className="footerImage" alt="Finanzas Diarias" src={FDFooter}></img>
                    <div className="row">

                        <div className="col-sm-12 col-md-6">

                            <h6>Sobre Nosotros</h6>
                            <p className="text-justify">
                            Finanzas Diarias se creó en medio de la pandemia de COVID-19, por un grupo de egresados de carreras financieras del Tecnológico de Monterrey, interesados en que la sociedad mexicana aumente sus conocimientos financieros y por lo tanto mejore cada vez más el manejo de sus finanzas.

Una de nuestras frases favoritas es: "El conocimiento es poder". Un mexicano o mexicana bien informados toman mejores decisiones, y queremos que tomes mejores decisiones en tus ahorros, inversiones, finanzas personales, e impuestos.
                                </p>
                        </div>




                        <div className="col-xs-6 col-md-3">
                            <h6>Navegación</h6>
                            <ul className="footer-links">
                                <li><Link to="/">Finanzas Diarias</Link></li>
                                <li><Link to="/Articulos">Articulos</Link></li>
                                <li><Link to="/Herramientas">Herramientas</Link></li>
                                <li><Link to="/SobreNosotros">Sobre Nosotros</Link></li>
                                <li><Link to="/Contactanos">Contáctanos</Link></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Newsletter</h6>

                            <p>Suscribete a nuestra newsletter y no te pierdas de nuestros articulos mas recientes</p>
                            <p><div className="input-group">
                                <input type="text" class="form-control" placeholder="Suscribete!" />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button"><span class="fas fa-envelope"></span></button>
                                </span>
                            </div></p>

                        </div>
                    </div>

                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p>
                                Hecho con <i className="fas fa-heart"></i> por el equipo de Finanzas Diarias. Copyright &copy; All rights reserved.
                        </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a className="facebook" href="https://www.facebook.com/finanzasdiariasmx/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                <li><a className="instagram" href="https://www.instagram.com/finanzasdiariasmx/"target="_blank" ><i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>


            </footer>
        );
    }
}