import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from '../pages/Main'
import Hotlist from '../pages/Hotlist'
import Library from '../pages/Library'
import NotFound from '../pages/NotFound'
import Album from '../pages/Album'

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
    {
      path: '/album/:id',
      name: 'Альбом',
      component: Album,
      props: true
    },
    {
      path: '*',
      name: '404 Not Found',
      component: NotFound
    },
]
  
export default new Router({
    mode: 'history',
    routes
})