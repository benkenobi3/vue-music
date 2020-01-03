import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

import store from './store'
import router from './components/elements/router'

new Vue({

  store,
  router,

  render: h => h(App),

}).$mount('#app')
