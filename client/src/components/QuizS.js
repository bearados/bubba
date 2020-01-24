import React, {Component} from 'react';
import { Button, Row, Col, Container, Form, Jumbotron } from 'react-bootstrap';
import PostScore from './PostScore'
var ans = [0];
var difs = [];
var a =[];
function random(){
     return Math.floor(Math.random() * 100);
}

function problemGener(){
    var j = 0;
    for(j= 0; j< 15; j++){
    var an = random();
    var bn = random();
    while(bn > an){
        bn = random();
    }
    a.push(<Col>{j+1}. {an} - {bn} = </Col>);
    
    
    var dif = an - bn;
    difs.push(dif);
    }
    return a;
}

function arrayFill(){
    var jay = 0;
    for(jay = 0; jay < 15; jay++){
        ans.push(0);
    }
    return ans;
}

function addAns(curAns, AnsArray, pos){
    AnsArray[pos] = curAns;
    return AnsArray;
}

function calcScore(AnsArry){
    var kay = 0;
    var sco = 0;
    for(kay = 0; kay < 15; kay++){
        if(AnsArry[kay] == difs[kay]){
            sco++;
        }
    }
    return sco;
}

class QuizS extends Component {
    constructor(props) {
        super(props);
        this.state = { Answer: arrayFill(),
        probList : problemGener(),
        score: 0,
        showScore: false};
      }
      
      handleChange(event) {
        this.setState({Answer: addAns(event.target.value, this.state.Answer, event.target.name)});
      } 
      
    getScore(event){
        
        this.setState({showScore: true,
            score: calcScore(this.state.Answer, this.state.probList)
        });
    }

    getMsg(){
        if(this.state.showScore){
            if(this.state.score < 10){
                return (<Container><Row className="justify-content-md-center"><h3>Your Score is {this.state.score}/15!</h3></Row><Row className="justify-content-md-center"><h5>You need more practice!</h5></Row>
                <PostScore score={this.state.score} test="subtraction"></PostScore></Container>);
            }
            else{
                return(<Container><Row className="justify-content-md-center"><h3>Your Score is {this.state.score}/15!</h3></Row><Row className="justify-content-md-center"><h5>Great Job!</h5></Row>
                <PostScore score={this.state.score} test="subtraction"></PostScore></Container>);
            }
        }
        else{
            return(<Container></Container>);
        }
    }
    render(){
        return(
        
           <Jumbotron>
               <Form>
                <Row className="justify-content-md-center">
                    {this.state.probList[0]}<Col sm={true}><Form.Control size="sm" type="number" name = {0} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    {this.state.probList[1]}<Col sm={true}><Form.Control size="sm" type="number" name = {1} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    {this.state.probList[2]}<Col sm={true}><Form.Control size="sm" type="number" name = {2} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                </Row>
                <br/>
                <Row className="justify-content-md-center">
                    {this.state.probList[3]}<Col sm={true}><Form.Control size="sm" type="number" name = {3} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    {this.state.probList[4]}<Col sm={true}><Form.Control size="sm" type="number" name = {4} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    {this.state.probList[5]}<Col sm={true}><Form.Control size="sm" type="number" name = {5} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                </Row>               
                <br/>
                <Row className="justify-content-md-center">
                    {this.state.probList[6]}<Col sm={true}><Form.Control size="sm" type="number" name = {6} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    {this.state.probList[7]}<Col sm={true}><Form.Control size="sm" type="number" name = {7} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    {this.state.probList[8]}<Col sm={true}><Form.Control size="sm" type="number" name = {8} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                </Row>               
                <br/>
                <Row className="justify-content-md-center">
                    {this.state.probList[9]}<Col sm={true}><Form.Control size="sm" type="number" name = {9} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    {this.state.probList[10]}<Col sm={true}><Form.Control size="sm" type="number" name = {10} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    {this.state.probList[11]}<Col sm={true}><Form.Control size="sm" type="number" name = {11} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                </Row>               
                <br/>
                <Row className="justify-content-md-center">
                    {this.state.probList[12]}<Col sm={true}><Form.Control size="sm" type="number" name = {12} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    {this.state.probList[13]}<Col sm={true}><Form.Control size="sm" type="number" name = {13} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    {this.state.probList[14]}<Col sm={true}><Form.Control size="sm" type="number" name = {14} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                </Row>               
                <br/>
                <Row className="justify-content-md-center"><Button onClick= {this.getScore.bind(this)} variant="primary">Submit Answers</Button></Row>
                </Form>
                <br/> 
                <Container>{this.getMsg()}</Container>
           </Jumbotron>
        );
    }
}

export default QuizS;