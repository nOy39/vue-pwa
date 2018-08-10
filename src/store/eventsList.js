import {AXIOS} from '../components/http-commons'

export default {
  state: {
    eventsApi: '/v1/events',
    events: '',
    limit: 25
  },
  mutations: {
    setEvents (state, payload) {
      state.events = payload
    },
    setLimit (state, payload) {
      state.limit += payload
    }
  },
  actions: {
    fetchEvents ({commit, getters}, payload) {
      commit('clearError')
      AXIOS.get(getters.getEventsApi +
        '?limit=' + getters.getLimit +
        '&skip=0&fields=location,organization,description_short,ends_at,registration_data' +
        payload)
        .then(response => {
          commit('setEvents', response.data.values)
          commit('setLoadingElements', false)
          commit('setLoading', false)
        })
        .catch(error => {
          commit('setError', error.message)
        })
    },
    setLimit ({commit}, payload) {
      commit('setLimit', payload)
    }
  },
  getters: {
    getEvents (state) {
      return state.events
    },
    getEventsApi (state) {
      return state.eventsApi
    },
    getLimit (state) {
      return state.limit
    }
  }
}
