import React, {Component} from 'react';
import { Button, Table, Row, Col, Container, Form, Jumbotron } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';
var ans = [0];
var sums = [];
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
    a.push(an);
    b.push(bn);
    
    var sum = an + bn;
    sums.push(sum);
    }
    probs.push(a);
    probs.push(b);
    probs.push(sums);
    return probs;
}
var i = 0;
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

function calcScore(AnsArry, sumArry){
    var kay = 0;
    var sco = 0;
    for(kay = 0; kay < 20; kay++){
        if(AnsArry[kay] == sumArry[2][kay]){
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
    render(){
        return(
        
           <Jumbotron>
               {!this.state.showScore?
               <Form>
                <Row className="justify-content-md-center"> 
                    <Col>
               1. {this.state.probList[0][0]} + {this.state.probList[1][0]} =</Col><Col><Form.Control size="sm" type="number" name = {0} onInput={this.handleChange.bind(this)} value={this.state.Answer[0]} /></Col>
               
               <Col>
               2. {this.state.probList[0][1]} + {this.state.probList[1][1]} = </Col><Col> <Form.Control size="sm" type="number" name = {1} onInput={this.handleChange.bind(this)} value={this.state.Answer[1]} />
               </Col>
               <Col>
               3. {this.state.probList[0][2]} + {this.state.probList[1][2]} =  </Col><Col><Form.Control size="sm" type="number" name = {2} onInput={this.handleChange.bind(this)} value={this.state.Answer[2]} />
               </Col>
               </Row><br/>
               <Row>
                   <Col>
               4. {this.state.probList[0][3]} + {this.state.probList[1][3]} =  </Col><Col><Form.Control size="sm" type="number" name = {3} onInput={this.handleChange.bind(this)} value={this.state.Answer[3]} />
               </Col><Col>5. {this.state.probList[0][4]} + {this.state.probList[1][4]} =  </Col><Col><Form.Control size="sm" type="number" name = {4} onInput={this.handleChange.bind(this)} value={this.state.Answer[4]} />
               </Col><Col>6. {this.state.probList[0][5]} + {this.state.probList[1][5]} =  </Col><Col><Form.Control size="sm" type="number" name = {5} onInput={this.handleChange.bind(this)} value={this.state.Answer[5]} />
               </Col></Row><br/>
               <Row >
               <Col>7. {this.state.probList[0][6]} + {this.state.probList[1][6]} = </Col><Col><Form.Control size="sm" type="number" name = {6} onInput={this.handleChange.bind(this)} value={this.state.Answer[6]} />
              </Col><Col> 8. {this.state.probList[0][7]} + {this.state.probList[1][7]} =  </Col><Col><Form.Control size="sm" type="number" name = {7} onInput={this.handleChange.bind(this)} value={this.state.Answer[7]} />
               </Col><Col>9. {this.state.probList[0][8]} + {this.state.probList[1][8]} = </Col><Col><Form.Control size="sm" type="number" name = {8} onInput={this.handleChange.bind(this)} value={this.state.Answer[8]} />
               </Col></Row><br/><Row >
               <Col>10. {this.state.probList[0][9]} + {this.state.probList[1][9]} =  </Col><Col><Form.Control size="sm" type="number" name = {9} onInput={this.handleChange.bind(this)} value={this.state.Answer[9]} />
               </Col><Col>11. {this.state.probList[0][10]} + {this.state.probList[1][10]} =  </Col><Col><Form.Control size="sm" type="number" name = {10} onInput={this.handleChange.bind(this)} value={this.state.Answer[10]} />
               </Col><Col>12. {this.state.probList[0][11]} + {this.state.probList[1][11]} =  </Col><Col><Form.Control size="sm" type="number" name = {11} onInput={this.handleChange.bind(this)} value={this.state.Answer[11]} />
               </Col></Row><br/><Row >
               <Col>13. {this.state.probList[0][12]} + {this.state.probList[1][12]} =  </Col><Col><Form.Control size="sm" type="number" name = {12} onInput={this.handleChange.bind(this)} value={this.state.Answer[12]} />
               </Col><Col>14. {this.state.probList[0][13]} + {this.state.probList[1][13]} =  </Col><Col><Form.Control size="sm" type="number" name = {13} onInput={this.handleChange.bind(this)} value={this.state.Answer[13]} />
               </Col><Col>15. {this.state.probList[0][14]} + {this.state.probList[1][14]} =  </Col><Col><Form.Control size="sm" type="number" name = {14} onInput={this.handleChange.bind(this)} value={this.state.Answer[14]} />
               </Col>
               </Row><br/>
               <Row >
               <Col>16. {this.state.probList[0][15]} + {this.state.probList[1][15]} =  </Col><Col><Form.Control size="sm" type="number" name = {15} onInput={this.handleChange.bind(this)} value={this.state.Answer[15]} />
               </Col><Col>17. {this.state.probList[0][16]} + {this.state.probList[1][16]} =  </Col><Col><Form.Control size="sm" type="number" name = {16} onInput={this.handleChange.bind(this)} value={this.state.Answer[16]} />
               </Col><Col>18. {this.state.probList[0][17]} + {this.state.probList[1][17]} =  </Col><Col><Form.Control size="sm" type="number" name = {17} onInput={this.handleChange.bind(this)} value={this.state.Answer[17]} />
               </Col>
               </Row><br/><Row>
               <Col>19. {this.state.probList[0][18]} + {this.state.probList[1][18]} =  </Col><Col><Form.Control size="sm" type="number" name = {18} onInput={this.handleChange.bind(this)} value={this.state.Answer[18]} />
               </Col><Col>20. {this.state.probList[0][19]} + {this.state.probList[1][19]} =  </Col><Col><Form.Control size="sm" type="number" name = {19} onInput={this.handleChange.bind(this)} value={this.state.Answer[19]} />
               </Col>   
               </Row>
               <br/>
               <Row className="justify-content-md-center"><Button onClick= {this.getScore.bind(this)} >Submit Answers</Button>
               </Row>
                </Form>
                :
                <h3>Your Score is {this.state.score}/20!</h3>
               }
           </Jumbotron>
        );
    }
}

export default QuizA;