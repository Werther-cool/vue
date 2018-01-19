import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage'
import Index from '../pages/Index'
import Detail from '../components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
    
  ]
})
