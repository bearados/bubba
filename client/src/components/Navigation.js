import React from 'react';
 
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
 
const Navigation = () => {
    return (
       <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">BubbaTest</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Button variant="info">Sign in</Button>
        </Navbar>
       </div>
    );
}
 
export default Navigation;