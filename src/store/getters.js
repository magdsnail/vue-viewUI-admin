import { Base64 } from 'js-base64';

export default {
    userInfo(state){
        const userInfo = state.user.userInfo;
        if(userInfo) {
            return {
                name: userInfo.name,
                pwd: Base64.decode(userInfo.pwd)
            }
        } else {
            return userInfo;
        }
    },
    token: state => state.user.token ? Base64.decode(state.user.token) : state.user.token,
    breadCrumbList: state => state.app.breadCrumbList
}