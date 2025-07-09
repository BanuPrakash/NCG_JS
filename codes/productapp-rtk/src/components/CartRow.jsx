import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';


export default function CartRow({ product }) {
  let { id, title, image, price, qty, amount } = product; // not the one fetched from API, but Cart one

  return (
    <div className='row'>
      <div className='col-md-2 my-2'>
        <img src={image} style={{ 'width': '50px' }} />
      </div>
      <div className='col-md-2'>
        {title}
      </div>
      <div className='col-md-4'>
        <Button variant='success'> - </Button>
        &nbsp;
        {qty}
        &nbsp;
        <Button variant='success' > + </Button>
      </div>
      <div className='col-md-2'>
        Price: {price}
      </div>
      <div className='col-md-2'>
        Amount: {amount}
      </div>
    </div>
  )
}
