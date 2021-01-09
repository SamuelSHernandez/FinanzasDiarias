import { Component } from 'react';
import MensualImg from '../img/FD-presMensual.png';
import Mensual from '../media/Presupuesto Mensual FinanzasDiariasMx.xlsx';
export default class Herramientas extends Component {

    render() {
        return (
            <div className="card-deck">


                <div class="card-column col-md-3">
                    <img className="card-img-top" src={MensualImg} alt="Presupuesto Mensual" />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">Presupuesto Mensual</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href={Mensual} download="Presupuesto Mensual FD"><button type="button" class="btn btn-warning">Descargar</button></a>
                    </div>
                </div>

                <div class="card-column col-md-3">
                    <img className="card-img-top" src={MensualImg} alt="Presupuesto Mensual" />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">Presupuesto Anual</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button type="button" class="btn btn-warning">Descargar</button>
                    </div>
                </div>

                <div class="card-column col-md-3">
                    <img className="card-img-top" src={MensualImg} alt="Presupuesto Mensual" />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">Ahorro y Metas</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button type="button" class="btn btn-warning">Descargar</button>
                    </div>
                </div>

                <div class="card-column col-md-3">
                    <img className="card-img-top" src={MensualImg} alt="Presupuesto Mensual" />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">Mis Deudas</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button type="button" class="btn btn-warning">Descargar</button>
                    </div>
                </div>

                <div class="card-column col-md-3">
                    <img className="card-img-top" src={MensualImg} alt="Presupuesto Mensual" />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">Opciones de Crédito</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button type="button" class="btn btn-warning">Descargar</button>
                    </div>
                </div>

                <div class="card-column col-md-3 ">
                    <img className="card-img-top" src={MensualImg} alt="Presupuesto Mensual" />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">Inversión</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button type="button" class="btn btn-warning ">Descargar</button>
                    </div>
                </div>

            </div>
        )
    }
}