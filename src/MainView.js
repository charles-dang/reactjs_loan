import React, { Component } from 'react';
import {MenuItems} from './actions/constants.js';

import LoanView from './views/LoanView';
import HomeView from './views/HomeView';
import AboutUsView from './views/AboutUsView';

class MainView extends Component {
	constructor(props){
		super(props);
		this.store = this.props.store;
	}

  	render() {
  		let view = null;
  		console.log (".."+this.store.getState().view);
  		switch (this.store.getState().view){
  			case MenuItems.VIEW_HOME:
  				view = <HomeView/>;
  				break;
  			case MenuItems.VIEW_FEATURES:
  				view = <LoanView/>;
  				break;
  			case MenuItems.VIEW_ABOUT_US:
  				view = <AboutUsView/>;
  				break;
  			default:
  				view = <HomeView/>;
  				break;
  		}
	    return (
	    	<div>
		    	{view}
	    	</div>
	    )
	}
}


export default MainView;