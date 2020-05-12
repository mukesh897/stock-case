import Vue from 'vue';
import Vuex from 'vuex';
import NewsService from '../NewsService';

Vue.use(Vuex);

function initialState() {
    return {
        zeroState: 'true',
        modals: [{
                name: "signupModal",
                show: false
            },
            {
                name: "loginModal",
                show: false
            },
        ],
        news: [],

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
            var index = -1;
            for (var i = 0; i < state.modals.length; i++) {
                var item = state.modals[i];
                if (item.name === name) {
                    index = i;
                    break;
                }
            }
            var element = {};
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
                state.modals[index].show = show;
                element.show = show;
                if (hasOverlay != null) {
                    state.modals[index].hasOverlay = hasOverlay;
                    element.hasOverlay = hasOverlay;
                }
                if (data != null) {
                    element.data = data;
                }
                if (data)
                    Vue.set(state.modals, index, element)
            }
        },
        setNews(state, news) {
            state.news = news;
        },
    },
    actions: {
        setNews({commit}, news) {
            commit("setNews", news);
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
              var response = (await NewsService.getStockData(news));
              dispatch("setNews", response.result);
            } catch (error) {
              dispatch("setNews", []);
            }
        },
        async fetchBucketNews({dispatch},news) {
            try {
              var response = (await NewsService.getBucketNews(news));
              dispatch("setNews", response.result);
            } catch (error) {
              dispatch("setNews", []);
            }
        },
    },
    getters: {
        //This is not working, it is returning the correct object but not able to typecast
        getModalShowState(state) {
          return function(name) {
            for (var i = 0; i < state.modals.length; i++) {
              var item = state.modals[i];
              if (item.name === name) {
                return item;
              }
            }
          };
        },
        news(state) {
            return state.news.slice(0,15)
        },
        positiveNews: state => {
            return state.news.filter(news => (news.sentiment > 0)).slice(0,15)
        },
        negativeNews: state => {
            return state.news.filter(news => (news.sentiment < 0)).slice(0,15)
        }
    }    
})