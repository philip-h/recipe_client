import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    username: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },

    setUsername (state, username) {
      state.username = username
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUsername ({commit}, username) {
      commit('setUsername', username)
    }
  },
  modules: {
  }
})
