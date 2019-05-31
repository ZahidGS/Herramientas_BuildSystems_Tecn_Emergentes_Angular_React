import { createStore, combineReducers } from 'redux';
import currentItem from './reducers/currentItem';

// CONSTRUYE EL ESTADO PARA ALMACENAR LOS DATOS DE LOS PRODUCTOS
const reducer = combineReducers({
    //
    currentItem,
});

const store = createStore(reducer);

export default store;