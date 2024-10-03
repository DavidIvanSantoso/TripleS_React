import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container,Row } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import tripleSLogo from '../assets/tripleSLogo.jpg'

function NavbarTop(){
    return(
        <Row>
        <Navbar bg="black" variant="dark" expand="lg">
            <Container fluid>
            <Navbar.Brand as={Link} to="/home" className="d-flex align-items-center">
                <img
                src={tripleSLogo}
                width="84px"
                height="48px"
                className="d-inline-block align-center"
                alt="TripleS Logo"
                />
                TripleS
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/home#about">About</Nav.Link>
                <Nav.Link as={Link} to="/home#subunit">Sub-Unit</Nav.Link>
                <Nav.Link as={Link} to="/member">Member List</Nav.Link>
                <Nav.Link as={Link} to="/discussion">Forum Discussion</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </Row>
    )
}
export default NavbarTop