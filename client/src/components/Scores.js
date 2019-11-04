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
      var results = [];
      console.log(this.state.score);
     fetch('/myScores',{
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
          
      }).then(res => {
        res.text();
        return res;
      })
      };
    render(){  
    return (
       <div>
          <h1>View Your Past Scores</h1>
          <Button onClick={this.callBackendAPI()} variant="info">Show Scores</Button>
       </div>
    );
    }
}
 
export default Scores;