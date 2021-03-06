import Vue from 'vue'
import Vuetify from 'vuetify'
import { store } from './store/store.js'
import { BootstrapVue, } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
// import './custom.scss'


import Router from "vue-router";
import Index from "./components/Index.vue";
import Dashboard from "./components/Dashboard.vue";
import './main.css'
import vuetify from './plugins/vuetify';
import VueSimpleAlert from "vue-simple-alert";
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
  Vue.use(Vuesax)

Vue.use(VueSimpleAlert);



Vue.use(BootstrapVue)

Vue.use(Vuetify)
Vue.use(Router);


const routes = [
  { path: '/', component: Index},
  {path:'/dashboard',component: Dashboard, name:'dashboard', props: true}
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
