import React from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    e.preventDefault();
    navigate("/create");
  };
  return (
    <div className="wrapper">
      <Row className="">
        <Col className="cold-md">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/photos/dancing-friends-picture-id501387734?k=20&m=501387734&s=612x612&w=0&h=1mli5b7kpDg428fFZfsDPJ9dyVHsWsGK-EVYZUGWHpI="
              alt="pic"
            />
            <Card.Body>
              <Card.Title>Party Night</Card.Title>
              <p>
                Hosted by <strong>James</strong>
              </p>
              <Card.Text>
                <i class="fas fa-hand-spock"></i> <strong>14</strong> responses
                | see guests
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <i class="fad fa-calendar fa-2x"></i>{" "}
                <p className="pt-1">
                  <strong>18 August 6:00PM</strong> <br /> to 19 August 1:00PM{" "}
                </p>
                <i class="far fa-angle-right fa-2x"></i>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <i class="fas fa-map-marker-smile fa-2x"></i>
                <p className="pt-1">
                  <strong>Street Name</strong> <br /> 301 Rowes Lane, WA{" "}
                </p>
                <i class="far fa-angle-right fa-2x"></i>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <i class="fas fa-link fa-2x"></i>
                <p className="pt-1">
                  <strong>Link</strong> <br /> https//netflix.com.au{" "}
                </p>
                <i class="far fa-angle-right fa-2x"></i>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col className="col d-flex flex-column align-items-end justify-content-center">
          <h1>Imagine if</h1>
          <h1>Snapchat</h1>
          <h1>had events</h1>
          <p>
            Easily host and share events with your friends across any social
            media
          </p>
          <Button variant="primary" onClick={handleOnClick}>
            Create my event
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
