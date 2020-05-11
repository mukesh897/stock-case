import Vue from 'vue'
import Vuex from 'vuex'
import NewsService from '../NewsService'
import graphService from '../services/graphService'

Vue.use(Vuex)

function initialState() {
    return {
        zeroState: 'true',
        modals: [{
                name: "signUpModal",
                show: false
            },
            {
                name: "loginModal",
                show: false
            },
        ],
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
            let element = {};
            if (hasOverlay)
                element = {
                    name: name,
                    show: false,
                    hasOverlay: false,
                    data: {}
                };
            else
                element = {
                    name: name,
                    show: false,
                    data: {}
                };
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
        }
    },
    actions: {
        setNews({commit}, news) {
            commit("setNews", news)
        },
        showModal({
            commit
        }, name) {
            commit("showModal", {
                name: name,
                show: true,
                hasOverlay: true
            });
        },
        showModalWithOptions({
            commit
        }, {
            name,
            hasOverlay,
            data
        }) {
            commit("showModal", {
                name: name,
                show: true,
                hasOverlay: hasOverlay,
                data: data
            });
        },
        hideModal({
            commit
        }, name) {
            commit("showModal", {
                name: name,
                show: false
            });
        },
        async fetchNews({dispatch},news) {
            try {
              let response = (await NewsService.getStockData(news))
              dispatch("setNews", response.result.data);
            } catch (error) {
              dispatch("setNews", []);
            }
        },
        async fetchBucketNews({dispatch},news) {
            try {
              var response = (await NewsService.getBucketNews(news));
              dispatch("setNews", response.result.data)
            } catch (error) {
              dispatch("setNews", [])
            }
        },
        async fetchGraphData({dispatch}, symbol, interval) {
            try {
                const response = await graphService.getGraphData(symbol, interval)
                dispatch('setGraphData', response)
            } catch (error) {
                dispatch("fetchGraphData", [])
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
            return state.news
            return state.news.filter(news => (news.sentiments === 0))
        },
        positiveNews: state => {
            return state.news.filter(news => (news.sentiments > 0))
        },
        negativeNews: state => {
            return state.news.filter(news => (news.sentiments < 0))
        }
    }    
})