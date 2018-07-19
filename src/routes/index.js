import React from 'react';
import {
    Route, Switch, Redirect
} from 'react-router-dom';

import Home from '../pages/home';
import Login from '../pages/login';
import Customer from '../pages/customers';



class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    render() {
        return (
            <Switch>
                {this.store.getState().isLoggedIn ?
                    <Switch>
                        <Route path="/quality" render={
                            (props) => <h1>Quality Track</h1>
                        } />

                        <Route exact path="/" render={
                            (props) => <Home {...props}  store={this.store} />
                        } />

                        <Route exact path="/customers" render={
                            (props) => <Customer {...props} store={this.store} />
                        } />

                    </Switch>
                    :
                    <div>
                        <Redirect to="/login" />
                        <Route path="/login" render={
                            (props) => <Login {...props} store={this.store} />
                        } />
                    </div>
                }
            </Switch>
        );
    }
}

export default Routes;