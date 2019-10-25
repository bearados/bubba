import React, {Component} from 'react';

import { Tabs, Tab } from 'react-bootstrap';
import QuizA from './QuizA'

class Test extends Component {
    render(){
        return(
        <Tabs>
            <Tab eventKey="add" title="Addition Test">
                <h2>Try these 20 addition questions!</h2>
                <QuizA/>
            </Tab>
            <Tab eventKey="sub" title="Subtraction Test">
                <h2>Try these 20 subtraction problems!</h2>
            </Tab>
        </Tabs>
        );
    }

}

export default Test;