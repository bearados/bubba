import React, {Component} from 'react';
import { Container} from 'react-bootstrap';
class PostScore extends Component {
    constructor(props) {
        super(props);
        this.state ={
            score: this.props.score,
            test: this.props.test
        };
      }

      callBackendAPI(){
        console.log(this.state.score);
       fetch('/putscores',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
            
        }).then(res => res.text())
        .then(text => console.log(text));
        };
    
    render(){
        return(
        <Container>{this.callBackendAPI()}</Container>
        
        );
    }
}
    export default PostScore;