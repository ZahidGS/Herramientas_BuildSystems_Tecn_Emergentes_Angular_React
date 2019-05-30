import { createStore, combineReducers } from 'redux';
import currentItem from './reducers/currentItem';

const reducer = combineReducers({
    //
    currentItem,
});

const store = createStore(reducer);

export default store;