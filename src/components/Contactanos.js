import { Component } from 'react';
export default class Contactanos extends Component {
    render() {
        return (
            <div className="container">
                <infoPage/>
                <contactForm />
            </div>

        )
    }
}

export function infoPage() {
    return (
        /* TODO: Add social media buttons */
        <div className="contact">

            <h1>Escríbenos en <a href="https://www.facebook.com/finanzasdiariasmx/" target="_blank"
                rel="noreferrer">Facebook</a></h1>

            <h2>Si tienes alguna duda, por favor visíta nuestras redes sociales o escribe directamente aquí abajo.</h2>

            <ul class="social-icons">
                <li><a className="facebook" href="https://www.facebook.com/finanzasdiariasmx/" target="_blank"
                    rel="noreferrer"><i class="fa fa-facebook"></i></a></li>

                <li><a className="instagram" href="https://www.instagram.com/finanzasdiariasmx/" target="_blank"
                    rel="noreferrer" ><i class="fa fa-instagram"></i></a></li>
            </ul>
        </div> /* contact */
    )
}

export function contactForm() {
    return (
        <div className="contactForm">
            <form >
                {/* Name Query */}
                <label for="nombre">Nombre </label>
                <input type="text" id="nombre" name="nombre" placeholder="tu nombre..." />
                {/* E-mail Query */}
                <label for="email"> Correo </label>
                <input type="text" id="email" name="email" placeholder=" tu correo..." />
                {/* Message Query */}
                <label for="subject"> Mensaje </label>
                <textarea id="subject" name="subject" placeholder="tu mensaje..."></textarea>
                {/* Input button */}
                <input type="submit" value="Submit" />
            </form>
        </div> /* contactForm */
    )
}