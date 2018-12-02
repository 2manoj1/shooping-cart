import { GET_PRODUCTS_SUCCESS } from '../constants';
export const products = (state = [], action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return action.data;
        default:
            return state
    }
}