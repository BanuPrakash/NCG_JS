import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/async/productsApi';

export default function ProductList() {
  // let [products, setProducts] = useState();

  let { list: products, error, status } = useSelector(state => state.products);
  let dispatch = useDispatch();

  // componentDidMount
  useEffect(() => {
    dispatch(fetchProducts()); // dispatch a thunk
    // // fetch('https://fakestoreapi.com/products?limit=5')
    // // .then(response => response.json())
    // // .then(data => setProducts(data));

    // // axios.get('https://fakestoreapi.com/products?limit=5')
    // axios.get('http://localhost:1234/products')
    //   .then(response => setProducts(response.data));

  }, []);

  return (
    <div className='row'>
      {
        status === "loading" ? "Loading Products ..." : products && (
          products.map(product => <ProductCard key={product.id} product={product} />)
        )
      }
    </div>
  )
}
