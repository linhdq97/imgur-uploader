import Qs from 'qs'
import api from '@/api/imgur'
import router from '@/router'

const state = {
  token: window.localStorage.getItem('imgur_token')
}

const getters = {
  isLoggedIn: state => !!state.token
}

const actions = {
  login: () => {
    api.login()
  },
  finalizeLogin: ({ commit }, hash) => {
    const query = Qs.parse(hash.replace('#', ''))
    commit('setToken', query.access_token)
    window.localStorage.setItem('imgur_token', query.access_token)
    router.push({ name: 'Home' })
  },
  logout: ({ commit }) => {
    commit('setToken', null)
    window.localStorage.removeItem('imgur_token')
    router.push({ name: 'Home' })
  }
}

const mutations = {
  setToken: (state, token) => {
    state.token = token
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
