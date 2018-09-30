import axios from 'axios';
export function fetchGroups(){
	return {
		type: 'FETCH_GROUP',
		payload : axios.get('http://192.168.0.17:5000/api/groups/')
	};
}

export function getGroup(id){
	return {
		type : 'GET_GROUP',
		payload : axios.get(`http://192.168.0.17:5000/api/groups/${id}`)
	}
}

