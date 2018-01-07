
import {Actions, MenuItems} from '../actions/constants.js';

var initialState = {
	view: MenuItems.HOME_VIEW
}

export default (state=initialState, action) => {
	
	switch (action.type){
	//switch menu view
	case Actions.SWITCH_VIEW:
	  return Object.assign({}, state, {
	  	view: action.data
	  });
	default:
		return state;
	}
	
}