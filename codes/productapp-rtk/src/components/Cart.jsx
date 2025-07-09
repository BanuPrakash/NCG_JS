import React, { useContext } from 'react'

import { Button, Container } from 'react-bootstrap';
import CartRow from './CartRow'

export default function Cart() {

  return (
    <Container>
      {/* {
        cartItems.map(product => <CartRow key={product.id} product={product} />)
      } */}
      <div className='row'>
        <div className='col-md-10'>
          &nbsp;
        </div>
        <div className='col-md-2'>
          Total {0}
        </div>
      </div>
      <div className='row'>
        <div className='col-md-10'>
          &nbsp;
        </div>
        <div className='col-md-2'>
          <Button variant='success' >Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
