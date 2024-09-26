import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container,Row } from 'react-bootstrap';
import {  Link } from 'react-router-dom';

function NavbarTop(){
    return(
        <Row>
            <Navbar bg="black" data-bs-theme="dark">
                    <Container fluid style={{width:'100%'}}>
                    <Navbar.Brand as={Link} to="/home" className='justify-content-center align-items-center'><img src='assets/tripleSLogo.jpg' width="84px"
                height="48px"
                className="d-inline-block align-center"></img> TripleS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#aboutpage">About</Nav.Link>
                        <Nav.Link as={Link} to="/home" href='#subunit'>Sub-Unit</Nav.Link>
                        <Nav.Link as={Link} to="/member">Member List</Nav.Link>
                        <Nav.Link as={Link} to="/discussion">Forum Discussion</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </Row>
    )
}
export default NavbarTop