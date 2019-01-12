const axios = require('axios')

import Vue from 'nativescript-vue'
import Vuex from 'vuex'

import sensitive from '../sensitive'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    groceries: [],
    matters: [],
    currentGrocery: '',
    currentMatter: '',
    selectedPage: 0
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
    },
    setSelectedPage (state, index) {
      state.selectedPage = index
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
      return axios.get(`${sensitive.server}/groceries`, {responseType: 'json'})
      .then((data) => {
        // console.info(`loaded groceries: ${data.data}`)
        commit('setGroceries', data.data)
      })
    },
    loadMatters ({commit}) {
      return axios.get(`${sensitive.server}/matters`, {responseType: 'json'})
      .then((data) => {
        // console.info(`loaded matters: ${data.data}`)
        commit('setMatters', data.data)
      })
    },
    addCurrentGrocery ({state, dispatch}) {
      if (state.currentGrocery || state.currentGrocery !== '') {
        return axios.post(`${sensitive.server}/groceries`, {name: state.currentGrocery})
        .then(() => {
          dispatch('loadGroceries')
        })
      }
    },
    addCurrentMatter ({state, dispatch}) {
      if (state.currentMatter || state.currentMatter !== '') {
        return axios.post(`${sensitive.server}/matters`, {name: state.currentMatter})
        .then(() => {
          dispatch('loadMatters')
        })
      }
    },
    removeGrocery ({commit}, id) {
      commit('removeGrocery', id)
      return axios.delete(`${sensitive.server}/groceries/${id}`)
    },
    removeMatter ({commit}, id) {
      commit('removeMatter', id)
      return axios.delete(`${sensitive.server}/matters/${id}`)
    }
  }
})

Vue.prototype.$store = store;