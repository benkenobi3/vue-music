import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from './pages/Main'
import Hotlist from './pages/Hotlist'
import Library from './pages/Library'

const routes = [
    {
      path: '/',
      name: 'Главная',
      component: Main
    },
    {
      path: '/hotlist',
      name: 'Хотлист',
      component: Hotlist
    },
    {
      path: '/library',
      name: 'Библиотека',
      component: Library
    },
]
  
export default new Router({
    mode: 'history',
    routes
})