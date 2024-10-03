/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import YouTube from 'react-youtube';

function Kre(){
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
        fetch('./kre.json')
        .then((response)=>response.json())
        .then((data)=>setMember(data))
        .catch((error)=>console.log('ERROR'));
    },[]);

    return (
        <Container fluid className="mt-3">
            <Row>
                <h1>+(KR)ystal Eyes</h1>
                
            </Row>
            <Row>
                <Col>
                    <p>+(KR)ystal Eyes (Hangul: 크리스탈아이즈), is the second sub-unit of tripleS. They made their debut on May 4, 2023 with their mini album, AESTHETIC.
                    Members were chosen through the first gravity vote. The lineup consists of SeoYeon, JiWoo, ChaeYeon and SooMin.</p>
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
                        <h3>트리플에스 CHERRY TALK</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                        <YouTube videoId="uE_T_t6s_Go" opts={opts} onReady={onPlayerReady} className="w-100" />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex justify-content-center mt-3 mt-sm-0">
                        <img
                        src="https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/662cc819b09babfb88ae2b89_album%20cover_3.-%2B(KR)ystal-Eyes-_AESTHETIC_-p-500.jpg"
                        alt="Album Cover"
                        className="img-fluid"
                        />
                    </Col>
                </Row>
              
            </Row>
        </Container>
    )
}
export default Kre