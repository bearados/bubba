import React, {Component} from 'react';
import { Button, Row, Col, Container, Form, Jumbotron } from 'react-bootstrap';

import PostScore from './PostScore'
var i = 0;
var ans = [0];
var sums = [];
var a =[];

var probs = [];
function random(){
     return Math.floor(Math.random() * 100);
}

function problemGener(){
    var j = 0;
    for(j= 0; j< 15; j++){
    var an = random();
    var bn = random();
    a.push(<Col>{j+1}. {an} + {bn} = </Col>);
    var sum = an + bn;
    sums.push(sum);
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
        if(AnsArry[kay] == sums[kay]){
            sco++;
        }
    }
    return sco;
}

class QuizA extends Component {
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
                <PostScore score={this.state.score} test="addition"></PostScore></Container>);
            }
            else{
                return(<Container><Row className="justify-content-md-center"><h3>Your Score is {this.state.score}/15!</h3></Row><Row className="justify-content-md-center"><h5>Great Job!</h5></Row>
                <PostScore score={this.state.score} test="addition"></PostScore></Container>);
            }
        }
        else{
            return(<Container></Container>);
        }
    }
    i =0;
    render(){
        return(
            
           <Jumbotron>
               {this.state.probList.map(co=>(
               <Form>
                <Row className="justify-content-md-center">{co}<Col sm={true}><Form.Control size="sm" type="number" name = {i++} onChange={this.handleChange.bind(this)} placeholder="0" /></Col></Row>                
                <br/>
                </Form>
                ))}
                <br/> 
                <Row className="justify-content-md-center"><Button onClick= {this.getScore.bind(this)} variant="primary">Submit Answers</Button>
               </Row> 
                <Container>{this.getMsg()}</Container>
           </Jumbotron>
        );
    }
}

export default QuizA;