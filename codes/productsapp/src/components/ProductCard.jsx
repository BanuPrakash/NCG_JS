import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from './CartContextProviderComponent';
import {Link} from 'react-router-dom'

export default function ProductCard({ product }) {
  let { addToCart } = useContext(CartContext); // Consumer

  let { id, title, price, image } = product;
  return (
    <div className='col-md-4 my-2'>
      <Card style={{ width: '18rem' }}>
        <Link to={`/details/${id}`}>
           <Card.Img variant="top" src={image} />
        </Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          Rs. {price} &nbsp;
          <FontAwesomeIcon icon={faShoppingCart} color='blue' onClick={() => addToCart({
            ...product,
            qty: 1,
            amount: price
          })} /> &nbsp;&nbsp;
          <FontAwesomeIcon icon={faHeart} color='red' />
        </Card.Footer>
      </Card>
    </div>
  )
}
