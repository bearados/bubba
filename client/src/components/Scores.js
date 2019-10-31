import React, {Component} from 'react';
import { Container, Button} from 'react-bootstrap';


class Scores extends Component {
   constructor(props) {
      super(props);
      this.state ={
          ID: "1"
      };
    }

    callBackendAPI(){
      console.log(this.state.score);
     fetch('/myScores',{
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
          
      }).then(res => res.text())
      .then(text => console.log(text));
      };
    render(){  
    return (
       <div>
          <h1>View Your Past Scores</h1>
          <Button onClick={this.callBackendAPI()}></Button>
       </div>
    );
    }
}
 
export default Scores;