/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import YouTube from "react-youtube";
import PropTypes from "prop-types";

const CombinedComponent = ({ activeTab }) => {
  const [content, setContent] = useState(null);

  //set isian
  const [subunit, setSubUnit] = useState([]);

  const [title, setTitle] = useState("");
  const [albumImg, setAlbumImg] = useState("");
  const [desc, setDesc] = useState("");
  const [member, setMember] = useState([]);
  const [highlight, setHighlight] = useState("");
  const [youtubeid, setYoutubeId] = useState("");

  //subunit
  useEffect(() => {
    fetch("./sub-unit.json")
      .then((response) => response.json())
      .then((data) => setSubUnit(data))
      .catch((error) => console.log("ERROR", error));
  }, []);

  //filter
  useEffect(() => {
    if (subunit.length > 0 && activeTab) {
      console.log("RUN", activeTab);
      const filtered = subunit.filter((res) => {
        return res.subid === activeTab;
      });
      console.log("active Tab", activeTab);
      console.log("ISIAN", filtered);
      // Ensure that filtered has content before trying to access properties
      if (filtered.length > 0) {
        const { title, albumImg, desc, listmember, highlight, youtubeid } =
          filtered[0]; // Get the first filtered item
        setTitle(title);
        setAlbumImg(albumImg);
        setDesc(desc);
        setMember(listmember);
        setHighlight(highlight);
        setYoutubeId(youtubeid); // Store filtered members
      }
    }
  }, [activeTab, subunit]);

  const onPlayerReady = (event) => {
    event.target.pauseVideo(); // The video will be paused on load (optional)
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0, // Auto-play the video
    },
  };
  // useEffect(()=>{
  //     fetch('./aaa.json')
  //     .then((response)=>response.json())
  //     .then((data)=>setMember(data))
  //     .catch((error)=>console.log('ERROR'));
  // },[]);

  return (
    <Container fluid className="mt-3">
      <Row>
        <h1>{title}</h1>
      </Row>
      <Row>
        <Col xs={12} xm={6}>
          <p>{desc}</p>
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
            <h3>{highlight}</h3>
            <div className="embed-responsive embed-responsive-16by9">
              <YouTube
                key={youtubeid} // Force remount when youtubeid changes
                videoId={youtubeid}
                opts={opts}
                onReady={onPlayerReady}
                className="w-100"
              />
              {youtubeid}
            </div>
          </Col>
          <Col
            xs={12}
            sm={6}
            className="d-flex justify-content-center mt-3 mt-sm-0"
          >
            <img src={albumImg} alt="Album Cover" className="img-fluid" />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

CombinedComponent.propTypes = {
  activeTab: PropTypes.string.isRequired, // Expecting a string and required
};

export default CombinedComponent;
