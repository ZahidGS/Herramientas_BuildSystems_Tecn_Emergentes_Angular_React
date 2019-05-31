import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* 
MUESTRA LOS PRODUCTOS AGREGADOS EN EL CARRITO
MUESTRA EL SUBTOTAL Y TOTAL A PAGAR
INCLUYE EL BOTON PARA COBRAR Y DESCONTAR ARTICULOS VENDIDOS

 */
class Carrito extends Component {

    render() {
        return(
            <div className=" text-center">
                
                <h1>CARRITO DE COMPRAS</h1>
                <h2>Otro texto acompañado</h2>
                <div className="card mb-3 col-6">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                        <Link 
                            to="/catalogo" 
                            className="btn btn-success input-group-text"
                            >Cerrar
                        </Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default Carrito;
