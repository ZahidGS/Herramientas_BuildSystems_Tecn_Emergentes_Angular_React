//alamacena el item actual
// que se buscará para mostrar el producto

export const type = 'findCurrentItem';

//
const findCurrentItem = id => {
    return {
        type,
        payload: id
    };
};

export default findCurrentItem;