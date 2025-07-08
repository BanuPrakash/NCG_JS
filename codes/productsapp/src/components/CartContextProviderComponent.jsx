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

  function increment(id) {
     dispatch({ type: 'INCREMENT', payload: id })
  }

  function checkout() {
    dispatch({ type: 'CLEAR_CART'});
  }
  
  return (
    <CartContext.Provider value={{ ...state, addToCart, increment, checkout}}>
      {props.children}
    </CartContext.Provider>
  )
}

