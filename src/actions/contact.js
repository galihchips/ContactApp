import axios from 'axios';
export function fetchContact(){
	return {
		type: 'FETCH_CONTACT',
		payload : axios.get('http://rest.learncode.academy/api/galih/listcontact')
	};
}