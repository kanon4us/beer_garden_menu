import axios from 'axios';
import { FETCH_USERS } from './types';

export function fetchUsers() {
	const request = axios.get('https://www.beermenus.com/menu_widgets/26209.json');

	instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

	return {
		type: FETCH_USERS,
		payload: request
	};
}


// const request = axios.get({
// 	  baseURL: 'https://www.beermenus.com/menu_widgets/26209.json',
// 	  headers: {'Access-Control-Allow-Origin': '*'}
// 	});