import { fork, all } from 'redux-saga/effects';
import { watchGetProducts, watchPlaceOrder } from './product';

export default function* rootSaga() {
  yield all([
    fork(watchGetProducts),
    fork(watchPlaceOrder)
  ])
}