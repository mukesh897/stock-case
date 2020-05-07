import Vue from 'vue'
import Vuetify from 'vuetify'
import { store } from './store/store.js'
import { BootstrapVue, } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueApexCharts from 'vue-apexcharts'

import App from './App.vue'
// import './custom.scss'


import Router from "vue-router";
import Index from "./components/Index.vue";
import Dashboard from "./components/Dashboard.vue";
import './main.css'
import vuetify from './plugins/vuetify';

Vue.use(BootstrapVue)

Vue.use(Vuetify)
Vue.use(Router);
Vue.component('apexchart', VueApexCharts)

const routes = [
  { path: '/', component: Index},
  {path:'/dashboard',component: Dashboard}
];

const router = new Router({
  routes
})

Vue.config.productionTip = false

Vue.use(Vuetify);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
