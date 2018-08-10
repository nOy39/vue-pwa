export default {
  state: {
    loading: false,
    error: 'null',
    loadingElement: false
  },
  mutations: {
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setLoadingElements (state, payload) {
      state.loadingElement = payload
    }
  },
  actions: {
    setError ({commit}, payload) {
      commit('setError', payload)
    },
    clearError ({commit}) {
      commit('clearError')
    },
    setLoading ({commit}, payload) {
      commit('setLoading', payload)
    },
    setLoadingElements ({commit}, payload) {
      commit('setLoadingElements', payload)
    }
  },
  getters: {
    getLoading (state) {
      return state.loading
    },
    getErrors (state) {
      return state.error
    },
    getLoadingElement (state) {
      return state.loadingElement
    }
  }
}
