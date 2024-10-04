/* eslint-disable no-unused-vars */
import { Container, Row, Col } from "react-bootstrap";
import "../MainPage/mainpage.css";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Carousel from "react-bootstrap/Carousel";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";
import AboutPage from "./AboutPage";
import NavbarTop from "../Navbar/Navbar";
import assemble24 from "../assets/tripleS_Showcase.jpg";
import tripleSLogo from "../assets/tripleSLogo.jpg";

function MainPage() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selected) => {
    setIndex(selected);
  };

  const [showAlert, setShowAlert] = useState("false");
  const handleClose = () => setShowAlert(false);
  return (
    <>
      <Container fluid>
        <NavbarTop></NavbarTop>
        <ToastContainer
          className="p-3"
          position={"top-end"}
          style={{ zIndex: 1 }}
        >
          <Toast
            bg="warning"
            onClose={() => setShowAlert(false)}
            show={showAlert}
            delay={3000}
          >
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Developer Message</strong>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
              />
              {/* <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body>
              This is just my personal project to learn React framework. All
              images & information, i took from tripleS official website and
              tripleS Wiki | Fandom.
            </Toast.Body>
          </Toast>
        </ToastContainer>
        <Row>
          <div className="carouselContainer mt-3">
            <Carousel>
              <Carousel.Item>
                <img src={tripleSLogo} className="d-block w-100"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={assemble24} className="d-block w-100"></img>
                <Carousel.Caption>
                  <h3>Girls Never Die</h3>
                  <p>Latest album from TripleS</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <Row className="AboutPage mt-3" id="aboutpage">
          <AboutPage></AboutPage>
        </Row>
      </Container>
    </>
  );
}
export default MainPage;
