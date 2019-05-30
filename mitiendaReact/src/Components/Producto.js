import React, { Component } from 'react';
import ProductoPage from './ProductoPage';

//connect permite conectar el componente y tener acceso al estado
//de los reducers
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import findCurrentItem from '../redux/actions/findCurrentItem';

class Producto extends Component {

    componentDidMount(){
        this.props.findCurrentItem(parseInt(this.props.match.params.itemId));
    }

    render() {

        const { currentItem } = this.props;

        console.log('componente results', this.props);

        return (
            <ProductoPage 
                currentItem={currentItem}
/*                 goTo={(path) => {
                    this.props.history.push(path);
                }} */
            />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        currentItem: state.currentItem,
    }
}

const mapDispatchToProps = {
    findCurrentItem,
}

//regresa el componente conectado con todas las propiedades

export default withRouter (
    connect(mapStateToProps, mapDispatchToProps)(Producto)
);