import React, {Component} from 'react';
import { Button, Image, Row, Col, Container, Form, Jumbotron } from 'react-bootstrap';
import jw from '../jw.png';
import jw2 from '../jw2.png';
var ans = [0];
var difs = [];
var a =[];
var b=[];
var probs = [];
function random(){
     return Math.floor(Math.random() * 100);
}

function problemGener(){
    var j = 0;
    for(j= 0; j< 20; j++){
    var an = random();
    var bn = random();
    while(bn > an){
        bn = random();
    }
    a.push(an);
    b.push(bn);
    
    var dif = an - bn;
    difs.push(dif);
    }
    probs.push(a);
    probs.push(b);
    probs.push(difs);
    return probs;
}

function arrayFill(){
    var jay = 0;
    for(jay = 0; jay < 20; jay++){
        ans.push(0);
    }
    return ans;
}

function addAns(curAns, AnsArray, pos){
    AnsArray[pos] = curAns;
    return AnsArray;
}

function calcScore(AnsArry, difArry){
    var kay = 0;
    var sco = 0;
    for(kay = 0; kay < 20; kay++){
        if(AnsArry[kay] == difArry[2][kay]){
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
            if(this.state.score < 15){
                return (<Container><h5>You need to work harder on your math, John Wick</h5>
                <Image src={jw2} roundedCircle></Image>
                </Container>);
            }
            else{
                return(<Container><h5>Great Job John Wick!</h5>
                <Image src={jw} roundedCircle></Image></Container>);
            }
        }
        else{
            return(<Container></Container>);
        }
    }
    render(){
        return(
        
           <Jumbotron>
               <Container>
               {!this.state.showScore?
               <Form>
                <Row className="justify-content-md-center"> 
                    <Col>
               1. {this.state.probList[0][0]} - {this.state.probList[1][0]} =</Col><Col><Form.Control size="sm" type="number" name = {0} onChange={this.handleChange.bind(this)} placeholder="0" /></Col>
               
               <Col>
               2. {this.state.probList[0][1]} - {this.state.probList[1][1]} = </Col><Col> <Form.Control size="sm" type="number" name = {1} onChange={this.handleChange.bind(this)} placeholder="0" />
               </Col>
               <Col>
               3. {this.state.probList[0][2]} - {this.state.probList[1][2]} =  </Col><Col><Form.Control size="sm" type="number" name = {2} onChange={this.handleChange.bind(this)} placeholder="0" />
               </Col>
               </Row><br/>
               <Row>
                   <Col>
               4. {this.state.probList[0][3]} - {this.state.probList[1][3]} =  </Col><Col><Form.Control size="sm" type="number" name = {3} onChange={this.handleChange.bind(this)} placeholder="0" />
               </Col><Col>5. {this.state.probList[0][4]} - {this.state.probList[1][4]} =  </Col><Col><Form.Control size="sm" type="number" name = {4} onChange={this.handleChange.bind(this)} placeholder="0" />
               </Col><Col>6. {this.state.probList[0][5]} - {this.state.probList[1][5]} =  </Col><Col><Form.Control size="sm" type="number" name = {5} onChange={this.handleChange.bind(this)} placeholder="0" />
               </Col></Row><br/>
               <Row >
               <Col>7. {this.state.probList[0][6]} - {this.state.probList[1][6]} = </Col><Col><Form.Control size="sm" type="number" name = {6} onChange={this.handleChange.bind(this)} placeholder="0" />
              </Col><Col> 8. {this.state.probList[0][7]} - {this.state.probList[1][7]} =  </Col><Col><Form.Control size="sm" type="number" name = {7} onChange={this.handleChange.bind(this)} placeholder="0" />
               </Col><Col>9. {this.state.probList[0][8]} - {this.state.probList[1][8]} = </Col><Col><Form.Control size="sm" type="number" name = {8} onChange={this.handleChange.bind(this)} placeholder="0" />
               </Col></Row><br/><Row >
               <Col>10. {this.state.probList[0][9]} - {this.state.probList[1][9]} =  </Col><Col><Form.Control size="sm" type="number" name = {9} onChange={this.handleChange.bind(this)} placeholder="0" />
               </Col><Col>11. {this.state.probList[0][10]} - {this.state.probList[1][10]} =  </Col><Col><Form.Control size="sm" type="number" name = {10} onChange={this.handleChange.bind(this)} placeholder="0" />
               </Col><Col>12. {this.state.probList[0][11]} - {this.state.probList[1][11]} =  </Col><Col><Form.Control size="sm" type="number" name = {11} onChange={this.handleChange.bind(this)} placeholder="0" />
               </Col></Row><br/><Row >
               <Col>13. {this.state.probList[0][12]} - {this.state.probList[1][12]} =  </Col><Col><Form.Control size="sm" type="number" name = {12} onChange={this.handleChange.bind(this)} placeholder="0" />
               </Col><Col>14. {this.state.probList[0][13]} - {this.state.probList[1][13]} =  </Col><Col><Form.Control size="sm" type="number" name = {13} onChange={this.handleChange.bind(this)} placeholder="0" />
               </Col><Col>15. {this.state.probList[0][14]} - {this.state.probList[1][14]} =  </Col><Col><Form.Control size="sm" type="number" name = {14} onChange={this.handleChange.bind(this)} placeholder="0" />
               </Col>
               </Row><br/>
               <Row >
               <Col>16. {this.state.probList[0][15]} - {this.state.probList[1][15]} =  </Col><Col><Form.Control size="sm" type="number" name = {15} onChange={this.handleChange.bind(this)} placeholder="0" />
               </Col><Col>17. {this.state.probList[0][16]} - {this.state.probList[1][16]} =  </Col><Col><Form.Control size="sm" type="number" name = {16} onChange={this.handleChange.bind(this)} placeholder="0" />
               </Col><Col>18. {this.state.probList[0][17]} - {this.state.probList[1][17]} =  </Col><Col><Form.Control size="sm" type="number" name = {17} onChange={this.handleChange.bind(this)} placeholder="0" />
               </Col>
               </Row><br/><Row>
               <Col>19. {this.state.probList[0][18]} - {this.state.probList[1][18]} =  </Col><Col><Form.Control size="sm" type="number" name = {18} onChange={this.handleChange.bind(this)} placeholder="0"/>
               </Col><Col>20. {this.state.probList[0][19]} - {this.state.probList[1][19]} =  </Col><Col><Form.Control size="sm" type="number" name = {19} onChange={this.handleChange.bind(this)} placeholder="0"/>
               </Col>   
               </Row>
               <br/>
               <Row className="justify-content-md-center"><Button onClick= {this.getScore.bind(this)} variant="primary">Submit Answers</Button>
               </Row>
                </Form>
                :
                <h3>Your Score is {this.state.score}/20!</h3>
                }
                </Container>
                <Container>{this.getMsg()}</Container>
           </Jumbotron>
        );
    }
}

export default QuizS;