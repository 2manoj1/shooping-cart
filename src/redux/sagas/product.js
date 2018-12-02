import { put, select, takeLatest } from 'redux-saga/effects';
import { getProducts, placeorderwithIds } from '../../API';
import { GET_PRODUCTS, PLACE_ORDER } from '../constants';
import { setProductInfo, placeOrderSucces } from '../actions';

/********************** Model Logic *************************/

function* handleGetProducts() {
   const data = yield getProducts();
   yield put(setProductInfo(data));
}

function* handlePlaceOrder() {
    const {cart} = yield select();
    if(cart.length > 0) {
        const listIds = cart.join(',');
        const data = yield placeorderwithIds(listIds);
        yield put(placeOrderSucces(data));
    }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export function* watchGetProducts() {
    yield takeLatest(GET_PRODUCTS, handleGetProducts);
}

export function* watchPlaceOrder() {
    yield takeLatest(PLACE_ORDER, handlePlaceOrder);
}

