import React from 'react';
 
import { Navbar, Nav } from 'react-bootstrap';
 
const Navigation = () => {
    return (
       <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#scores">Scores</Nav.Link>
          </Nav>
        </Navbar>
       </div>
    );
}
 
export default Navigation;