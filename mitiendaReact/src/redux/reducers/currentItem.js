//este reducers va a guardar un ID

import { type as findCurrentItemType } from '../actions/findCurrentItem';
import items from '../../Components/items';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findCurrentItemType: {
            return items.find( n => n.id === payload);
        }
        default:
                return state;
    }
}

export default reducer;