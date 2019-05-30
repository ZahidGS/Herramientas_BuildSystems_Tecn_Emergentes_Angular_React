import React, { Component } from 'react';

import { articulos } from '../Components/catalogo.json';
import './catalogo.css';

import BuscarCmp from './BuscarCmp';

import ArticulosZgs from './ArticulosZgs'
// console.log('articulos', articulos);

class Catalogo extends Component {
    constructor(props) {
        super(props);
        
      	this.state = {
        	articulos: articulos,
        	filtrados:[],
        	filtro:false
      	};
      	this.onChange = this.onChange.bind(this);
    }

  	onChange(e){
  		this.setState({filtro: true});
  		let articulosfiltrados = this.state.articulos;
  		articulosfiltrados = articulosfiltrados.filter(function(item) {
  			return item.nombre.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
  		});
  		this.setState({filtrados: articulosfiltrados});
    }
    

    render() {
      
    let items;

    if(this.state.filtro) items = this.state.filtrados;
    else items = this.state.articulos;

        return(
            <div className="mt-3">
                <div className="row d-flex justify-content-between">
                  <h2 className="card col text-dark">CATALOGO DE PRODUCTOS</h2>
                  <BuscarCmp onChange={this.onChange}/>
                </div>
                <div className="row">
                  <ArticulosZgs 
                  articulos = {items}
                  goTo={(path) => {
                    this.props.history.push(path);
                  }}
                   />
                </div>
            </div>
        );
    }
}

export default Catalogo;
