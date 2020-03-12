import routers from "@/router/routers";
import { getMenuByRouters, getBreadCrumbList, getHomeRoute } from "@/util/tools";

import config from '@/config/config'

export default {
    state: {
        breadCrumbList: [],
        homeRoute: {}
    },
    getters: {
        menuList: (state, getters, rootState) => getMenuByRouters(routers)
    },
    mutations: {
        setBreadCrumb (state, route) {
            state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
          },
          setHomeRoute (state, routes) {
            state.homeRoute = getHomeRoute(routes, config.homeName)
          }
    }

}