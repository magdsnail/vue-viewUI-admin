import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewUI from 'view-design'

Vue.use(VueRouter)
Vue.use(ViewUI)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/components/layout/BaseLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Home.vue'),
        meta: {
          index: '1'
        }
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('@/views/service/Types.vue'),
      }
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('@/components/layout/BaseLayout.vue'),
    children: [
      {
        path: 'password',
        component: () => import('@/views/setting/Password.vue'),
        meta: {
          index: '30-1'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/Login.vue')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

import util from '@/util'

router.beforeEach((to, from, next) => {
  if(to.path !== '/login') {
    const isLogin = util.storage.get('loginuser') ? true : false;
    if(isLogin) {
      next();
    } else {
      next('/login');
    }
  }
  ViewUI.LoadingBar.start();
  if (to.meta && to.meta.title) document.title = `FOX-${to.meta.title}`
  next();
})

router.afterEach(() => {
  ViewUI.LoadingBar.finish()
})

export default router
