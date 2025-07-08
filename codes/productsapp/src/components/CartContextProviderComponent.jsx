import React, { createContext, useReducer } from 'react'
import cartReducer from '../reducers/cartReducer';

let CartContext = createContext();

export {
  CartContext
}

let initialState = {
  cartItems: [],
  total: 0.0,
  quantity: 0
}

export default function CartContextProviderComponent(props) {
  let [state, dispatch] = useReducer(cartReducer, initialState);

  function addToCart(product) {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  return (
    <CartContext.Provider value={{ ...state, addToCart}}>
      {props.children}
    </CartContext.Provider>
  )
}

