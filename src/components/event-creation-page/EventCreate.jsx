import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EventCreate = ({ receiveFormData, receiveImage }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [formData, setFormData] = useState({});

  const handleImageChange = (e) => {
    e.preventDefault();
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    receiveFormData(formData);
    receiveImage(file);
    navigate("/event");
  };

  return (
    <div className="wrapper">
      <Form onSubmit={handleOnSubmit} className="container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Event Name</Form.Label>
          <Form.Control
            required
            onChange={handleOnChange}
            type="text"
            placeholder="Birthday"
            name="eventName"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Host Name</Form.Label>
          <Form.Control
            required
            onChange={handleOnChange}
            type="text"
            placeholder="George Astoniza"
            name="hostName"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Start Date</Form.Label>
          <Form.Control
            required
            onChange={handleOnChange}
            type="date"
            name="eventStartDate"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">End Date</Form.Label>
          <Form.Control
            required
            onChange={handleOnChange}
            type="date"
            name="eventEndDate"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Start Time</Form.Label>
          <Form.Control
            required
            onChange={handleOnChange}
            type="time"
            name="eventStartTime"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">End Time</Form.Label>
          <Form.Control
            required
            onChange={handleOnChange}
            type="time"
            name="eventEndTime"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Address</Form.Label>
          <Form.Control
            required
            onChange={handleOnChange}
            name="eventAddress"
            type="text"
            placeholder="55 Yangoora Rd, Canterbury, 2098"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label className="fw-bold">Event Image</Form.Label>
          <Form.Control
            type="file"
            onChange={handleImageChange}
            name="img"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EventCreate;
