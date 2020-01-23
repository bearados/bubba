import React, {Component} from 'react';
import { Container, Button, Jumbotron, Table} from 'react-bootstrap';

var i =0;
var scoray = [];
class Scores extends Component {
   constructor(props) {
      super(props);
      this.state ={
          ID: "1",
          graphdata: {
            nodes: [{ id: "1" }, { id: "2" }],
            links: [{ source: "1", target: "2" }],
          }
          
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
      };
      i =0;
      
    render(){  
      
   
    return (
       <div>
         <h1>View Your Past Scores</h1>
         <Jumbotron>
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
              {this.state.graphdata.nodes.map(el=> (
                <tr>
                  <td>{i}</td>
                  <td>{el.test}</td>
                  <td>{el.today}</td>
                  <td>{el.qtime}</td>
                  <td>{el.size}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
          
          </Jumbotron>
       </div>
    );
    }
}
 
export default Scores;