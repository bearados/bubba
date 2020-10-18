import React from 'react';
import { Row, Col, Jumbotron, ListGroup } from 'react-bootstrap';

const About = () => {
    return (
       <div>
        <Jumbotron>
          <h1>About BubbaTest</h1>
          <p>BubbaTest is a site for practicing math problems. This app was built using Heroku Postgres, React, and Node.</p>
          
          <Row><Col>Project Links:</Col><Col>Other Projects by Jessica Adams:</Col></Row> 
          <Row>
          <a href="https://github.com/bearados/bubba">View this project on github</a>  
          </Row>
            
            <br/>
            <p>Author: Jessica Adams <br/>
            <a href="https://www.linkedin.com/in/jessica-adams-36a98762/">Find me on linkedin!</a></p>
        </Jumbotron>
       </div>
    );
}
 
export default About;