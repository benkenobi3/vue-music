import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from '../pages/Main'
import Top from '../pages/Top'
import Library from '../pages/Library'
import NotFound from '../pages/NotFound'
import Album from '../pages/Album'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Singer from '../pages/Singer'

const routes = [
    {
      path: '/',
      name: 'Главная',
      component: Main
    },
    {
      path: '/top',
      name: 'Топ-100',
      component: Top
    },
    {
      path: '/search/:srch',
      name: 'Поиск',
      component: Search,
      props: true
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
      path: '/singer/:id',
      name: 'Исполнитель',
      component: Singer,
      props: true
    },
    {
      path: '/login',
      name: 'Авторизация',
      component: Login
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