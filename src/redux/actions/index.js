import {GET_PRODUCTS, GET_PRODUCTS_SUCCESS, ADD_TO_CART, REMOVE_FROM_CART, RESET_CART, PLACE_ORDER, PLACE_ORDER_SUCCESS} from '../constants';
export const getProducsInfo = () => ({
    type: GET_PRODUCTS
});
export const setProductInfo = (data) => ({
    type: GET_PRODUCTS_SUCCESS,
    data
})
export const addToCart = (id) => ({
    type: ADD_TO_CART,
    id
});
export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    id
});
export const resetCart = () => ({
    type: RESET_CART
});

export const placeOrder = () => ({
    type: PLACE_ORDER
});
export const placeOrderSucces = (data) => ({
    type: PLACE_ORDER_SUCCESS,
    data
});
