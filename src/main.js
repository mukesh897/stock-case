import Vue from 'vue'
import Vuetify from 'vuetify'
import { store } from './store/store.js'

Vue.use(Vuetify)
import App from './App.vue'

import Router from "vue-router";
import Index from "./components/Index.vue";

Vue.use(Router);


const routes = [
  { path: '/', component: Index},
];

const router = new Router({
  routes
})

Vue.config.productionTip = false

Vue.use(Vuetify);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
