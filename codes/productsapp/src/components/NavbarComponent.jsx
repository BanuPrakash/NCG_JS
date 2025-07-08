import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContextProviderComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap';

export default function NavbarComponent() {
    let { quantity } = useContext(CartContext);

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Acme Inc.</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/"}>Products</Nav.Link>
                    <Nav.Link as={Link} to={"/cart"}>
                        <FontAwesomeIcon icon={faShoppingCart} color='white' />
                        <Badge>{quantity}</Badge>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/form"}>Product Form</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    )
}
