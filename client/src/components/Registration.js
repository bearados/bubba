import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const Registration = () => {
    return (
       <div>
        <Form>
            <h1>Register</h1><br/>
            <Row>
                <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control required type="text" placeholder="First name"/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required type="text" placeholder="Last name"/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group cas={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                    <Form.Label for="password1" >Password</Form.Label>
                    <Form.Control id="password1" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                    <Form.Label for="password2" >Re-enter Password</Form.Label>
                    <Form.Control id="password2" type="password" placeholder="Password" />
                </Form.Group>
            </Row>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </Form>
       </div>
    );
}

export default Registration;