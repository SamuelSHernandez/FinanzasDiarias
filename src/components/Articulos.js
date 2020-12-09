import React, { Component } from 'react';
import Cripto from '../img/cripto-imagen.png';
import Ahorro from '../img/ahorro-imagen.png';
import Evasion from '../img/evasion-imagen.png'

export default class Articulos extends Component {
    render() {
        return (
            <div>
                <div>
                    <Featured />

                    <h1>Articulos</h1>


                    <h2>Favoritos del Editor</h2>
                    <Highlight />
                </div>

                <div className="card-deck mb-3 mx-auto" id="cardDeck">

                    <a href="/">
                        <div className="card-column card-shadow col-md-2">

                            <img src={Cripto} alt="Criptomoneda" className="card-img-top" />

                            <div className="card-body text-center">
                                <h4 className="card-title">¿Tu también has pensado en invertir en BITCOIN?</h4>
                                <p className="card-text"> Seguramente más de alguna vez has escuchado sobre el BITCOIN o ETHEREUM,
                    probablemente las criptomonedas más conocidas, aunque existen muchísimas más...</p>
                            </div>
                            <small className="text-muted">Acutalizado hace 1 dia</small>
                        </div>
                    </a>

                    <a href="/">
                        <div className="card-column card-shadow col-md-2">

                            <img src={Cripto} alt="Criptomoneda" className="card-img-top" />

                            <div className="card-body text-center">
                                <h4 className="card-title">¿Tu también has pensado en invertir en BITCOIN?</h4>
                                <p className="card-text"> Seguramente más de alguna vez has escuchado sobre el BITCOIN o ETHEREUM,
                    probablemente las criptomonedas más conocidas, aunque existen muchísimas más...</p>
                            </div>
                            <small className="text-muted">Acutalizado hace 1 dia</small>
                        </div>
                    </a>

                    <a href="/">
                        <div className="card-column card-shadow col-md-2">

                            <img src={Cripto} alt="Criptomoneda" className="card-img-top" />

                            <div className="card-body text-center">
                                <h4 className="card-title">¿Tu también has pensado en invertir en BITCOIN?</h4>
                                <p className="card-text"> Seguramente más de alguna vez has escuchado sobre el BITCOIN o ETHEREUM,
                    probablemente las criptomonedas más conocidas, aunque existen muchísimas más...</p>
                            </div>
                            <small className="text-muted">Acutalizado hace 1 dia</small>
                        </div>
                    </a>

                    <a href="/">
                        <div className="card-column card-shadow col-md-2">

                            <img src={Cripto} alt="Criptomoneda" className="card-img-top" />

                            <div className="card-body text-center">
                                <h4 className="card-title">¿Tu también has pensado en invertir en BITCOIN?</h4>
                                <p className="card-text"> Seguramente más de alguna vez has escuchado sobre el BITCOIN o ETHEREUM,
                    probablemente las criptomonedas más conocidas, aunque existen muchísimas más...</p>
                            </div>
                            <small className="text-muted">Acutalizado hace 1 dia</small>
                        </div>
                    </a>

                    <a href="/">
                        <div className="card-column card-shadow col-md-2">

                            <img src={Cripto} alt="Criptomoneda" className="card-img-top" />

                            <div className="card-body text-center">
                                <h4 className="card-title">¿Tu también has pensado en invertir en BITCOIN?</h4>
                                <p className="card-text"> Seguramente más de alguna vez has escuchado sobre el BITCOIN o ETHEREUM,
                    probablemente las criptomonedas más conocidas, aunque existen muchísimas más...</p>
                            </div>
                            <small className="text-muted">Acutalizado hace 1 dia</small>
                        </div>
                    </a>

                    <a href="/">
                        <div className="card-column card-shadow col-md-2">

                            <img src={Cripto} alt="Criptomoneda" className="card-img-top" />

                            <div className="card-body text-center">
                                <h4 className="card-title">¿Tu también has pensado en invertir en BITCOIN?</h4>
                                <p className="card-text"> Seguramente más de alguna vez has escuchado sobre el BITCOIN o ETHEREUM,
                    probablemente las criptomonedas más conocidas, aunque existen muchísimas más...</p>
                            </div>
                            <small className="text-muted">Acutalizado hace 1 dia</small>
                        </div>
                    </a>
                    <a href="/">
                        <div className="card-column card-shadow col-md-2">

                            <img src={Cripto} alt="Criptomoneda" className="card-img-top" />

                            <div className="card-body text-center">
                                <h4 className="card-title">¿Tu también has pensado en invertir en BITCOIN?</h4>
                                <p className="card-text"> Seguramente más de alguna vez has escuchado sobre el BITCOIN o ETHEREUM,
                    probablemente las criptomonedas más conocidas, aunque existen muchísimas más...</p>
                            </div>
                            <small className="text-muted">Acutalizado hace 1 dia</small>
                        </div>
                    </a>

                    <a href="/">
                        <div className="card-column card-shadow col-md-2">
                            <img src={Ahorro} alt="Ahorro" className="card-img-top" />
                            <div className="card-body text-center">
                                <h4 className="card-title">¿Cada año haces el mismo propósito de ahorrar y nunca lo cumples? </h4>
                                <p className="card-text">Cuando hablamos de crear un plan de ahorro, siempre comenzamos con las mejores intenciones. Queremos ahorrar y
                    tener dinero listo para asumir cualquier compromiso con facilidad, pero la falta de...</p>
                            </div>
                            <small className="text-muted">Acutalizado hace 2 horas</small>

                        </div>
                    </a>
                    <a href="/">
                        <div className="card-column card-shadow col-md-2">
                            <img src={Evasion} alt="Evasion" className="card-img-top" />
                            <div className="card-body text-center">
                                <h4 className="card-title">El Outsourcing (Sub-contratación laboral)</h4>
                                <p className="card-text">A lo largo de este sexenio se ha comentado el tema del Outsourcing
                                y se ha hecho incapié en lo agresiva que puede ser esta figura para los trabajadores mexicanos,
                    para el fisco federal y para el IMSS...</p>
                            </div>
                            <small className="text-muted">Acutalizado hace 2 horas</small>
                        </div>
                    </a>
                </div>
                <Pagination/>
            </div>

        )
    }
}

export function Featured() {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Evasion} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Cripto} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Ahorro} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export function Highlight() {
    return (
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                </div>
                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small>Donec id elit non mi porta.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                </div>
                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small class="text-muted">Donec id elit non mi porta.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                </div>
                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small class="text-muted">Donec id elit non mi porta.</small>
            </a>
        </div>
    )
}

export function Pagination() {
    return (<nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item">
                <a class="page-link" href="/" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
            </li>
            <li class="page-item"><a class="page-link" href="/">1</a></li>
            <li class="page-item"><a class="page-link" href="/">2</a></li>
            <li class="page-item"><a class="page-link" href="/">3</a></li>
            <li class="page-item">
                <a class="page-link" href="/" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </nav>)
}