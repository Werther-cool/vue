import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/detail'
import Father from '@/pages/father'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/father',
      name: 'Father',
      component: Father
    },
  ]
})
