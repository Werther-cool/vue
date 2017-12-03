import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '../pages/MainPage'
import Nav from '../pages/Nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    }
  ]
})
