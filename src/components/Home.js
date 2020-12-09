import React, { Component } from 'react';
import { TradingViewEmbed, widgetType } from "react-tradingview-embed"; /* source: https://www.npmjs.com/package/react-tradingview-embed */
import Cripto from '../img/cripto-imagen.png';
import Ahorro from '../img/ahorro-imagen.png';
import Evasion from '../img/evasion-imagen.png'
import Promocion from "../img/FD-curso-promo.jpg"

export default class Home extends Component {

    render() {
        return (
            <>
                <Header />
                <main>
                    <Widget />
                    <Promo />
                    <Featured />
                </main>
            </>
        );
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
                        <p>
                            Una criptomoneda, o criptoactivo, es un tipo de moneda digital.
                            Es un medio digital de cambio, similar a una tarjeta de débito.
                            Sin embargo la diferencia radica en que las transacciones se realizan anónimamente.
                </p>

                        <button type="button" class="btn">Leer articulo</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export function Featured() {
    return (
        <div className="card-deck mb-3 mx-auto" id="cardDeck">

            <a href="/">
                <div className="card-column card-shadow col-md-3">

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
                <div className="card-column card-shadow col-md-3">
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
                <div className="card-column card-shadow col-md-3">
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
    )

}

export function Widget() {

    return (

        <div>
            <TradingViewEmbed
                widgetType={widgetType.TICKER_TAPE}
                widgetConfig={{
                    colorTheme: "light",
                    autosize: true
                }}
            />
        </div>
    )
}


export function Promo() {

    return (
        <div className='container mx-auto'>




            <div class="card col-md-6">


                <div class="card-header">
                    <img className="promoImg mx-auto img-fluid rounded" alt="promoción" src={Promocion} />

                </div>
                <div class="card-body">
                    <h5 class="card-title">Curso Virtual</h5>
                    <p class="card-text"> Estamos preparando un espacio de aprendizaje, el cual te dejará armas sólidas para poder emprender Si ya emprendiste algún negocio, te ayudaremos a que tengas claros cuales son tus retos financieros para que tomes mejores decisiones.

En Finanzas Diarias queremos que emprender bien esté de moda, es por eso que en unos días más, estaremos dando más información sobre nuestro 1er curso de armas financieras, el cual, además de ser accesible, te dejará un aprendizaje sólido.</p>
                    <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>


        </div>)

}




/*<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com" rel="noopener" target="_blank"><span class="blue-text">Ticker Tape</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
  {
  "symbols": [
    {
      "proName": "FOREXCOM:SPXUSD",
      "title": "S&P 500"
    },
    {
      "proName": "FOREXCOM:NSXUSD",
      "title": "Nasdaq 100"
    },
    {
      "proName": "FX_IDC:EURUSD",
      "title": "EUR/USD"
    },
    {
      "proName": "BITSTAMP:BTCUSD",
      "title": "BTC/USD"
    },
    {
      "proName": "BITSTAMP:ETHUSD",
      "title": "ETH/USD"
    }
  ],
  "showSymbolLogo": true,
  "colorTheme": "light",
  "isTransparent": false,
  "displayMode": "adaptive",
  "locale": "en"
}
  </script>
</div>
<!-- TradingView Widget END --> */