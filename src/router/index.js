import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewUI from 'view-design'
import routes from './routers'

Vue.use(VueRouter)
Vue.use(ViewUI)

const router = new VueRouter({
  routes
})

import util from '@/util'

// import store from '@/store'//正式环境

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  if (to.meta && to.meta.title) {
    document.title = `SNAIL-${to.meta.title}`
  } else {
    document.title = `后台管理系统`
  }

  const isLogin = util.storage.get('loginuser') ? true : false;
  //const isLogin = store.getters.token;//正式环境
  if (to.path == '/login') {
    next();
  } else {
    isLogin ? next() : next('/login');
  }
})

router.afterEach(() => {
  ViewUI.LoadingBar.finish()
})

export default router
