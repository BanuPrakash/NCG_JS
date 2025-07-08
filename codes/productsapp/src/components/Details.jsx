import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';

export default function Details() {
  let [product, setProduct] = useState();
  // http://localhost:1234/customers/banu@gmail.com/orders
  // to read banu@gmail.com --> PathParameters
  let {id} = useParams();

  // useSearchParams() --> Query Parameters like
  // http://localhost:1234/products?page=1&size=20

  useEffect(() => {
    axios.get(`http://localhost:1234/products/${id}`)
    .then(response => setProduct(response.data));
  }, [id]);
  return (
    <div>
      <h1>Product Details</h1>
      {
        product && (
          <div>
              Title : {product.title} <br />
              Price: {product.price} <br />
              <img src={product.image} />
          </div>
        )
      }
    </div>
  )
}
