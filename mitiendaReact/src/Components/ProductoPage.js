import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

function ProductoPage (props) {

    const {
        currentItem,
    } = props;

    let img = '/assets/' + currentItem.img;

    console.log('desde ProductPage: ', currentItem);
    console.log('de la variable img: ', img);
    return (
        <Fragment>
            <div className="card mt-3 col-8 text-dark">
            <img src={`/assets/${currentItem.img}`} alt={currentItem.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h1>{currentItem.nombre}</h1>
                <p className="card-text text-dark">
                Las verduras son hortalizas cuyo color predominante es el verde.​ Sin embargo, el uso popular suele extender su significado a otras partes comestibles de las plantas, como hojas, inflorescencias y tallos.​ El vocablo verdura no es de carácter científico ni botánico, tratándose de una denominación popular con un significado que varía de una cultura a otra, pudiendo en ocasiones ser sinónimo de hortalizas o equivalente a vegetales que no lleven el sabor dulce o ácido de las frutas</p>

                <p className="card-text">
                    Precio: 
                    <span className="badge badge-info">
                    $ {currentItem.precio}
                    </span>
                  </p>
                  <p className="card-text">
                    Stock: 
                    <span className="badge badge-warning">
                    {currentItem.stock}
                    </span>                    
                  </p>

                <Link 
                    to="/catalogo" 
                    className="btn btn-success input-group-text col-2"
                    >Cerrar
                </Link>
            </div>
            </div>
        </Fragment>
    )
}


export default ProductoPage;