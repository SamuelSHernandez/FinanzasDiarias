import { Component } from 'react';




export default class SobreNosotros extends Component {

    render() {
        return (

            <>
                <div className="sobreNosotros">


                    <h1>"El conocimiento es poder"</h1>
                    <p>En medio de la crisis sanitaria (y por supuesto económica y financiera) provocada por el Covid-19 durante este 2020, y el encierro domiciliario temporal que esto provocó, un grupo de colaboradores expertos en temas financieros, económicos, políticos y sociales, unimos fuerzas para generar no solo información concisa y de valor, sino análisis y opiniones sobre los principales temas que suceden día a día tanto en México como en el mundo y que nos afectan a todos.
                Esta página busca generar un despertar en el interés de los lectores, para que cada vez más y más personas puedan comprender e involucrarse activamente en los sucesos diarios, generar conciencia basada en conocimiento de valor, incentivar la educación financiera y así generar empoderamiento y toma de decisiones informadas.</p>


                    <p>Los análisis aquí generados representan las opiniones individuales de quienes publican y colaboran en la página. No está demás mencionar, que los colaboradores ya mencionados siempre serán profesionales y expertos en los temas que desarrollen, y de esta manera evitar que se caiga en la desinformación y la confusión.
                    La información aquí generada abordará predominantemente temas financieros y económicos, sin embargo, también se podrá encontrar información sobre temas de política, sociales, salud e incluso tecnología, etcétera. Así mismo, será una política primordial de esta página responder a las dudas y cuestionamientos que surgieran por parte los lectores. Se aceptarán cordialmente todas las críticas, sugerencias, ideas y opiniones constructivas que desees darnos. Todo ataque sin argumento ni sustento, será deliberadamente ignorado y descartado.
                Gracias por seguirnos y no dudes en preguntar si al leernos te surgen preguntas o dudas; porque como bien dice la frase inicial: “El conocimiento es poder”.</p>

                </div>

                <div className="Team">
                    <Team />
                </div>
            </>
        )
    }
}


export function Team() {
    return (
        <div className="d-flex justify-content-center">
            <div class="card-column text-center">
                <div class="card-body">
                    <h5 class="card-title">Edgar Flores</h5>
                    <p class="card-text text-center">Co-fundador</p>
                </div>
            </div>

            <div class="card-column text-center">
                <div class="card-body">
                    <h5 class="card-title">Ismael Rojas</h5>
                    <p class="card-text text-center">Co-fundador</p>
                </div>
            </div>

            <div class="card-column text-center">
                <div class="card-body">
                    <h5 class="card-title">Martin Acevedo</h5>
                    <p class="card-text text-center">Co-fundador</p>
                </div>
            </div>
            <div class="card-column text-center">
                <div class="card-body">
                    <h5 class="card-title">Samuel S. Hernandez</h5>
                    <p class="card-text text-center">Co-fundador</p>
                </div>
            </div>

        
        </div>
    )
}
/*
                    <ul>

                        <li className="member"> Ismael Rojas

                        <ul>
                            <li>Co-fundador</li>
                        </ul>

                        </li>

                        <li className="member"> Martín Acevedo</li>
                        <li className="member"> Edgar Flores</li>
                        <li className="member"> Samuel S. Hernandez</li>

                    </ul>
*/