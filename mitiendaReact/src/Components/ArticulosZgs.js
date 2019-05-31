import React, { Fragment } from 'react';

/* 
CARGA LOS ARTICULOS EN EL CATALOGO
INCLUYE EL BOTON PARA VER EL DETALLE DE UN PRODUCTO
INCLUYE EL BOTON PARA AGREGAR EL PRODUCTO AL CARRITO DE COMPRAS
 */

function ArticulosZgs(props) {

  const {
    articulos,
    goTo,
} = props;

return (
  <Fragment>
    <div className="row">
        { articulos.map( articulo => {

          let img = require('../assets/' + articulo.img);
            return (

              <div key={articulo.id} className="col-md-auto">
              <div className="card text-dark mt-3">
                <img src={img} className="card-img-top img-thumbnail ancho" alt="..."></img>
                <div className="card-body text-center">

                  <h3 className="card-title">{articulo.nombre}</h3>

                  <p className="card-text">
                    Precio: 
                    <span className="badge badge-info">
                    $ {articulo.precio}
                    </span>
                  </p>
                  <p className="card-text">
                    Stock: 
                    <span className="badge badge-warning">
                    {articulo.stock}
                    </span>                    
                  </p>
                </div>
              <div className="btn-toolbar btn-group-sm justify-content-between">

                <button onClick = {() => goTo(`/producto/${articulo.id}`)} className="btn btn-primary btn-sm" >Ver mas...</button>
                <div className="input-group input-group-sm">

                  <div className="input-group-prepend">
                    <button className="btn btn-success input-group-text" 
                    >Añadir</button>
                  </div>

                  <input 
                    className="form-control" 
                    type="number" 
                    name="cantidadAdd" 
                    value="1" 
                    min="1" 
                    max="25" 
                  />
          
                </div>

              </div>
             
              </div>
              </div>

            )
          })
    }
      </div>
    </Fragment>
  )
}

export default ArticulosZgs;
