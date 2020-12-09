import { Component } from 'react';




export default class Contactanos extends Component {
    render() {
        return (
            <div className="container">
                <div className="contact">
                    <h1>Escríbenos</h1>
                    <h2>Si tienes alguna duda, por favor visíta nuestras redes sociales o escribe directamente aquí abajo.</h2>


                </div>

                <div className="contactForm">
                    <form >
                        <label for="nombre">Nombre </label>
                        <input type="text" id="nombre" name="nombre" placeholder="tu nombre..." />

                        <label for="email"> Correo </label>
                        <input type="text" id="email" name="email" placeholder=" tu correo..." />

                        <label for="subject"> Mensaje </label>
                        <textarea id="subject" name="subject" placeholder="tu mensaje..."></textarea>

                        <input type="submit" value="Submit"/>
                    </form>
                </div>




            </div>
        )

    }
}
