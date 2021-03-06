import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      activeType: null,
      itemsPerPage: 5,
      items: {/* [id: number]: Item */},
      users: {/* [id: string]: User */},
      lists: {
        all: [/* number */],
      }
    },
    actions,
    mutations,
    getters
  })
}
