import { PLACE_ORDER_SUCCESS } from "../constants";

export const orderdetails = (state = [], action) => {
  switch (action.type) {
    case PLACE_ORDER_SUCCESS:
      return action.data;
    default:
      return state
  }
}