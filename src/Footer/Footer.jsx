import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <footer className=" text-white py-3">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About this page</h5>
            <p>This is my personal project for learning ReactJS</p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Name: David Ivan</p>
            <p>Email: davidivan6900@gmail.com</p>
            <p>Phone: +62 81553217990</p>
          </Col>
          <Col md={4}>
            <h5>Follow Me On Social Media!</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.linkedin.com/in/david-ivan6900" className="text-white"><FontAwesomeIcon icon={faLinkedin} /> David Ivan Santoso</a></li>
              <li><a href="https://www.instagram.com/_davidivan" className="text-white"><FontAwesomeIcon icon={faInstagram} />_davidivan</a></li>
              
            </ul>
          </Col>
        </Row>
        
      </Container>
    </footer>
    )
}
export default Footer
