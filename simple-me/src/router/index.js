import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import guild from '@/components/guild'
import guild1 from '@/components/guild1'
import guild2 from '@/components/guild2'
import guild3 from '@/components/guild3'
import guild4 from '@/components/guild4'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/guide',
      name: 'guide',
      component: guide,
      children:[{
        name:'default',
        path:'',
        component:guide1
      },{
        name:'page1',
        path:1,
        component:guide1
      },{
          name:'page2',
          path:2,
          component:guide2
      },{
        name:'page3',
        path:3,
        component:guide3
      },{
        name:'page4',
        path:4,
        component:guide4
      }]
    }
  ]
})
