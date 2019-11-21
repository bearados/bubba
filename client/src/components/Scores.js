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
      console.log("in scores backend func");
      fetch('/myScores',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
          
      }).then(res => {
        res.text();
        console.log(res);
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