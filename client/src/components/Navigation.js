import React from 'react';
import { useState } from 'react';
import { Navbar, Nav, Button, Modal, Form, Row, Col } from 'react-bootstrap';

const Navigation = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const divStyle = {
    padding: 15
  };
    return (
       <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">BubbaTest</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Button onClick={handleShow} variant="info">Register/Log in</Button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered={true}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title><br/>
        </Modal.Header>
        <Modal.Body style={divStyle}>
        <p>Enter you Login Information below.</p>
          <Form style={divStyle}>
            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control size="sm" type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control size="sm" type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Col>
            <a href="/registration">Register</a>
            </Col>
            <Col>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            </Col>
            <Col>
            <Button variant="primary">Submit</Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
        </Navbar>
       </div>
    );
}
 
export default Navigation;