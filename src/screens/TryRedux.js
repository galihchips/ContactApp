import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware';

const initialState = {

	fetching : false,
	fetched : false,
	error : null,
	contactList : []

};
const reducer = function(state = initialState, action){

	switch(action.type) {
		case 'FETCH_CONTACT_PENDING' :
			return {...state, fetching: true};
		break;
		case 'FETCH_CONTACT_FULFILLED' :
			return {...state, fetching : false, fetched: true, contactList:action.payload};
		break;
		case 'FETCH_CONTACT_REJECTED' :
			return {...state, error: action.payload};
		break;
		default :
	}


	return state;
}

const middleware = applyMiddleware(logger, thunk, promise());

const store = createStore(reducer, middleware);

store.subscribe(() => {
	console.log('current state = ', store.getState());
})

store.dispatch({
	type: 'FETCH_CONTACT',
	payload : axios.get('http://rest.learncode.academy/api/galih/listcontact')
})


// store.dispatch((dispatch) => {
// 	dispatch({type : 'FETCH_CONTACT_PENDING'});
// 	axios.get('http://rest.learncode.academy/api/galih/listcontact')
// 		.then((response) => {
// 			dispatch({type : 'FETCH_CONTACT_FULFILLED', payload: response.data})
// 		})
// 			.catch((err) => {
// 				dispatch({type : 'FETCH_CONTACT_REJECTED', payload : err})
// 			})
// });