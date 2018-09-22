const initialState = {

	fetching : false,
	fetched : false,
	error : null,
	contactList : [],
	contact : {}

};

const reducer = function(state = initialState, action){
	switch(action.type) {
		case 'FETCH_CONTACT_PENDING' :
			return {...state, fetching: true};
		break;
		case 'FETCH_CONTACT_FULFILLED' :
			return {...state, fetching : false, fetched: true, contactList:action.payload.data};
		break;
		case 'FETCH_CONTACT_REJECTED' :
			return {...state, error: action.payload};
		break;
		default :
	}


	return state;
}

export default reducer;