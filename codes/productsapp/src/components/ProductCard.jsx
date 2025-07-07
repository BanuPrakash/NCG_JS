import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function ProductCard({ product }) {
  let { id, title, price, image } = product;
  return (
    <div className='col-md-4 my-2'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          Rs. {price} &nbsp;
          <FontAwesomeIcon icon={faShoppingCart} color='blue' />
          <FontAwesomeIcon icon={faHeart} color='red' />
        </Card.Footer>
      </Card>
    </div>
  )
}
