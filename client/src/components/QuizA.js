import React, {Component} from 'react';
import { Button, Row, Col, Container, Form, Jumbotron, Table } from 'react-bootstrap';

import PostScore from './PostScore'
var i = 0;
var ans = [0];
var sums = [15];
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
        a[j] = <Container  md="auto">{j+1}. {an} + {bn} = </Container>;
        var sum = an + bn;
        sums[j] = sum;
    }
    return a;
}
function arrayFill(num){
    var jay = 0;
    if(num == 1){
        for(jay = 0; jay < 15; jay++){
        ans.pop();
        }
    }
    for(jay = 0; jay < 15; jay++){
        ans.push(0);
    }
    return ans;
}

function addAns(curAns, AnsArray, pos){
    AnsArray[pos] = curAns;
    return AnsArray;
}

function clearRes(resArr){
    var i = 0;
    var empty = [];
    for(i = 0; i < 15; i++){
        resArr.pop();
    }
    return empty;
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

function returnRes(AnsArray, ResArray, plist){
    var oki = 0;
    for(oki = 0; oki < 15; oki++){
        if(AnsArray[oki] == sums[oki]){
            ResArray.push(<tr><td>{plist[oki]}</td><td style={{ backgroundColor :"mediumaquamarine"}} >{AnsArray[oki]}</td><td>{sums[oki]}</td></tr>);
        }
        else{
            ResArray.push(<tr ><td>{plist[oki]}</td><td style={{ backgroundColor :"salmon"}}>{AnsArray[oki]}</td><td>{sums[oki]}</td></tr>);
        }
    }
    return ResArray;
}

class QuizA extends Component {
    constructor(props) {
        super(props);
        this.state = { Answer: arrayFill(0),
        probList : problemGener(),
        score: 0,
        showScore: false,
        resultlist: []
    };
    }
    
    handleChange(event) {
        this.setState({Answer: addAns(event.target.value, this.state.Answer, event.target.name)});
    } 
    getScore(event){
        this.setState({
            showScore: true,
            score: calcScore(this.state.Answer, this.state.probList), 
            resultlist: returnRes(this.state.Answer, this.state.resultlist, this.state.probList)
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

    newQuiz(event){
        this.setState({
            Answer: arrayFill(1),
            probList : problemGener(),
            score: 0,
            showScore: false,
            resultlist: clearRes(this.state.resultlist)
        })
    }
    
    render(){
        return(
            
           <Jumbotron>
               {!this.state.showScore?
               <Form >
                <Row className="justify-content-md-center">
                    <Col>{this.state.probList[0]}</Col><Col sm={true}><Form.Control size="sm" type="number" name = {0} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    <Col>{this.state.probList[1]}</Col><Col sm={true}><Form.Control size="sm" type="number" name = {1} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    <Col>{this.state.probList[2]}</Col><Col sm={true}><Form.Control size="sm" type="number" name = {2} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                </Row>
                <br/>
                <Row className="justify-content-md-center">
                    <Col>{this.state.probList[3]}</Col><Col sm={true}><Form.Control size="sm" type="number" name = {3} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    <Col>{this.state.probList[4]}</Col><Col sm={true}><Form.Control size="sm" type="number" name = {4} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    <Col>{this.state.probList[5]}</Col><Col sm={true}><Form.Control size="sm" type="number" name = {5} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                </Row>               
                <br/>
                <Row className="justify-content-md-center">
                    <Col>{this.state.probList[6]}</Col><Col sm={true}><Form.Control size="sm" type="number" name = {6} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    <Col>{this.state.probList[7]}</Col><Col sm={true}><Form.Control size="sm" type="number" name = {7} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    <Col>{this.state.probList[8]}</Col><Col sm={true}><Form.Control size="sm" type="number" name = {8} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                </Row>               
                <br/>
                <Row className="justify-content-md-center">
                    <Col>{this.state.probList[9]}</Col><Col sm={true}><Form.Control size="sm" type="number" name = {9} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    <Col>{this.state.probList[10]}</Col><Col sm={true}><Form.Control size="sm" type="number" name = {10} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    <Col>{this.state.probList[11]}</Col><Col sm={true}><Form.Control size="sm" type="number" name = {11} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                </Row>               
                <br/>
                <Row className="justify-content-md-center">
                    <Col>{this.state.probList[12]}</Col><Col sm={true}><Form.Control size="sm" type="number" name = {12} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    <Col>{this.state.probList[13]}</Col><Col sm={true}><Form.Control size="sm" type="number" name = {13} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                    <Col>{this.state.probList[14]}</Col><Col sm={true}><Form.Control size="sm" type="number" name = {14} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
                </Row>               
                <br/>
                <Row className="justify-content-md-center"><Button type="submit" onClick= {this.getScore.bind(this)} variant="primary">Submit Answers</Button></Row>
                </Form>:
                <container>
                    <Container>{this.getMsg()}</Container>
                    <br/>
                    <Table size="sm" hover style={{ backgroundColor :"white"}}>
                    <thead>
                        <tr>
                            <th>Problem</th>
                            <th>Your Answer</th>
                            <th>Correct Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.resultlist.map(p2=> (p2))}
                        
                    </tbody>
                    </Table>
                    
                    <Button type="button" onClick={this.newQuiz.bind(this)}  variant="info">Take Another Addition Quiz</Button>
                </container>
               }
           </Jumbotron>
        );
    }
}

export default QuizA;