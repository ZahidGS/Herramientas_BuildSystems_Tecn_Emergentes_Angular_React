import React, { Component } from 'react';

import fire from '../config/fire';

import { Link } from 'react-router-dom';

//GENERA LA BARRA DE NAVEGACION, LOS ACCESOS Y CERRAR SESION

class Navega extends Component {
    render () {
    return(

            <div className="navbar navbar-expand-lg navbar-light bg-light text-dark">
                <Link to ="/" className="navbar-brand" >Mi Tienda</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link to ="/catalogo" className="nav-item nav-link" >Catalogo</Link>
                    <Link to ="/carrito" className="nav-item nav-link" >Carrito                
                    <span className="badge badge-pill badge-danger ml-2"> 0 </span></Link>
                    <a href="/" onClick={this.logout.bind(this)} className="nav-item nav-link" >Cerrar Sesion</a>
                    </div>
                </div>
            </div>

        );
    }

    logout() {
        if (window.confirm('Desea cerrar sesion?')) {
            fire.auth().signOut();
            
        } else {
            return null;
        }


    }
}


export default Navega;


