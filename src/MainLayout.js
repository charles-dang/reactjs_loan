import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/bootstrap.min.css';

import NavigationBar from './NavigationBar';
import MainView from './MainView';


class App extends Component {
  constructor(props){
    super(props);
    this.store = this.props.store;
  }
  
  render() {
    return (
      <div>
        <NavigationBar store={this.store}/>
        <MainView store={this.store}/>
      </div>
    );
  }
}

export default App;
