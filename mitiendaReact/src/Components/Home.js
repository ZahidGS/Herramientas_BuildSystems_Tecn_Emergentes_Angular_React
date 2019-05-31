import React, { Component } from 'react';
//import fire from '../config/fire';
import './home.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Catalogo from './catalogo';
import Carrito from './Carrito';

import Producto from './Producto';

import Navega from './navbar';

import { Provider } from 'react-redux';
import store from '../redux/store';


//COORDINA LA NAVEGACION DE LA APLICACION

class Home extends Component {

    render() {
        return(

            <Provider store={store}>
                <div className="container mifondoHome">

                    <BrowserRouter>
                        <Navega />
                        <Route exact path="/" component={Catalogo}/>
                        <Route path="/catalogo" component={Catalogo}/>
                        <Route path="/carrito" component={Carrito}/>
                        <Route path="/producto/:itemId" component={Producto}/>
                        
                    </BrowserRouter>


                </div>
            </Provider>
        );
    }
}

export default Home;
