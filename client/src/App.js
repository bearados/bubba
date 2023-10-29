import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About'; 
import Home from './components/Home';
import Scores from './components/Scores';
import Error from './components/Error';
import Navigation from './components/Navigation';
import './App.css';
import Registration from './components/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/registration" component={Registration}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
