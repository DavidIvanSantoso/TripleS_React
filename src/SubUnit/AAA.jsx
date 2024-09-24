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
        width: '640',
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
                <Col>
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
                    <div className="albHigh mt-3">
                            <h3>Album Highlight!</h3>
                            <h3>GENERATION</h3>
                            <YouTube videoId="0cZ7o0Wn_dc" opts={opts} onReady={onPlayerReady} />
                        </div>
                </Col>
                <Col className="d-flex align-items-start">
                    <img src="https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/662cc819f43e83e0b7efd20d_album%20cover_1.-Acid-Angel-from-Asia-_ACCESS_-p-500.jpg"></img>
                </Col>
            </Row>
        </Container>
    )
}
export default AAA