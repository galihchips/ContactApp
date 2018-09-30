const initialState = {

	fetching : false,
	fetched : false,
	error : null,
	contacts : [],
	contact : {}
};

const datacontacts = function(state = initialState, action){
	switch(action.type) {
		case 'FETCH_CONTACT_PENDING' :
			return {...state, fetching: true};
		break;
		case 'FETCH_CONTACT_FULFILLED' :
			return {...state, fetching : false, fetched: true, contacts:action.payload.data};
		break;
		case 'FETCH_CONTACT_REJECTED' :
			return {...state, error: action.payload};
		break;
		case 'GET_CONTACT_PENDING' :
			return {...state, fetching: true};
		break;
		case 'GET_CONTACT_FULFILLED' :
			return {...state, fetching : false, fetched: true, contact:action.payload.data};
		break;
		case 'GET_CONTACT_REJECTED' :
			return {...state, error: action.payload};
		break;
		case 'CREATE_CONTACT_PENDING' :
			return {...state, fetching: true};
		break;
		case 'CREATE_CONTACT_FULFILLED' :
			return {...state, fetching : false, fetched: true, contacts :[...state.contacts, action.payload.data ]};
		break;
		case 'CREATE_CONTACT_REJECTED' :
			return {...state, error: action.payload};
		break;
		case 'UPDATE_CONTACT_PENDING' :
			return {...state, fetching: true};
		break;
		case 'UPDATE_CONTACT_FULFILLED' :
		 const updated = state.contacts.map(contact => {
	        if (contact._id == action.payload.data._id) {
	          return action.payload.data;
	        }
	        return contact;
	      })
	     return {...state, fetching : false, fetched: true, contact : action.payload.data, contacts : updated };
		break;
		case 'UPDATE_CONTACT_REJECTED' :
			return {...state, error: action.payload};
		break;
		case 'DELETE_CONTACT_PENDING' :
			return {...state, fetching: true};
		break;
		case 'DELETE_CONTACT_FULFILLED' :
			const deleted = state.contacts.filter(contact => contact._id != action.payload.data._id)

	      return {...state, fetching : false, fetched: true, contacts: deleted };
		break;
		case 'DELETE_CONTACT_REJECTED' :
			return {...state, error: action.payload};
		break;

		default :
	}

	return state;
}
export default datacontacts;