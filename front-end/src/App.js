import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/profile" component={Profile}/>  
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;