import './App.css';
import { Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
import NavbarComponent from './components/NavbarComponent';

import {Container} from 'react-bootstrap'

function App() {
  return (
    <Container>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </Container>
  );
}

export default App;
