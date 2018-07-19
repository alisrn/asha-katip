import React, { Component } from 'react';
import Layout from './layout';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index';

class App extends Component {
  constructor(props, theme) {
    super(props);
    this.store = this.props.store;
  }
  componentWillMount() {
    fetch("https://localhost:5001/api/resource", {
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(parsedJSON => {
        console.log(parsedJSON);
        this.setState({
          resourceList: parsedJSON
        })
      })
  }




  render() {
    return (
      <BrowserRouter>
        {
          this.store.getState().isLoggedIn ?
            <Layout resourceList={this.state.resourceList}>
              <Routes  store={this.store} />
            </Layout>
            :
            <div style={{
              display: "flex",
              flex: 1,
              width: "100%",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Routes store={this.store} />
            </div>
        }

      </BrowserRouter>
    );
  }
}

export default App
