import Vue from 'nativescript-vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    groceries: [],
    matters: [],
  },
  mutations: {
    setGroceries (state, items) {
      state.groceries = items
    },
    addGrocery (state, item) {
      state.groceries.push(item)
    },
    removeGrocery (state, item) {
      const index = state.groceries.findIndex(x => x.id === item.id)
      state.groceries.splice(index, 1)
    },
    setMatters (state, items) {
      state.matters = items
    },
    addMatter (state, item) {
      state.matters.push(item)
    },
    removeMatter (state, item) {
      const index = state.matters.findIndex(x => x.id === item.id)
      state.matters.splice(index, 1)
    }
  },
  actions: {
    load ({dispatch}) {
      return Promise.all([
        dispatch('loadGroceries'), 
        dispatch('loadMatters')
      ])
    },
    loadGroceries ({commit}) {
      const items = [
        {id: 1, name: 'Ketschkups'},
        {id: 2, name: 'Banane'},
        {id: 3, name: 'Milch'},
        {id: 4, name: 'Kaba'},
        {id: 5, name: 'Brot'},
        {id: 6, name: 'Zucker'}
      ]
      commit('setGroceries', items)
    },
    loadMatters ({commit}) {
      const items = [
        {id: 3, name: 'Elektriker anrufen'},
        {id: 5, name: 'Mieter rauswerfen'},
        {id: 6, name: 'Haus bauen'},
        {id: 7, name: 'Körper entschlacken'},
        {id: 7, name: 'Papa Auto saugen'}
      ]
      commit('setMatters', items)
    }
  }
})

Vue.prototype.$store = store;