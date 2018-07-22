import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../pages/home';
import Login from '../pages/login';
import Signup from '../pages/signup';
import NewIssueRecord from '../pages/newIssueRecord';
import QualityIssueList from '../pages/qualityIssueList';
import PartNumber from '../components/part';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    return (
      <Switch>
        {!this.store.getState().isLoggedIn ? (
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home {...props} store={this.store} />}
            />

            <Route
              exact
              path="/new-issue-record"
              render={props => <NewIssueRecord {...props} store={this.store} />}
            />

            <Route
              exact
              path="/quality-issue-list"
              render={props => <QualityIssueList {...props} store={this.store} />}
            />

            <Route
              exact
              path="/Part"
              render={props => <PartNumber {...props} store={this.store} />}
            />
          </Switch>
        ) : (
          <div>
            <Redirect to="/login" />

            <Route
              path="/login"
              render={props => <Login {...props} store={this.store} />}
            />
            <Route
              path="/signup"
              render={props => <Signup {...props} store={this.store} />}
            />
          </div>
        )}
      </Switch>
    );
  }
}

export default Routes;
