import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const Registration = () => {
    const divStyle ={
        align: 'left'
    }
    return (
       <div class="d-flex justify-content-center" width="100%">
        <Form>
            <h1>Register</h1><br/>
            <Row>
                <Form.Group style={divStyle} as={Col} controlId="validationCustom01">
                    <Form.Label htmlFor="firstname1">First name</Form.Label>
                    <Form.Control id="firstname1" required type="text" placeholder="First name"/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom02">
                    <Form.Label htmlFor="lastname1">Last name</Form.Label>
                    <Form.Control id="lastname1" required type="text" placeholder="Last name"/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Label htmlFor="email1">Email address</Form.Label>
                    <Form.Control id="email1" type="email" placeholder="name@example.com" />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formPlaintextPassword1">
                    <Form.Label htmlFor="password1" >Password</Form.Label>
                    <Form.Control id="password1" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group as={Col} controlId="formPlaintextPassword2">
                    <Form.Label htmlFor="password2" >Re-enter Password</Form.Label>
                    <Form.Control id="password2" type="password" placeholder="Password" />
                </Form.Group>
            </Row>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </Form>
       </div>
    );
}

export default Registration;