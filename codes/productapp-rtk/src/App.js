import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList';
import Default from './components/Default';
import NavbarComponent from './components/NavbarComponent';
import { Container } from 'react-bootstrap'
import ProductForm from './components/ProductForm';

const Cart = lazy(() => import('./components/Cart'));
const Details = lazy(() => import('./components/Details'));

function App() {
  return (
    <Container>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/cart' element={
          <Suspense fallback={<h1>Loading Cart ....</h1>}>
            <Cart />
          </Suspense>
        } />
        <Route path='/details/:id' element={
          <Suspense fallback={<h1>Loading Details ....</h1>}>
            <Details />
          </Suspense>
        } />
          <Route path='/form' element={<ProductForm />} />
      
        <Route path='/products' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </Container>
  );
}

export default App;
