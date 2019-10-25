import React, {Component} from 'react';
import { Button, Table, Row, Col, Container, Form } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';
function random(){
     return Math.floor(Math.random() * 100);
}

function problemGener(){
    return <Container>{random()} + {random()} =</Container>;
}
var i = 0;

function rowGener(){
    return <Row>
    <Col>{++i})</Col><Col>{problemGener()}</Col>    
    <Col><NumericInput size="sm" className="form-control"/></Col>
    <Col><Button type="submit" variant="success">Check Answer</Button></Col>
    <Col>{++i})</Col><Col>{problemGener()}</Col> 
    <Col><NumericInput size="sm" className="form-control"/></Col>
    <Col><Button type="submit" variant="success">Check Answer</Button></Col>
    </Row>
}

class QuizA extends Component {
    render(){
        return(
            <Container>
                
                {rowGener()}
                <br/>
                {rowGener()}
                <br/>
                {rowGener()}
                <br/>
                {rowGener()}
                <br/>
                {rowGener()}
                <br/>
                {rowGener()}
                <br/>
                {rowGener()}
                <br/>
                {rowGener()}
                <br/>
                {rowGener()}
                <br/>
                {rowGener()}
            </Container>
        );
    }
}

export default QuizA;