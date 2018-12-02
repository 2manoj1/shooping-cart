import { combineReducers } from "redux";
import { products } from "./products";
import { cart } from './cart';
import { orderdetails } from './orderdetails';

const rootReducer = combineReducers({
  products,
  cart,
  orderdetails
})

export default rootReducer