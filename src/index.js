import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';


import './index.css';
import App from './App';
import myApp from './reducers';

import registerServiceWorker from './registerServiceWorker';

let store = createStore(myApp);

function render () {
    ReactDOM.render(<App store = {store} />, document.getElementById('root'));
    registerServiceWorker();
}

store.subscribe(render);

render();