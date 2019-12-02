import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import Contact from 'pages/Contact'
import About from 'pages/About'
import Menu from 'pages/Menu'
import Login from 'pages/Login'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Contact',
    component: Contact
  },
  {
    path: '/About',
    component: About
  },
  {
    path: '/Menu',
    component: Menu
  },
  {
      path: '/Login',
      component: Login
  }
]

export default new Router({
  routes
})
