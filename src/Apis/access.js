import util from '@/util';

const URL_LOGIN = '/access/web';
const URL_LOGOUT = '/access/logout';

export function login(data) {
	return util.request.foxPost(URL_LOGIN, data);
}

export function logOut() {
	return util.request.foxPost(URL_LOGOUT);
}