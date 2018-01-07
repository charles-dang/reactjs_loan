import React, { Component } from 'react';
import {MenuItems, Actions} from './actions/constants.js';

class NavigationBar extends Component {
  constructor(props){
    super(props);
    this.store = this.props.store;
  }

  dispatchMenuItemHandler = (menuItem) =>{
    this.store.dispatch({type:menuItem.type, data: menuItem.data});
  }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" onClick={ () => {this.dispatchMenuItemHandler({type:Actions.SWITCH_VIEW, data:MenuItems.VIEW_HOME})}}>Muon Loan</a>

          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse  float-right" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" onClick={ () => {this.dispatchMenuItemHandler({type:Actions.SWITCH_VIEW, data:MenuItems.VIEW_HOME})}}>Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={ () => {this.dispatchMenuItemHandler({type:Actions.SWITCH_VIEW, data:MenuItems.VIEW_FEATURES})}}>Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={ () => {this.dispatchMenuItemHandler({type:Actions.SWITCH_VIEW, data:MenuItems.VIEW_ABOUT_US})}}>About</a>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
}



export default NavigationBar;