import React, { Component } from 'react';
import { TradingViewEmbed, widgetType } from "react-tradingview-embed"; /* source: https://www.npmjs.com/package/react-tradingview-embed */
import Cripto from '../img/cripto-imagen.png';
import Ahorro from '../img/ahorro-imagen.png';
import Evasion from '../img/evasion-imagen.png'
import Promocion from "../img/FD-curso-promo.png"

export default class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <main>
                    <Widget />
                    <Promo />
                    <ArticuloDeLaSemana />
                    <Featured />
                </main>
            </>
        )
    }
}

export function Header() {
    return (
        <header>
            <div className="headerContainer">
                <div className="parallax-section">
                    <div className="square">
                        <h1>Finanzas Diarias</h1>
                        <h2>Artículo de la semana</h2>
                        <h3>¿Tu también has pensado invertir en BITCOIN?</h3>
                        <p>Una criptomoneda, o criptoactivo, es un tipo de moneda digital.
                        Es un medio digital de cambio, similar a una tarjeta de débito.
                        Sin embargo la diferencia radica en que las transacciones se realizan anónimamente.</p>
                        <a href="#articulo-de-la-semana"><button type="button" class="btn" >Leer articulo</button></a>
                    </div> {/* square */}
                </div> {/* parallax-section */}
            </div> {/* headerContainer */}
        </header>
    )
}

export function Featured() {
    return (
        <div className="featured">
            <h1>Más Artículos...</h1>
            <div className="card-deck mb-3 mx-auto" id="cardDeck">
                <a href="/"><div className="card-column col-md-3">
                    <img src={Cripto} alt="Criptomoneda" className="card-img-top" />
                    <div className="card-body text-center">
                        <h4 className="card-title">¿Tu también has pensado en invertir en BITCOIN?</h4>
                        <p className="card-text"> Seguramente más de alguna vez has escuchado sobre el BITCOIN o ETHEREUM,
                            probablemente las criptomonedas más conocidas, aunque existen muchísimas más...</p>
                    </div> {/* card-body */}
                    {/* TODO: Make actualization real-time and automatic */}
                    <small className="text-muted">Acutalizado hace 1 dia</small>
                </div> {/* card-colun */}</a>

                <a href="/"><div className="card-column  col-md-3">
                    <img src={Ahorro} alt="Ahorro" className="card-img-top" />
                    <div className="card-body text-center">
                        <h4 className="card-title">¿Cada año haces el mismo propósito de ahorrar y nunca lo cumples? </h4>
                        <p className="card-text">Cuando hablamos de crear un plan de ahorro, siempre comenzamos con las mejores intenciones...</p>
                    </div>{/* card-body */}
                    {/* TODO: Make actualization real-time and automatic */}
                    <small className="text-muted">Acutalizado hace 2 horas</small>
                </div>{/* card-column */}</a>

                <a href="/"><div className="card-column col-md-3">
                    <img src={Evasion} alt="Evasion" className="card-img-top" />
                    <div className="card-body text-center">
                        <h4 className="card-title">El Outsourcing (Sub-contratación laboral)</h4>
                        <p className="card-text">A lo largo de este sexenio se ha comentado el tema del Outsourcing
                        y se ha hecho incapié en lo agresiva que puede ser esta figura para los trabajadores mexicanos...</p>
                    </div>{/* card-body */}
                    {/* TODO: Make actualization real-time and automatic */}
                    <small className="text-muted">Acutalizado hace 2 horas</small>
                </div> {/* card-colun */}</a>
            </div> {/* card-deck */}
        </div> /* featured */
    )
}

export function Widget() {
    return (
        <TradingViewEmbed
            widgetType={widgetType.TICKER_TAPE}
            widgetConfig={{
                colorTheme: "light",
                autosize: true
            }}
        />
    )
}


export function Promo() {
    return (
        <div className='container mx-auto'>
            <div className="promo"><img className="promoImg  float-start 
            img-fluid rounded m-3" alt="promoción" src={Promocion} />
                <div className="promo-text">
                    <p className="float-end text-justify promoText"> Estamos preparando un espacio de aprendizaje,
                    el cual te dejará armas sólidas para poder emprender Si ya emprendiste algún negocio, te ayudaremos
                    a que tengas claros cuales son tus retos financieros para que tomes mejores decisiones. En Finanzas Diarias
                    queremos que emprender bien esté de moda, es por eso que en unos días más, estaremos dando más información
                    sobre nuestro 1er curso de armas financieras, el cual, además de ser accesible, te dejará un aprendizaje sólido.</p>
                </div> {/* promo-text */}
            </div> {/* promo */}
        </div> /* container*/
    )

}

export function ArticuloDeLaSemana() {
    return (
        <div className="articulo-de-la-semana" id="articulo-de-la-semana">
            <h1>Articulo de la Semana</h1>
            <h2>Qué es una Criptomoneda?</h2>
            <h3 className="autor-de-articulo">Por: <a href="finanzas-diarias/SobreNosotros#samuel-s-hernandez">Samuel S. Hernandez</a></h3>
            <p>¿Tu también has pensado en invertir en BITCOIN?<br /><br />
            Seguramente más de alguna vez has escuchado sobre el BITCOIN o ETHEREUM, probablemente las criptomonedas más conocidas, aunque existen muchísimas más.
            Una criptomoneda, o criptoactivo, es un tipo de moneda digital. Es un medio digital de cambio, similar a una tarjeta de débito. Sin embargo la diferencia radica en que las transacciones se realizan anónimamente.
            No existe en el mundo real como un peso o un dólar.<br /><br />
            Las criptomonedas existen en el mundo de las computadoras exclusivamente. Al ser monedas digitales, están protegidas por criptográfica y tecnologías de blockchain, así que son imposibles falsificar o de gastar más de una vez.
            También, tienen como característica que son de control descentralizado, es decir, nadie controla el flujo de la moneda. Esto facilita a los usuarios a transferirse dinero directamente, sin necesidad de bancos o gobiernos que regulen las transacciones.
            Muchos expertos estiman que las criptomonedas tienen un potencial increíble para ser un disruptor de la industria financiera.
            Sin embargo, invertir en este tipo de monedas es extremadamente riesgoso.<br /><br />
            Debido a que no es una moneda regulada por nadie, y no hay nada que la respalde, su valor es muy volátil, y se prestan para estafas tipo "pump and dump" donde un grupo de personas inflan el valor de la moneda, después retiran su dinero, y mucha gente pierde muchísimo debido a esto.
            Te recomendamos ser muy cuidadoso y asesorarte bien, si es que inviertes en criptomonedas.<br /><br /></p>
        </div> /* articulo-de-la-semana */
    );
}