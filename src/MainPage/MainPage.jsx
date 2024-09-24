/* eslint-disable no-unused-vars */
import { Container, Row, Col } from 'react-bootstrap';
import '../MainPage/mainpage.css'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MainPage(){
    return(
        <>
        <Container fluid >
           <Navbar bg="black" data-bs-theme="dark">
                <Container fluid style={{width:'100%'}}>
                <Navbar.Brand href="#home" className='justify-content-center align-items-center'><img src='/src/assets/tripleSLogo.jpg' width="84px"
              height="48px"
              className="d-inline-block align-top"></img> TripleS</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#features">Members</Nav.Link>
                    <Nav.Link href="#pricing">Additional Info</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            
        </Container>
        
        </>
    )
}
export default MainPage