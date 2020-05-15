import Vue from 'vue'
import Vuex from 'vuex'
import NewsService from '../NewsService'
import graphService from '../services/graphService'
import authService from '../services/authService'

Vue.use(Vuex)

function initialState() {
  return {
    zeroState: 'true',
    modals: [{
      name: 'signUpModal',
      show: false
      },
      {
        name: 'loginModal',
        show: false
      },
    ],
    isUserLoggedIn: false,
    userId: '',
    news: [],
    graphData: {}
  }
}

export const store = new Vuex.Store({
  strict: true,
  state: initialState(),
  mutations: {
    showModal(state, {
      name,
      show,
      hasOverlay,
      data
    }) {
      let index = -1
      for (let i = 0; i < state.modals.length; i++) {
        let item = state.modals[i]
        if (item.name === name) {
          index = i
          break;
        }
      }
      let element = {}
      if (hasOverlay)
        element = {
          name: name,
          show: false,
          hasOverlay: false,
          data: {}
        }
      else
        element = {
          name: name,
          show: false,
          data: {}
        }
      if (index != -1) {
        state.modals[index].show = show
        element.show = show
        if (hasOverlay != null) {
          state.modals[index].hasOverlay = hasOverlay
          element.hasOverlay = hasOverlay
        }
        if (data != null) {
          element.data = data
        }
        if (data)
          Vue.set(state.modals, index, element)
      }
    },
    setNews(state, news) {
      state.news = news
    },
    setGraphData(state, graphData) {
      state.graphData = graphData
    },
    setIsUserLoggedIn(state, flag) {
      state.isUserLoggedIn = flag
    },
    setUserId(state, userId) {
      state.userId = userId
    }
  },
  actions: {
    setNews({commit}, news) {
      commit("setNews", news)
    },
    setGraphData({ commit }, graphData) {
      commit('setGraphData', graphData)
    },
    setIsUserLoggedIn({ commit }, flag) {
      commit('setIsUserLoggedIn', flag)
    },
    setUserId({ commit }, userId) {
      commit('setUserId', userId)
    },
    showModal({ commit }, name) {
      commit('showModal', {
        name: name,
        show: true,
        hasOverlay: true
      })
    },
    showModalWithOptions({ commit }, { name, hasOverlay, data }) {
      commit('showModal', {
        name: name,
        show: true,
        hasOverlay: hasOverlay,
        data: data
      })
    },
    hideModal({ commit }, name) {
      commit('showModal', {
        name: name,
        show: false
      })
    },
    async fetchNews({ dispatch },news) {
      try {
        let response = (await NewsService.getStockData(news))
        dispatch('setNews', response.result)
      } catch (error) {
        dispatch('setNews', [])
      }
    },
    async fetchBucketNews({ dispatch },news) {
      try {
        let response = (await NewsService.getBucketNews(news))
        dispatch('setNews', response.result)
      } catch (error) {
        dispatch('setNews', [])
      }
    },
    async fetchBucketGraphData({ dispatch }, id) {
      try {
        const response = await graphService.getBucketGraphData(id)
        let data = []
        for (let i = 0; i < response.price.length; i++) data[i] = [response.time[i]*1000, response.price[i]]
        dispatch('setGraphData', data)
      } catch (error) {
        dispatch('setGraphData', {})
      }
    },
    async fetchGraphData({ dispatch }, { symbol, interval }) {
      try {
        const response = await graphService.getGraphData(symbol, interval)
        let data = []
        for (let i = 0; i < response.price.length; i++) data[i] = [response.time[i]*1000, response.price[i]]
        dispatch('setGraphData', data)
      } catch (error) {
        dispatch('setGraphData', {})
      }
    },
    async callUserLogin({ dispatch }, { email, password }) {
      try {
        await authService.userLogin(email, password)
          .then((response) => {
            dispatch('setIsUserLoggedIn', true)
            dispatch('setUserId', response)
          })
          .catch((error) => {
            console.error(error.stack)
          })
      } catch (error) {
        dispatch('setIsUserLoggedIn', false)
        dispatch('setUserId', '')
        console.error(error.stack)
      }
    },
    async callUserSignUp({ dispatch }, { firstName, lastName, email, password }) {
      try {
        await authService.userSignUp(firstName, lastName, email, password)
          .then((response) => {
            dispatch('setIsUserLoggedIn', true)
            dispatch('setUserId', response)
          })
          .catch((error) => {
            console.error(error.stack)
          })
      } catch (error) {
        dispatch('setIsUserLoggedIn', false)
        dispatch('setUserId', '')
        console.error(error.stack)
      }
    }
  },
  getters: {
    //This is not working, it is returning the correct object but not able to typecast
    getModalShowState(state) {
      return function(name) {
        for (let i = 0; i < state.modals.length; i++) {
          let item = state.modals[i]
          if (item.name === name) {
            return item
          }
        }
      }
    },
    news(state) {
      return state.news.slice(0,15)
    },
    positiveNews: state => {
      return state.news.filter(news => (news.sentiment > 0)).slice(0,15)
    },
    negativeNews: state => {
      return state.news.filter(news => (news.sentiment < 0)).slice(0,15)
    },
    graphData(state) {
      return state.graphData
    },
    isUserLoggedIn(state) {
      return state.isUserLoggedIn
    },
    userId(state) {
      return state.userId
    }
  }
})