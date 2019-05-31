import React from 'react';

/* 
CONSTRUYE LOS CONTROLES PARA REALIZAR LA BUSQUEDA DE ARTICULOS
*/
class BuscarCmp extends React.Component {
  render() {
    return (
    	<div className="input-group mb-3 col-6">
        <div className="input-group-prepend">
        <label className="input-group-text"  htmlFor="busqueda">¿Qué estás buscando?</label>
        </div>
        <input className="form-control" type="text" onChange={this.props.onChange} name="busqueda" placeholder="Buscar producto" />
		</div>
    );
  }
}

export default BuscarCmp;