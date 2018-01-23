import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage'
import Index from '../pages/index'
import Detail from '../pages/detail1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
    
  ]
})
