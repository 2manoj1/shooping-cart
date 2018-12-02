import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART } from "../constants";

export const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state = [...state, action.id];
    case REMOVE_FROM_CART:
      return state.filter((id) => id !== action.id);
    case RESET_CART:
      return [];
    default:
      return state
  }
}