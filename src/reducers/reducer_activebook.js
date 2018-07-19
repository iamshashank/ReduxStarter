//state argumet is not the app state but the state for which
//this reducer is responsble for
export default function(state = null,action){
	switch(action.type){
		case 'BOOK_SELECTED':
		return action.payload;
	}
	//base case where we dont care about the action
	return state;
}