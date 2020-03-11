import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

import user from './modules/user'
import app from './modules/app'
import getters from './getters'

export default new Vuex.Store({
  getters,
  modules: {
    user,
    app
  },
  plugins: [createPersistedState({
    paths: ['user']
  })]
})

