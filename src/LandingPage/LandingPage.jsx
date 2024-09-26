import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LandingPage(){
    const navigate=useNavigate();
    const handleClickButton=()=>{
        navigate('/home');
    }
    return(
        <>
            <Container fluid className="d-flex justify-content-center align-items-center vh-100">
                <Row>
                    <Col className="d-flex flex-column align-items-start justify-content-center" md={8}>
                        <Row className='d-flex'><h1>안녕하세요</h1></Row>
                        <Row className='d-flex'><h1>Welcome to</h1></Row>
                        <Row className='d-flex'><h1>TripleS Wikipedia!</h1></Row>
                        <Row className='d-flex' style={{color:'#6c6d73'}}><h4>Idol with all possibilities</h4></Row>
                        <Row className='d-flex px-2 py-2'>
                        <Button variant="light" onClick={handleClickButton}>Check it out!</Button>
                        </Row>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center" md={4}>
                    <img src="public/tripleSLogo.jpg" alt="tripleS Logo" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Col>
                </Row>
            </Container>
           
        </>
    )
}
export default LandingPage