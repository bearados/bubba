import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const Registration = () => {
    return (
       <div>
        <Form>
            <h1>Register</h1><br/>
            <Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control required type="text" placeholder="First name" defaultValue="Mark"/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required type="text" placeholder="Last name" defaultValue="Otto"/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label for="password1" column sm="2">Password</Form.Label>
                    <Col sm="10">
                        
                        <Form.Control id="password1" type="password" placeholder="Password" />
                    </Col>
                    <Form.Label for="password2" column sm="2">Re-enter Password</Form.Label>
                    <Col sm="10">
                        <Form.Control id="password2" type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
            </Row>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </Form>
       </div>
    );
}

export default Registration;