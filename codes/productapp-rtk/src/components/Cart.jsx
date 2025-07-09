import React, { useContext } from 'react'

import { Button, Container } from 'react-bootstrap';
import CartRow from './CartRow'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/features/CartSlice';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { cartItems, total } = useSelector(state => state.cart);

  function checkout() {
    // place order
    dispatch(clearCart());
    navigate("/");
  }
  return (
    <Container>
      {
        cartItems.map(product => <CartRow key={product.id} product={product} />)
      }
      <div className='row'>
        <div className='col-md-10'>
          &nbsp;
        </div>
        <div className='col-md-2'>
          Total {total}
        </div>
      </div>
      <div className='row'>
        <div className='col-md-10'>
          &nbsp;
        </div>
        <div className='col-md-2'>
          <Button variant='success' onClick={checkout}>Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
