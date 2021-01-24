import React, { Component } from 'react';
export default class Articulos extends Component {
    render() {
        return (
            <div className="Articulos">
                <h1>Articulos</h1>
                <Articulo />
                <Pagination />
            </div> /* Articulos */
        )
    }
}

export function Pagination() {
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination d-flex justify-content-center">
                <li className="page-item">
                    <a className="page-link" href="/" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li> {/* Previous  button */}

                {/* TODO: Make number of button proportional of number of articles and display only 3 at a time */}

                <li className="page-item"><a className="page-link" href="/">1</a></li> {/* Numbered buttons */}
                <li clasNames="page-item"><a className="page-link" href="/">2</a></li>
                <li className="page-item"><a className="page-link" href="/">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="/" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li> {/* Next button */}
            </ul> {/* pagination d-flex justify-content-center*/}
        </nav> /* Page navigation */
    )
}

export function Articulo() {
    return (

        /*  TODO: Make 'Articulo' diplay 'articulos.json'  
            TODO: Display Featured article on top of the page 
            TODO: Display suggested bar of articles (3) with links to said articles
        /*  TODO: Display a responsive grid (3 x 3) of articles in cards. When clicked, they open a pop-up with said article */

        <nav className="Articulo">
            <h2>¿Qué es una recesión económica y por qué todo mundo habla de que se acerca una?</h2>
            <p className="text-justify">
                Una recesión económica no es mas que una etapa del ciclo económico durante la cual la economía se contrae por diversos factores, es decir, la actividad económica (transacciones, pagos, importaciones, exportaciones) se reduce por algún motivo, tal como lo estamos viviendo en estos momentos.<br /> <br />
                Hoy, factores externos como el pánico generado por el Covid-19, la guerra de precios y producción de petróleo entre Arabia Saudita y Rusia, además de problemas anteriores que acarreamos hasta hoy como la guerra comercial entre el presidente de EUA, Donald Trump (sí, de Donald Trump) y China, las renegociaciones del tratado comercial entre México, EUA y Canadá, ahora renombrado como T-MEC, el sonadísimo Brexit (la salida del Reino Unido de la unión europea), entre otros factores, han propiciado que la actividad económica se venga contrayendo paulatinamente en todo el mundo.
                ¿Cómo afecta esto a México y por qué sería el inicio de una crisis económica si nada de esto pasa aquí? <br /><br />
                Las exportaciones de China se han visto considerablemente disminuidas desde enero de este año, cortesía del Covid-19. Esto provoca que muchas empresas en México y el mundo se queden sin abastecimiento de piezas o insumos fundamentales para la fabricación de sus productos. Un claro ejemplo es el de empresas como Audi, Honda, y Ford, que recientemente anunciaron la paralización temporal de sus plantas en Puebla, Querétaro y Guanajuato, por la escasez de insumos causado por el cierre de fronteras en varios países, y las dificultades logísticas que esto implica. Esto es alarmante ya que el sector automotriz en México es muy importante; actualmente representa el 3% del PIB nacional. Otro factor alarmante es la depreciación que el peso ha sufrido debido a la contingencia y el desplome de los mercados financieros que han provocado una mayor demanda de dólares, una percepción de mayor riesgo al invertir en el país, así como los recortes a las tasas de interés y los pronósticos de crecimiento negativos para nuestro país.
                Hoy EUA es el país con más casos positivos de Covid-19, lo que implicará que pronto se convierta en el epicentro de la enfermedad, provocando un posible paro total de su economía en el futuro, con las afectaciones que esto implicaría. México es el principal socio comercial de Estados Unidos, por lo que no hay que ser un experto para saber que si a EUA le va mal, a México le puede ir peor.
                Ejemplos como este se irán repitiendo conforme el virus continúe expandiéndose por el mundo y pronto la economía se vea muy deteriorada por la paralización de las actividades primarias, secundarias y terciarias, además del agravamiento de los demás factores ya mencionados.<br /><br /> JP Morgan, una de las instituciones financieras más antiguas e importantes del mundo, anunció que ajustó el pronóstico de la tasa de crecimiento de la economía en México, pasando de -1.8% a -7%, una cifra ALARMANTE. Estos recortes son una tendencia que ya nos tienen acostumbrados desde el inicio del mandato presidencial de Andrés Manuel López Obrador en 2018.
                Es inminente una crisis, el gobierno de nuestro país ha tomado ya medidas sanitarias y económicas para tratar de sobrellevar esta contingencia (dignas para analizar en otra publicación), sin embargo esto no garantiza una solución absoluta a largo plazo, la economía no podrá soportar por mucho tiempo esta situación, por lo que es cierto, una recesión se acerca.<br /><br /> Por: L.A.F. Ismael Rojas</p>
        </nav> /* Articulo */
    )
}