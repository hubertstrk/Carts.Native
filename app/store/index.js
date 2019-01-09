import Vue from 'nativescript-vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    groceries: [],
    matters: [],
    currentGrocery: '',
    currentMatter: ''
  },
  mutations: {
    setGroceries (state, items) {
      state.groceries = items
    },
    addGrocery (state, item) {
      state.groceries.push(item)
    },
    removeGrocery (state, id) {
      const index = state.groceries.findIndex(x => x.id === id)
      state.groceries.splice(index, 1)
    },
    setCurrentGrocery (state, text) {
      state.currentGrocery = text
    },
    setMatters (state, items) {
      state.matters = items
    },
    addMatter (state, item) {
      state.matters.push(item)
    },
    removeMatter (state, id) {
      const index = state.matters.findIndex(x => x.id === id)
      state.matters.splice(index, 1)
    },
    setCurrentMatter (state, text) {
      state.currentMatter = text
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
        {id: 6, name: 'Zucker'},
        {id: 7, name: 'Kartoffeln'},
        {id: 8, name: 'Kartoffelkloßteig'}
      ]
      commit('setGroceries', items)
    },
    loadMatters ({commit}) {
      const items = [
        {id: 13, name: 'Elektriker anrufen'},
        {id: 15, name: 'Mieter rauswerfen'},
        {id: 16, name: 'Haus bauen'}
      ]
      commit('setMatters', items)
    },
    addCurrentGrocery ({state, commit}) {
      const grocery = {
        name: state.currentGrocery,
        id: Math.floor((Math.random() * 65000) + 1)
      }
      if (grocery.name || grocery.name !== '') {
        commit('addGrocery', grocery)
      }
    },
    addCurrentMatter ({state, commit}) {
      const matter = {
        name: state.currentMatter,
        id: Math.floor((Math.random() * 65000) + 1)
      }
      if (matter.name || matter.name !== '') {
        commit('addMatter', matter)
      }
    },
    removeGrocery ({commit}, id) {
      commit('removeGrocery', id)
    },
    removeMatter ({commit}, id) {
      commit('removeMatter', id)
    }
  }
})

Vue.prototype.$store = store;