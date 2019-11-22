import React, {Component} from 'react';
import { Container, Button, Jumbotron} from 'react-bootstrap';
/*import { Graph } from "react-d3-graph";
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
          data: null
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
         <Jumbotron>
          <h1>View Your Past Scores</h1>
          
          </Jumbotron>
       </div>
    );
    }
}
 
export default Scores;