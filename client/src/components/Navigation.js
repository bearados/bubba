import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import ModalContent from './ModalContent.js';

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);
    return (
       <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">BubbaTest</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Button onClick= {() => setShowModal(true)} variant="info">Log in</Button>
        {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
        </Navbar>
       </div>
    );
}
 
export default Navigation;