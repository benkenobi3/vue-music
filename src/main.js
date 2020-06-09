import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue' 
import {BFormRating} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.component('b-form-rating', BFormRating)

import store from './store'
import router from './components/elements/router'

import Axios from 'axios'
Vue.prototype.$http = Axios

const token = localStorage.getItem('token')

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'JWT ${token}'
}

new Vue({

  store,
  router,

  render: h => h(App),

}).$mount('#app')
