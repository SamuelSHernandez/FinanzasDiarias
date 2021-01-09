import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import homeLogo from '../img/FD-fd-logo-yellow.png'

// eslint-disable-next-line react-hooks/rules-of-hooks


class Navigation extends Component {


    render() {

        return (
            <div className="navigation">
               
                    <nav className='navbar fixed-top navbar-expand-md bg-white'>
                        <div id="skip">
                            <a href="#root">Skip to Content</a>
                        </div>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                        </button>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <a className='navbar-brand no-wrap' href="/" >
                            <img className="homeIcon" alt="Home" src={homeLogo} />
                        </a>


                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav nav d-flex flex-nowrap">


                                <li className="nav-item"><Link className="nav-link" to="/Articulos">Articulos</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/Herramientas">Herramientas</Link></li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sobre Nosotros</a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li class="dropdown-item"><Link className="nav-link" to="/SobreNosotros">Sobre Nosotros</Link></li>
                                        <li class="dropdown-item"><Link className="nav-link" to="/Contactanos">Contáctanos</Link></li>
                                    </div>
                                </li>

                            </ul>
                        </div>

                        <div>
                
                        </div>
                    </nav>
               
            </div>
        )
    }
}

export default withRouter(Navigation);

