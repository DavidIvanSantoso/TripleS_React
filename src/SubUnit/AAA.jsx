/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import YouTube from 'react-youtube';

function AAA(){
    const [member,setMember]=useState([])
    const onPlayerReady = (event) => {
        event.target.pauseVideo(); // The video will be paused on load (optional)
      };
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 0, // Auto-play the video
        },
    }; 
    useEffect(()=>{
        fetch('./aaa.json')
        .then((response)=>response.json())
        .then((data)=>setMember(data))
        .catch((error)=>console.log('ERROR'));
    },[]);

    return (
        <Container fluid className="mt-3">
            <Row>
                <h1>Acid Angel from Asia (ACCESS)</h1>
                
            </Row>
            <Row>
                <Col xs={12} xm={6}>
                    <p>Acid Angel from Asia (Hangul: 애시드엔젤프롬에이시아) was the first tripleS sub-unit, formed through the first Gravity. They officially debuted on October 28th 2022 with the mini album, ACCESS.</p>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>S Number</th>
                            <th>Name</th>
                            <th>Hangul</th>
                            </tr>
                        </thead>
                        <tbody>
                        {member.map((res) => (
                            <tr key={res.sid}>
                            <td>S{res.sid}</td>
                            <td>{res.name}</td>
                            <td>{res.hangeul}</td>
                            </tr>
                         ))}
                        </tbody>
                    </Table>
                </Col>
                <Row className="align-items-center">
                    <Col xs={12} sm={6} className="albHigh mt-3">
                        <h3>Album Highlight!</h3>
                        <h3>GENERATION</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                        <YouTube videoId="0cZ7o0Wn_dc" opts={opts} onReady={onPlayerReady} className="w-100" />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex justify-content-center mt-3 mt-sm-0">
                        <img
                        src="https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/662cc819f43e83e0b7efd20d_album%20cover_1.-Acid-Angel-from-Asia-_ACCESS_-p-500.jpg"
                        alt="Album Cover"
                        className="img-fluid"
                        />
                    </Col>
                </Row>
               
            </Row>
        </Container>
    )
}
export default AAA