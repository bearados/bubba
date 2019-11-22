import React, {Component} from 'react';
import { Container, Button, Jumbotron} from 'react-bootstrap';

import { Graph } from "react-d3-graph";

/*const data = {
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
/*
const onClickGraph = function() {
  window.alert(`Clicked the graph background`);
};

const onClickNode = function(nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onDoubleClickNode = function(nodeId) {
  window.alert(`Double clicked node ${nodeId}`);
};

const onRightClickNode = function(event, nodeId) {
  window.alert(`Right clicked node ${nodeId}`);
};

const onMouseOverNode = function(nodeId) {
  window.alert(`Mouse over node ${nodeId}`);
};

const onMouseOutNode = function(nodeId) {
  window.alert(`Mouse out node ${nodeId}`);
};

const onClickLink = function(source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

const onRightClickLink = function(event, source, target) {
  window.alert(`Right clicked link between ${source} and ${target}`);
};

const onMouseOverLink = function(source, target) {
  window.alert(`Mouse over in link between ${source} and ${target}`);
};

const onMouseOutLink = function(source, target) {
  window.alert(`Mouse out link between ${source} and ${target}`);
};

const onNodePositionChange = function(nodeId, x, y) {
  window.alert(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
};*/

class Scores extends Component {
   constructor(props) {
      super(props);
      this.state ={
          ID: "1",
          data: {
            nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
            links: [{ source: "Harry", target: "Sally" }, { source: "Harry", target: "Alice" }]
          }
      };
    }

    callBackendAPI(){
      console.log("in scores backend func");
      fetch('/myScores',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
          
      }).then(res => {
        this.setState({data: res});
        res.text();
        console.log(res);
       
      })
      };
      
      
    render(){  
    return (
       <div>
         <h1>View Your Past Scores</h1>
         <Jumbotron>
          {this.callBackendAPI()}
          <div>
          <Graph
            id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
            data={this.state.data}
            config={myConfig}
            
          />
          </div>
          
          </Jumbotron>
       </div>
    );
    }
}
 
export default Scores;