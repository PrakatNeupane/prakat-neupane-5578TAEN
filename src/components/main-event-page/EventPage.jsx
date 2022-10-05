import React from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const EventPage = ({ userData, img }) => {
  const navigate = useNavigate();
  const handleEdit = (e) => {
    e.preventDefault();
    navigate("/create");
  };
  return (
    <div className="wrapper">
      <Row className="">
        <Col className="cold-md">
          <Card style={{ width: "18rem" }}>
            <Card.Img src={img} width="300" height="300" />
            <Card.Body>
              <Card.Title>{userData.eventName}</Card.Title>
              <p>
                Hosted by <strong>{userData.hostName}</strong>
              </p>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <i class="fad fa-calendar fa-2x"></i>{" "}
                <p className="pt-1">
                  <strong>
                    {userData.eventStartDate} {userData.eventStartTime}
                  </strong>{" "}
                  <br /> to {userData.eventEndDate} {userData.eventEndTime}
                </p>
                <i class="far fa-angle-right fa-2x"></i>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <i class="fas fa-map-marker-smile fa-2x"></i>
                <p className="pt-1">
                  <strong>Street Name</strong> <br /> {userData.eventAddress}{" "}
                </p>
                <i class="far fa-angle-right fa-2x"></i>
              </ListGroup.Item>
            </ListGroup>
            <Button className="primary" onClick={handleEdit}>
              Edit my event
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EventPage;
