import React, {Component} from 'react';

import { Tabs, Tab } from 'react-bootstrap';
import QuizA from './QuizA'
import QuizS from './QuizS'

class Test extends Component {
    render(){
        return(
        <Tabs>
            <Tab eventKey="add" title="Addition Quiz">
                <h1>Addition Quiz</h1>
                <QuizA/>
            </Tab>
            <Tab eventKey="sub" title="Subtraction Quiz">
                <h1>Subtraction Quiz</h1>
                <QuizS/>
            </Tab>
        </Tabs>
        );
    }

}

export default Test;