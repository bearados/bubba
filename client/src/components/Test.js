import React, {Component} from 'react';
 
import { Tabs } from 'react-bootstrap';

class Test extends Component {
    render(){
        <Tabs>
            <Tab eventKey="add" title="Addition Test">
                <h2>Try these 20 addition questions!</h2>
            </Tab>
            <Tab eventKey="sub" title="Subtraction Test">
                <h2>Try these 20 subtraction problems!</h2>
            </Tab>
        </Tabs>
    }

}

export default Test;