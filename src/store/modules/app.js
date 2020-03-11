import routers from "@/router/routers";
import { getMenuByRouters } from "@/util/tools";

export default {
    state: {
        sidebar: {
            activeIndex: '' // 目前激活的 行
        }
    },
    getters: {
        menuList: (state, getters, rootState) => getMenuByRouters(routers)
    },
    mutations: {

    }

}