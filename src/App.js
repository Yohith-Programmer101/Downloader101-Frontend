import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Files from './Files';
import Youtube from './Youtube';
import Error from './Error';
import './navstyle.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/files'>
            <Files />
          </Route>
          <Route path='/youtube'>
            <Youtube />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
