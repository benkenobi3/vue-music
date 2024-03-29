import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import store from './store'
import router from './components/elements/router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


import {BFormRating} from 'bootstrap-vue'
Vue.component('b-form-rating', BFormRating)


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
