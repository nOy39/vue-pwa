import {AXIOS} from '../components/http-commons'

export default {
  state: {
    collections: '',
    eventApi: '/v1/events',
    currentEvent: ''
  },
  mutations: {
    setCurrentEvent (state, payload) {
      state.currentEvent = payload
    }
  },
  actions: {
    fetchCurrentEvent ({commit, getters}, payload) {
      AXIOS.get(getters.getEventsApi + '/' + payload)
        .then(promise => {
          commit('setCurrentEvent', promise.data)
        })
        .catch(error => {
          commit('setError', error)
          commit('setLoading', false)
        })
    }
  },
  getters: {
    getCurrentEvent (state) {
      return state.currentEvent
    }
  }
}
