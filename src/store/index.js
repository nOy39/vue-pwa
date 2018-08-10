import Vue from 'vue'
import Vuex from 'vuex'
import common from './common'
import eventLists from './eventsList'
import event from './event'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common, eventLists, event
  }
})
