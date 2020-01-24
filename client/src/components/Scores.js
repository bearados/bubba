import React, {Component} from 'react';
import { Container, Button, Jumbotron, Table} from 'react-bootstrap';

var i =0;
var scoray = [];
class Scores extends Component {
   constructor(props) {
      super(props);
      this.state ={
          ID: "1",
          graphdata: []   
      };
    }

    callBackendAPI(){
      console.log("in scores backend func");
      
      };
      
      componentDidMount() {

      fetch('/myScores',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
          
        }).then(response=>response.json()).then(data=>this.setState({graphdata: data}));
        console.dir(this.state.graphdata);    
      };
    render(){  
    return (
       <div>
         <h1>View Your Past Scores</h1>
         
          <div>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Quiz</th>
              <th>Date</th>
              <th>Time</th>
              <th>Score</th>
            </tr>
          </thead>
            <tbody>
              
              {this.state.graphdata.map(el=> (
                <tr>
                  <td>{el.id}</td>
                  <td>{el.test}</td>
                  <td>{el.date}</td>
                  <td>{el.time}</td>
                  <td>{el.score}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
       </div>
    );
    }
}
 
export default Scores;