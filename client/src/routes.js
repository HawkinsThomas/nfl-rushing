import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';


// Pages
import Home from 'pages/home';
import store from 'store';


const Routes = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
