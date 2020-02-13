import { Base64 } from 'js-base64';
import {
    SETUSERINFO,
    SETTOKEN,
    SETREMPWD
} from '../mutation-types'

import { login, logOut } from '@/Apis/access' //登录接口

export default {
    state: {
        userInfo: null,//用户信息
        rememberPwd: false,
        token: null
    },

    mutations: {
        [SETUSERINFO](state, userInfo) {
            state.userInfo = userInfo;
        },
        [SETTOKEN](state, token) {
            state.token = token;
        },
        [SETREMPWD](state, isChecked) {
            state.rememberPwd = isChecked;
        }
    },

    actions: {
        Login({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                login({
                    login: userInfo.userName,
                    passwd: userInfo.password
                }).then((res) => {
                    const data = res.data;
                    const info = {
                        name: userInfo.userName,
                        pwd: Base64.encode(userInfo.password)
                    };
                    commit(SETUSERINFO, info);
                    commit(SETTOKEN, Base64.encode(data.result.token));
                    resolve(data);
                }).catch((err) => {
                    reject(err);
                })
            })
        },
        Logout(context) {
            return new Promise((resolve, reject) => {
                logOut().then(() => {
                    context.commit(SETTOKEN, null);
                    resolve();
                }).catch((err) => {
                    reject(err)
                })
            })
        }
    }

}