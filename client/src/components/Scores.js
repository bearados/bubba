import React, {Component} from 'react';
import { Container, Button, Jumbotron} from 'react-bootstrap';

import { Graph } from "react-d3-graph";

/*var data = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
  links: [{ source: "Harry", target: "Sally" }, { source: "Harry", target: "Alice" }],
};*/
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
      color: "lightgreen",
      size: 120,
      highlightStrokeColor: "blue",
  },
  link: {
      highlightColor: "lightblue",
  },
};

class Scores extends Component {
   constructor(props) {
      super(props);
      this.state ={
          ID: "1",
          graphdata: {
            nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
            links: [{ source: "Harry", target: "Sally" }, { source: "Harry", target: "Alice" }],
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
          
        }).then(response=>response.text()).then(data=>console.log(data));    
      };


    render(){  
    return (
       <div>
         <h1>View Your Past Scores</h1>
         <Jumbotron>
          <div>
          <Graph
            id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
            data={this.state.graphdata}
            config={myConfig}
            
          />
          </div>
          
          </Jumbotron>
       </div>
    );
    }
}
 
export default Scores;