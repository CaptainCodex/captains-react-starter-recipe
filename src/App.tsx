import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ReactCSSTransitionGroup } from 'react-addons-css-transition-group';
import { Home } from './pages/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
