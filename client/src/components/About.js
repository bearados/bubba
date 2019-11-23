import React from 'react';
import { Row, Col, Jumbotron, ListGroup } from 'react-bootstrap';

const About = () => {
    return (
       <div>
        <Jumbotron>
          <h1>About BubbaTest</h1>
          <p>This is a simple React/Node web-app made to help kids improve their math skills.</p>
          <p>The graph scores page was built using react-d3-graph and Heroku Postgres</p>
          
          <ListGroup variant="flush"><Row><Col>Project Links:</Col><Col>Other Projects by Jessica Adams:</Col></Row> 
          <Row>
            <Col><ListGroup.Item sz="sm"><a href="https://github.com/bearados/bubba">View this project on github</a></ListGroup.Item></Col>
           
            
            <Col><ListGroup.Item><a href="https://atlascrawler.herokuapp.com">Web Crawler (Group Project)</a></ListGroup.Item>
            <ListGroup.Item><a href="https://midwayfairies.herokuapp.com">Midway Fairies site</a></ListGroup.Item></Col>
            </Row>
            </ListGroup>
            <br/>
            <p>Author: Jessica Adams <br/>
            <a href="https://www.linkedin.com/in/jessica-adams-36a98762/">Find me on linkedin!</a></p>
        </Jumbotron>
       </div>
    );
}
 
export default About;