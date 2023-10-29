import React from 'react';
import { useState } from 'react';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
       <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">BubbaTest</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Button onClick={handleShow} variant="info">Log in</Button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Register/Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Enter you Login Information below to Login.<br/>
          <label for="loginid">Login ID:</label>
          <input type="text" id="loginid"/>
          <label for="password">Password:</label>
          <input type="text" id="password"/>
          <a href="/">Register</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
        </Navbar>
       </div>
    );
}
 
export default Navigation;