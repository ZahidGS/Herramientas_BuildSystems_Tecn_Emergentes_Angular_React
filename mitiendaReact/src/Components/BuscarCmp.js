import React from 'react';

class BuscarCmp extends React.Component {
/* 	constructor(props){
		super(props);
	} */
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