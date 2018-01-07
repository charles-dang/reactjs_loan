import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css'; //https://bootswatch.com/darkly/
import MainLayout from './MainLayout';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';

import myApp from './reducers/index';

var store = createStore(myApp);
//registerServiceWorker();

function render(){
	ReactDOM.render(<MainLayout store={store}/>, document.getElementById('root'));	
}

store.subscribe(render);

render();