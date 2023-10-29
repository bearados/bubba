import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import ModalContent from './ModalContent.js';

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
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
        </Navbar>
       </div>
    );
}
 
export default Navigation;