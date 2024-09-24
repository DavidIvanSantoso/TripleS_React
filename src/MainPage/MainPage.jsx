/* eslint-disable no-unused-vars */
import { Container, Row, Col } from 'react-bootstrap';
import '../MainPage/mainpage.css'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState } from 'react';
import AboutPage from './AboutPage';

function MainPage(){
    const [index,setIndex]=useState(0)
    const handleSelect=(selected)=>{
        setIndex(selected)
    }

    return(
        <>
        <Container fluid >
            <Row>
            <Navbar bg="black" data-bs-theme="dark">
                    <Container fluid style={{width:'100%'}}>
                    <Navbar.Brand href="#home" className='justify-content-center align-items-center'><img src='/src/assets/tripleSLogo.jpg' width="84px"
                height="48px"
                className="d-inline-block align-top"></img> TripleS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#aboutpage">About</Nav.Link>
                        <Nav.Link href="#features">Members</Nav.Link>
                        <Nav.Link href="#pricing">Additional Info</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </Row>
            <Row>
            <div className='carouselContainer mt-3'>
                <Carousel>
                <Carousel.Item>
                        <img src='./src/assets/tripleSLogo.jpg' className="d-block w-100"></img>
    
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='./src/assets/tripleS_Showcase.jpg' className="d-block w-100"></img>
                        <Carousel.Caption>
                        <h3>Girls Never Die</h3>
                        <p>Latest album from TripleS</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                   
                </Carousel>
            </div>
            </Row>
            <Row className='AboutPage mt-3' id='aboutpage'>
                <AboutPage></AboutPage>
            </Row>
        </Container>
        
        </>
    )
}
export default MainPage