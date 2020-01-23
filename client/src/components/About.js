import React from 'react';
import { Row, Col, Jumbotron, ListGroup } from 'react-bootstrap';

const About = () => {
    return (
       <div>
        <Jumbotron>
          <h1>About BubbaTest</h1>
          <p>BubbaTest is a site for practicing math problems. This app was built using Heroku Postgres, React, and Node.</p>
          
          <ListGroup variant="flush"><Row><Col>Project Links:</Col><Col>Other Projects by Jessica Adams:</Col></Row> 
          <Row>
            <Col><ListGroup.Item sz="sm"><a href="https://github.com/bearados/bubba">View this project on github</a></ListGroup.Item></Col>
           
            
            <Col><ListGroup.Item><a href="https://atlascrawler.herokuapp.com">Web Crawler (Group Project)</a></ListGroup.Item></Col>
            
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