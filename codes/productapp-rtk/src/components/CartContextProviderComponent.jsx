import React, { createContext, useReducer } from 'react'
import cartReducer from '../reducers/cartReducer';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

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
  let navigate = useNavigate();

  function addToCart(product) {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  function increment(id) {
     dispatch({ type: 'INCREMENT', payload: id })
  }

  function checkout() {
    // on successful login, users email can be stored in Cookie, sessionStorage
    // window.sessionStorage.setItem("user", "banu@gmail.com");
    let order = {
      "customer": {"email": window.sessionStorage.getItem("user")},
      "order-date": new Date(),
      "items": state.cartItems,
      "total": state.total
    }
    // place order, clear cart and redirect to landing page
    axios.post('http://localhost:1234/orders', order).then(response => {
      console.log(response);
       dispatch({ type: 'CLEAR_CART'});
       navigate("/"); // use route --> Client Side Routing
    })
  }

  return (
    <CartContext.Provider value={{ ...state, addToCart, increment, checkout}}>
      {props.children}
    </CartContext.Provider>
  )
}

