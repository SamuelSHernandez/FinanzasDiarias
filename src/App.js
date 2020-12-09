import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Navigation, Home, Articulos, Herramientas, SobreNosotros, Contactanos, Footer} from './components';
import "./style.css";

const React = require('react');
//const ReactDOM = require('react-dom');

/*
if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}
*/
export class App extends Component{
  render(){
    return(

      <Router basename='finanzas-diarias'>
        <Navigation/>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Articulos' exact component={Articulos} />
        <Route path='/Herramientas' exact component={Herramientas}/>
        <Route path='/SobreNosotros' exact component={SobreNosotros}/>
        <Route path='/Contactanos' exact component={Contactanos}/>
        </Switch>
        <Footer/>
      </Router>

    )
  }
}

export default App;
