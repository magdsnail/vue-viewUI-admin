import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

import user from './modules/user'
import getters from './getters'

export default new Vuex.Store({
  getters,
  modules: {
    user
  },
  plugins: [createPersistedState({
    paths: ['user']
  })]
})

