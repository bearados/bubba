import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const Registration = () => {
    return (
       <div>
        <Form>
            <h1>Register</h1><br/>
            
            <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Col sm="10">
                    <Form.Label for="password1" column sm="5">Password</Form.Label>
                    <Form.Control id="password1" type="password" placeholder="Password" />
                </Col>
                <Col sm="10">
                    <Form.Label for="password2" column sm="5">Re-enter Password</Form.Label>
                    <Form.Control id="password2" type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                
            </Form.Group>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </Form>
       </div>
    );
}

export default Registration;