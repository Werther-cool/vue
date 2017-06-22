import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Apple from '@/components/Apple'
import Banana from '@/components/Banana'
import RedApple from '@/components/RedApple'
import GreenApple from '@/components/GreenApple'


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/apple/:num',
      name: 'apple',
      component:Apple,
      children:[
        {
          path:'/apple/1',
          name: 'redapple',
          component:RedApple,
        },
        {
          path:'/apple/2',
          name: 'greenapple',
          component:GreenApple,
        }
      ]
    },
    {
      path:'/banana',
      name: 'banana',
      component:Banana
    },
  ]
})
