/* eslint-disable no-unused-vars */
import { Container, Row, Col } from "react-bootstrap";
import "../MainPage/aboutpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faTiktok,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";
// import AAA from "../SubUnit/AAA";
// import Kre from "../SubUnit/Kre";
import CombinedComponent from "../SubUnit/CombineParent";

function AboutPage() {
  const [activeTab, setActiveTab] = useState("1");
  const [subUnit, setSubUnit] = useState([]);

  //fetch subunit
  useEffect(() => {
    fetch("./sub-unit.json")
      .then((response) => response.json())
      .then((data) => setSubUnit(data))
      .catch((error) => console.log("ERROR", error));
  }, []);

  return (
    <Container fluid className="mx-3">
      <div className="About">
        <Row>
          <h2 style={{ fontSize: "6rem" }}>About</h2>
          <hr
            style={{
              border: "none", // Remove default styling
              borderTop: "4px solid white", // Custom line style
              width: "70%", // Full width
              margin: "20px 0", // Space above and below the line
            }}
          />
        </Row>
        <Row className="mx-3">
          <h4>tripleS 트리플에스</h4>
          <p>
            Known as SocialSonyoSeoul is a multi-national 24-member South Korean
            girl group under MODHAUS.
          </p>
          <p>
            The group made its official debut with the mini album, ASSEMBLE, and
            the title track, “Rising”, on February 13, 2023 with the
            participation of the first ten revealed members. They then returned
            as a full, complete group with all 24 members on May 8, 2024 with
            the release of their first studio album, ASSEMBLE24, and the title
            track, “Girls Never Die”.
          </p>
        </Row>
        <Row className="mx-3">
          <p>
            tripleS primarily works in rotational sub-units fans are able to
            vote upon. The first unit, Acid Angel from Asia, debuted on October
            28, 2022, followed by +(KR)ystal Eyes on May 4, 2023, LOVElution on
            August 17, 2023, EVOLution on October 11, 2023 and Aria on January
            15, 2024.
          </p>
        </Row>
        <Row className="mx-3 mt-2">
          <h4>Official tripleS Social Media</h4>
          <Row>
            <a
              href="#"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagramSquare} /> triplecosmos
            </a>
            <a
              href="#"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitterSquare} /> triplecosmos
            </a>
            <a
              href="#"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutubeSquare} /> tripleS official
            </a>
            <a
              href="#"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} /> tripleS
            </a>
          </Row>
        </Row>
      </div>
      <div className="SubUnit mx-3 mt-5" id="subunit">
        <Row>
          <h2 style={{ fontSize: "6rem" }}>Sub-Unit</h2>
          <hr
            style={{
              border: "none", // Remove default styling
              borderTop: "4px solid white", // Custom line style
              width: "70%", // Full width
              margin: "20px 0", // Space above and below the line
            }}
          />
        </Row>
        <Row className="tab">
          <Nav
            variant="tabs"
            onSelect={(selectedKey) => setActiveTab(selectedKey)}
            activeKey={activeTab}
          >
            {subUnit.map((res) => (
              <Nav.Link
                key={res.subid}
                eventKey={String(res.subid)}
                style={{ color: "#9193c2" }}
              >
                <h5>{res.title}</h5>
              </Nav.Link>
            ))}
            {/* <Nav.Item>
              <Nav.Link eventKey="tab1" style={{ color: "#9193c2" }}>
                <h5>Acid Angel from Asia</h5>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab2" style={{ color: "#9193c2" }}>
                <h5>+(KR)ystal Eyes</h5>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab3" style={{ color: "#9193c2" }} disabled>
                <h5>LOVElution</h5>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab4" style={{ color: "#9193c2" }} disabled>
                <h5>EVOLution</h5>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab5" style={{ color: "#9193c2" }} disabled>
                <h5>NXT</h5>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab6" style={{ color: "#9193c2" }} disabled>
                <h5>Aria</h5>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab7" style={{ color: "#9193c2" }} disabled>
                <h5>ASSEMBLE24</h5>
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
          {/* {activeTab === "tab1" && <AAA />}
          {activeTab === "tab2" && <Kre />} */}

          <CombinedComponent activeTab={activeTab}></CombinedComponent>
        </Row>
      </div>
    </Container>
  );
}
export default AboutPage;
