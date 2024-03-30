import { ADD_TO_CART } from "../actions/actionsTypes"; // Updated import path

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
