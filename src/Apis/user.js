import util from '@/util';

const loginUrl = '/user/login';
const logout = '/user/logout';

export function foxLogin(data) {
    return util.request({
        url: loginUrl,
        method: 'POST',
        data
    });
}

export function foxLogout(data) {
    return util.request({
        url: logout,
        method: 'POST',
        data
    });
}