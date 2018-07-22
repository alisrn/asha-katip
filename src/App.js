import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout";

import Routes from "./routes/index";

class App extends Component {
  constructor(props, theme) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    return (
      <BrowserRouter>
        {!this.store.getState().isLoggedIn ? (
          <Layout store={this.store}>
            <Routes store={this.store} />
          </Layout>
        ) : (
          <div
            style={{
              display: "flex",
              flex: 1,
              width: "100%",
              height: "100%",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Routes store={this.store} />
          </div>
        )}
      </BrowserRouter>
    );
  }
}

export default App;
