const initialState = {

	fetching : false,
	fetched : false,
	error : null,
	groups : [],
	group : {}
};

const datagroups = function(state = initialState, action){
	switch(action.type) {
		case 'FETCH_GROUP_PENDING' :
			return {...state, fetching: true};
		break;
		case 'FETCH_GROUP_FULFILLED' :
			return {...state, fetching : false, fetched: true, groups:action.payload.data};
		break;
		case 'FETCH_GROUP_REJECTED' :
			return {...state, error: action.payload};
		break;
		case 'GET_GROUP_PENDING' :
			return {...state, fetching: true};
		break;
		case 'GET_GROUP_FULFILLED' :
			return {...state, fetching : false, fetched: true, group:action.payload.data};
		break;
		case 'GET_GROUP_REJECTED' :
			return {...state, error: action.payload};
		break;
		default :
	}

	return state;
}
export default datagroups;